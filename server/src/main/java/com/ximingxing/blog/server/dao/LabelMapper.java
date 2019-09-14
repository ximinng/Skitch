package com.ximingxing.blog.server.dao;

import com.ximingxing.blog.server.pojo.Label;

public interface LabelMapper {
    int deleteByPrimaryKey(Integer labelId);

    int insert(Label record);

    int insertSelective(Label record);

    Label selectByPrimaryKey(Integer labelId);

    int updateByPrimaryKeySelective(Label record);

    int updateByPrimaryKey(Label record);
}