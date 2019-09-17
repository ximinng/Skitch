package com.ximingxing.blog.server.service;

import com.ximingxing.blog.server.common.ServerResponse;
import com.ximingxing.blog.server.vo.BeforeNewArticleVo;
import com.ximingxing.blog.server.vo.NewArticleVo;

public interface IArticleService {

    /**
     * 新建文章前填充表单
     */
    ServerResponse<BeforeNewArticleVo> FillInForm();

    /**
     * 创建新的文章
     */
    ServerResponse<String> createNewArticle(NewArticleVo newArticleVo);
}
