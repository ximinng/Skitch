package com.ximingxing.blog.server.vo;

import com.ximingxing.blog.server.pojo.Label;
import com.ximingxing.blog.server.pojo.Sort;
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
    private Sort sort;
    private List<Label> labels;
    private String articleContent;
    private Integer articleStatus;
}
