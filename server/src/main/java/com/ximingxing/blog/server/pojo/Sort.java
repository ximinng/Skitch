package com.ximingxing.blog.server.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Sort {
    private Integer sortId;

    private String sortName;

    private String sortDesc;

    private Integer sortParentId;
}