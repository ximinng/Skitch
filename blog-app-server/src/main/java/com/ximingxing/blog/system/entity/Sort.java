package com.ximingxing.blog.system.entity;

import lombok.Data;

import javax.persistence.*;

/**
 * Description: 分类实体
 * Created By xxm
 */
@Data
@Entity
@Table(name = "s_sort")
public class Sort {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sort_id", nullable = false)
    private Integer sortId; // 分类ID


    @Column(name = "sort_name", nullable = false, length = 50)
    private String sortName; // 分类名称

    @Column(name = "parent_id", nullable = false)
    private Integer parentId; // 父分类ID
}
