package com.ximingxing.blog.server.dao;

import com.ximingxing.blog.server.pojo.Article;
import com.ximingxing.blog.server.pojo.ArticleKey;

public interface ArticleMapper {
    int deleteByPrimaryKey(ArticleKey key);

    int insert(Article record);

    int insertSelective(Article record);

    Article selectByPrimaryKey(ArticleKey key);

    int updateByPrimaryKeySelective(Article record);

    int updateByPrimaryKeyWithBLOBs(Article record);

    int updateByPrimaryKey(Article record);
}