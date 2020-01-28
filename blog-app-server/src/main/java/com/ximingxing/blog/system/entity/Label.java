package com.ximingxing.blog.system.entity;

import lombok.Data;

import javax.persistence.*;

/**
 * Description: 文章标签实体
 * Created By xxm
 */
@Data
@Entity
@Table(name = "s_label")
public class Label {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "label_id", nullable = false)
    private Integer labelId; // 标签ID

    @Column(name = "label_name", nullable = false, length = 50)
    private String labelName; // 标签名称
}
