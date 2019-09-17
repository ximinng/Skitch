package com.ximingxing.blog.server.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NewArticleVo {
    private String articleTitle;
    private String articleAlias;
    private Integer sort;
    private List<Integer> labels;
    private String articleContent;
    private Integer articleStatus;
}
