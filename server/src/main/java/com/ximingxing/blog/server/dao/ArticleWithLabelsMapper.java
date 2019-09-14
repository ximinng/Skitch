package com.ximingxing.blog.server.dao;

import com.ximingxing.blog.server.pojo.ArticleWithLabelsKey;

public interface ArticleWithLabelsMapper {
    int deleteByPrimaryKey(ArticleWithLabelsKey key);

    int insert(ArticleWithLabelsKey record);

    int insertSelective(ArticleWithLabelsKey record);
}