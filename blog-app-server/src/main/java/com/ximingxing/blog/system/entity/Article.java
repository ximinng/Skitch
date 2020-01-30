package com.ximingxing.blog.system.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

/**
 * Description: 文章实体
 * Created By xxm
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "s_article")
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "article_id")
    private Integer articleId; // 文章ID

    @Column(name = "article_title", nullable = true, length = 200)
    private String articleTitle; // 文章标题

    @Lob
    @Basic(fetch = FetchType.LAZY)
    @Column(name = "article_Content")
    private String articleContent; // 文章内容

    @Column(name = "article_Views")
    private Integer articleViews; // 文章访问量

    @Column(name = "create_time")
    @Temporal(value = TemporalType.TIMESTAMP)
    private Date createTime; // 文章创建时间

    @Column(name = "update_time")
    @Temporal(value = TemporalType.TIMESTAMP)
    private Date updateTime; // 文章最后修改时间

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "sort_id")
    private Sort sort; // 文章分类

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @OrderBy("label_name DESC")
    private List<Label> labels; // 文章标签
}
