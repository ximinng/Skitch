package com.ximingxing.blog.server.controller.admin;

import com.ximingxing.blog.server.common.ServerResponse;
import com.ximingxing.blog.server.pojo.Article;
import com.ximingxing.blog.server.service.admin.IArticleService;
import com.ximingxing.blog.server.vo.BeforeNewArticleVo;
import com.ximingxing.blog.server.vo.NewArticleVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class ArticleController {

    @Autowired
    private IArticleService articleService;

    /**
     * 遍历文章信息
     */
    @GetMapping(value = "/articles")
    public ServerResponse<List<Article>> getArticles() {
        return articleService.getArticles();
    }

    /**
     * 根据文章id查询文章信息
     *
     * @param id
     * @return
     */
    @GetMapping(value = "/article/{id}")
    public ServerResponse<NewArticleVo> getArticle(@PathVariable Integer id) {
        return articleService.getArticle(id);
    }

    /**
     * 编辑文章
     */
    @PutMapping(value = "/article")
    public ServerResponse<String> editArticle() {
        return null;
    }

    /**
     * todo 这个方法url不够合适
     * 新建文章之前填充标签和分类信息
     */
    @GetMapping(value = "/article")
    public ServerResponse<BeforeNewArticleVo> getLabelAndSortInfo() {
        return articleService.fillInForm();
    }

    /**
     * 新建文章
     */
    @PostMapping(value = "/article")
    public ServerResponse<String> writeArticle(@RequestBody NewArticleVo vo) {
        System.out.println(vo);
        return articleService.createNewArticle(vo);
    }

}
