package com.ximingxing.blog.server.dao;

import com.ximingxing.blog.server.pojo.ArticleWithLabelsKey;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ArticleWithLabelsMapper {
    int deleteByPrimaryKey(ArticleWithLabelsKey key);

    int insert(ArticleWithLabelsKey record);

    int insertSelective(ArticleWithLabelsKey record);

    List<Integer> selectLabelIdsByArticleId(Integer id);
}