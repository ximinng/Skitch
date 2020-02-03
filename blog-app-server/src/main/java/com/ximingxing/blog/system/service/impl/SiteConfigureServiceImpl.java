package com.ximingxing.blog.system.service.impl;

import com.ximingxing.blog.system.entity.SiteConfigure;
import com.ximingxing.blog.system.repository.SiteConfigureRepository;
import com.ximingxing.blog.system.service.SiteConfigureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Description: SiteConfigureServiceImpl
 * Created By xxm
 */
@Service
public class SiteConfigureServiceImpl implements SiteConfigureService {

    @Autowired
    private SiteConfigureRepository siteConfigureRepository;

    @Override
    public ResponseEntity<List<SiteConfigure>> getSiteConfigure() {
        List<SiteConfigure> siteConfigureList = siteConfigureRepository.findAll();
        if (siteConfigureList.isEmpty()) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.ok(siteConfigureList);
    }
}
