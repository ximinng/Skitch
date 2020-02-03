package com.ximingxing.blog.system.service;

import com.ximingxing.blog.system.entity.SiteConfigure;
import org.springframework.http.ResponseEntity;

import java.util.List;

/**
 * Description: SiteConfigureService
 * Created By xxm
 */
public interface SiteConfigureService {

    /**
     * 获取网站全部配置项目
     */
    ResponseEntity<List<SiteConfigure>> getSiteConfigure();
}
