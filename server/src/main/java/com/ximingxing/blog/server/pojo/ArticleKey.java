package com.ximingxing.blog.server.pojo;

public class ArticleKey {
    private Integer articleId;

    private String articleAlias;

    public Integer getArticleId() {
        return articleId;
    }

    public void setArticleId(Integer articleId) {
        this.articleId = articleId;
    }

    public String getArticleAlias() {
        return articleAlias;
    }

    public void setArticleAlias(String articleAlias) {
        this.articleAlias = articleAlias == null ? null : articleAlias.trim();
    }
}