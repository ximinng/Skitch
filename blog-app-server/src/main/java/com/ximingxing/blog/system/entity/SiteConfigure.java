package com.ximingxing.blog.system.entity;

import lombok.Data;

import javax.persistence.*;

/**
 * Description: 网站配置实体
 * <p>
 * 1. 网站备案号
 * 2. 网站基础信息
 * </p>
 * Created By xxm
 */
@Data
@Entity
@Table(name = "s_site")
public class SiteConfigure {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "configure_id", nullable = false)
    private Integer configureId; // 网站配置项ID

    @Column(name = "configure_name")
    private String configureName; // 网站配置Key

    @Column(name = "configure_desc")
    private String configureDesc; // 网站配置Value
}
