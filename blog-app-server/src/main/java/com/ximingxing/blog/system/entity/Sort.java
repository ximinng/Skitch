package com.ximingxing.blog.system.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * Description: 文章分类实体
 * Created By xxm
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "s_sort")
public class Sort {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sort_id")
    private Integer sortId; // 分类ID

    @Column(name = "sort_name", nullable = false, length = 50)
    private String sortName; // 分类名称

    @Column(name = "parent_id")
    private Integer parentId; // 父分类ID
}