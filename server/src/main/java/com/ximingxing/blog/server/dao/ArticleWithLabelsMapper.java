package com.ximingxing.blog.server.dao;

import com.ximingxing.blog.server.pojo.ArticleWithLabelsKey;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ArticleWithLabelsMapper {
    int deleteByPrimaryKey(ArticleWithLabelsKey key);

    int insert(ArticleWithLabelsKey record);

    int insertSelective(ArticleWithLabelsKey record);
}