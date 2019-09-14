package com.ximingxing.blog.server.dao;

import com.ximingxing.blog.server.pojo.Sort;

public interface SortMapper {
    int deleteByPrimaryKey(Integer sortId);

    int insert(Sort record);

    int insertSelective(Sort record);

    Sort selectByPrimaryKey(Integer sortId);

    int updateByPrimaryKeySelective(Sort record);

    int updateByPrimaryKey(Sort record);
}