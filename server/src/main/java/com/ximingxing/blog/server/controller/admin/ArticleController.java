package com.ximingxing.blog.server.controller.admin;

import com.ximingxing.blog.server.common.ServerResponse;
import com.ximingxing.blog.server.service.IArticleService;
import com.ximingxing.blog.server.vo.BeforeNewArticleVo;
import com.ximingxing.blog.server.vo.NewArticleVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class ArticleController {

    @Autowired
    private IArticleService articleService;

    /**
     * 新建文章之前填充标签和分类信息
     */
    @GetMapping(value = "/article")
    public ServerResponse<BeforeNewArticleVo> getLabelAndSortInfo() {
        return articleService.FillInForm();
    }

    /**
     * 新建文章接口
     *
     * @param vo
     */
    @PostMapping(value = "/article")
    public ServerResponse<String> writeArticle(@RequestBody NewArticleVo vo) {
        System.out.println(vo);
        return articleService.createNewArticle(vo);
    }

}
