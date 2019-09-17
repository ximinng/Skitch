package com.ximingxing.blog.server.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Article {
    private Integer articleId;

    private String articleAlias;

    private String articleTitle;

    private Integer articleSort;

    private Integer articleViews;

    private Integer articleComments;

    private Integer articleStatus;

    private Date createTime;

    private Date updateTime;

    private String articleContent;
}