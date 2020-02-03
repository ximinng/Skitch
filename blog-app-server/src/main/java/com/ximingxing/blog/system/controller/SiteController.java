package com.ximingxing.blog.system.controller;

import com.ximingxing.blog.system.entity.SiteConfigure;
import com.ximingxing.blog.system.service.SiteConfigureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Description: SiteController
 * Created By xxm
 */
@RestController
@RequestMapping("/api")
public class SiteController {

    @Autowired
    private SiteConfigureService siteConfigureService;

    @GetMapping("/site")
//    @PreAuthorize("hasAnyRole('ROLE_DEV','ROLE_PM','ROLE_ADMIN')")
    public ResponseEntity<List<SiteConfigure>> getAllUser() {
        return siteConfigureService.getSiteConfigure();
    }
}
