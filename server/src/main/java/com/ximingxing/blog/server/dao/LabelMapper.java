package com.ximingxing.blog.server.dao;

import com.ximingxing.blog.server.pojo.Label;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface LabelMapper {
    int deleteByPrimaryKey(Integer labelId);

    int insert(Label record);

    int insertSelective(Label record);

    Label selectByPrimaryKey(Integer labelId);

    List<Label> selectAll();

    int updateByPrimaryKeySelective(Label record);

    int updateByPrimaryKey(Label record);
}