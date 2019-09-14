package com.ximingxing.blog.server.dao;

import com.ximingxing.blog.server.pojo.FriendLink;

public interface FriendLinkMapper {
    int deleteByPrimaryKey(Integer friendLinkId);

    int insert(FriendLink record);

    int insertSelective(FriendLink record);

    FriendLink selectByPrimaryKey(Integer friendLinkId);

    int updateByPrimaryKeySelective(FriendLink record);

    int updateByPrimaryKey(FriendLink record);
}