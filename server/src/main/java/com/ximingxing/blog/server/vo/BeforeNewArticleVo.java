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
public class BeforeNewArticleVo {
    private List<Label> labels;
    private List<Sort> sorts;
}
