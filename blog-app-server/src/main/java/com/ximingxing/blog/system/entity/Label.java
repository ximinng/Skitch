package com.ximingxing.blog.system.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * Description: 文章标签实体
 * Created By xxm
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "s_label")
public class Label {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "label_id", nullable = false)
    private Integer labelId; // 标签ID

    @Column(name = "label_name", nullable = false, length = 50)
    private String labelName; // 标签名称

//    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//    @JoinColumn(name = "article_id")
//    private Article article;
}
