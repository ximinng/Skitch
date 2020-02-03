package com.ximingxing.blog.system.repository;

import com.ximingxing.blog.system.entity.SiteConfigure;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

/**
 * Description:
 * Created By xxm
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class SiteConfigureRepositoryTest {

    @Autowired
    private SiteConfigureRepository siteConfigureRepository;

    @Test
    public void siteConfigureSaveMethodTest() {
        SiteConfigure siteOne = new SiteConfigure(-1, "author", "ximing Xing");
        SiteConfigure siteTwo = new SiteConfigure(-1, "filing", "陕公网安备 61011302000579 号");

        siteConfigureRepository.save(siteOne);
        siteConfigureRepository.save(siteTwo);
    }
}