package com.ximingxing.blog.server.service.impl.admin;

import com.ximingxing.blog.server.common.ResponseCode;
import com.ximingxing.blog.server.common.ServerResponse;
import com.ximingxing.blog.server.dao.ArticleMapper;
import com.ximingxing.blog.server.dao.ArticleWithLabelsMapper;
import com.ximingxing.blog.server.dao.LabelMapper;
import com.ximingxing.blog.server.dao.SortMapper;
import com.ximingxing.blog.server.pojo.Article;
import com.ximingxing.blog.server.pojo.ArticleWithLabelsKey;
import com.ximingxing.blog.server.pojo.Label;
import com.ximingxing.blog.server.pojo.Sort;
import com.ximingxing.blog.server.service.admin.IArticleService;
import com.ximingxing.blog.server.vo.BeforeNewArticleVo;
import com.ximingxing.blog.server.vo.NewArticleVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;

import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

@Service
public class IArticleServiceImpl implements IArticleService {

    @Autowired
    private LabelMapper labelMapper;

    @Autowired
    private SortMapper sortMapper;

    @Autowired
    private ArticleMapper articleMapper;

    @Autowired
    private ArticleWithLabelsMapper setArticleLabelMapper;

    @Override
    public ServerResponse<NewArticleVo> getArticle(Integer id) {
        Article article = articleMapper.selectByPrimaryKey(id);
        if (article == null) {
            return ServerResponse.createByError("文章不存在");
        }

        // 组装 labels
        List<Integer> labelIds = setArticleLabelMapper.selectLabelIdsByArticleId(article.getArticleId());

        ArrayList<Label> labels = new ArrayList<>();
        for (Integer labelId : labelIds) {
            labels.add(labelMapper.selectByPrimaryKey(labelId));
        }

        // 组装 sort
        Sort sort = sortMapper.selectByPrimaryKey(article.getArticleSort());

        NewArticleVo articleVo = new NewArticleVo(
                article.getArticleTitle(),
                article.getArticleAlias(),
                sort,
                labels,
                article.getArticleContent(),
                article.getArticleStatus()
        );
        return ServerResponse.createBySuccess(articleVo);
    }

    @Override
    public ServerResponse<List<Article>> getArticles() {
        List<Article> articles = articleMapper.selectAllAbstract();
        if (CollectionUtils.isEmpty(articles)) {
            return ServerResponse.createByError("没有文章信息");
        }
        return ServerResponse.createBySuccess(articles);
    }

    @Override
    public ServerResponse<BeforeNewArticleVo> fillInForm() {
        List<Label> labels = labelMapper.selectAll();
        List<Sort> sorts = sortMapper.selectAll();

        if (CollectionUtils.isEmpty(labels) && CollectionUtils.isEmpty(sorts)) {
            return ServerResponse.createByError("无可用的分类以及标签信息");
        } else if (CollectionUtils.isEmpty(labels)) {
            return ServerResponse.createBySuccess("无标签信息", new BeforeNewArticleVo(null, sorts));
        } else if (CollectionUtils.isEmpty(sorts)) {
            return ServerResponse.createBySuccess("无分类信息", new BeforeNewArticleVo(labels, null));
        }
        return ServerResponse.createBySuccess(new BeforeNewArticleVo(labels, sorts));
    }

    @Override
    @Transactional
    public ServerResponse<String> createNewArticle(NewArticleVo article) {
        Article record = new Article(null,
                article.getArticleAlias(),
                article.getArticleTitle(),
                article.getSort().getSortId(),
                0, 0,
                article.getArticleStatus() == null ? 1 : article.getArticleStatus(),
                new Date(), null,
                article.getArticleContent() == null ? "" : article.getArticleContent());
        // 插入文章信息
        int articleRes = articleMapper.insertSelectiveAndReturnKey(record);
        if (articleRes > 0) {
            // 设置标签和文章关系
            for (Label label : article.getLabels()) {
                setArticleLabelMapper.insertSelective(new ArticleWithLabelsKey(record.getArticleId(), label.getLabelId()));
            }
            return ServerResponse.createBySuccess("文章创建成功!");
        }
        return ServerResponse.createByError(ResponseCode.ERROR.getCode(), "文章创建失败!");
    }
}
