package com.ximingxing.blog.server.dao;

import com.ximingxing.blog.server.pojo.Sort;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SortMapper {
    int deleteByPrimaryKey(Integer sortId);

    int insert(Sort record);

    int insertSelective(Sort record);

    Sort selectByPrimaryKey(Integer sortId);

    List<Sort> selectAll();

    int updateByPrimaryKeySelective(Sort record);

    int updateByPrimaryKey(Sort record);
}