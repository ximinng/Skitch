package com.ximingxing.blog.system.repository;

import com.ximingxing.blog.system.entity.Label;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

/**
 * Description: LabelRepository Test
 * Created By xxm
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class LabelRepositoryTest {

    @Autowired
    private LabelRepository labelRepository;

    @Test
    public void LabelRepositoryMethodTest() {
        System.out.println(labelRepository.save(new Label(null, "标签one")));
        System.out.println(labelRepository.save(new Label(null, "标签two")));
        System.out.println(labelRepository.save(new Label(null, "标签three")));
    }
}