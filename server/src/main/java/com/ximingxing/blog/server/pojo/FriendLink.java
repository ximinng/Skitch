package com.ximingxing.blog.server.pojo;

public class FriendLink {
    private Integer friendLinkId;

    private String friendLinkUrl;

    private String friendLinkName;

    public Integer getFriendLinkId() {
        return friendLinkId;
    }

    public void setFriendLinkId(Integer friendLinkId) {
        this.friendLinkId = friendLinkId;
    }

    public String getFriendLinkUrl() {
        return friendLinkUrl;
    }

    public void setFriendLinkUrl(String friendLinkUrl) {
        this.friendLinkUrl = friendLinkUrl == null ? null : friendLinkUrl.trim();
    }

    public String getFriendLinkName() {
        return friendLinkName;
    }

    public void setFriendLinkName(String friendLinkName) {
        this.friendLinkName = friendLinkName == null ? null : friendLinkName.trim();
    }
}