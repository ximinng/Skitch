package com.ximingxing.blog.system.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Description: 网站配置实体
 * 1. Power By
 * 2. This is code by
 * Created By xxm
 */
@Data
@Entity
@Table(name = "s_site")
public class Site {

    @Column(name = "option_name")
    private String OptionName; // 网站配置Key

    @Column(name = "option_desc")
    private String OptionDesc; // 网站配置Value
}
