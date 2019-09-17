package com.ximingxing.blog.server.service.impl;

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
import com.ximingxing.blog.server.service.IArticleService;
import com.ximingxing.blog.server.vo.BeforeNewArticleVo;
import com.ximingxing.blog.server.vo.NewArticleVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.Date;
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
    public ServerResponse<BeforeNewArticleVo> FillInForm() {
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
    public ServerResponse<String> createNewArticle(NewArticleVo article) {
        Article record = new Article(null,
                article.getArticleAlias(), article.getArticleTitle(), article.getSort(),
                0, 0,
                article.getArticleStatus() == null ? 1 : article.getArticleStatus(),
                new Date(), null,
                article.getArticleContent() == null ? "" : article.getArticleContent());
        // 插入文章信息
        int articleRes = articleMapper.insertSelectiveAndReturnKey(record);
        if (articleRes > 0) {
            // 设置标签和文章关系
            for (Integer label : article.getLabels()) {
                setArticleLabelMapper.insertSelective(new ArticleWithLabelsKey(record.getArticleId(), label));
            }
            return ServerResponse.createBySuccess("文章创建成功!");
        } else {
            return ServerResponse.createByError(ResponseCode.ERROR.getCode(), "文章创建失败!");
        }
    }
}
