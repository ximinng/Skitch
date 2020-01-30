package com.ximingxing.blog.system.repository;

import com.ximingxing.blog.system.entity.Article;
import com.ximingxing.blog.system.entity.Label;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;
import java.util.List;

import static org.junit.Assert.*;

/**
 * Description: ArticleRepository Test
 * Created By xxm
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class ArticleRepositoryTest {

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private LabelRepository labelRepository;

    /**/
    @Test
    public void saveMethodTest() {
        List<Label> labels = labelRepository.findAll();
        System.out.println(labels);
        System.out.println(
                articleRepository.save(new Article(-1, // 这里主键不能为null
                        "Title",
                        "##Content",
                        20,
                        new Date(), new Date(),
                        null, labels))
        );
    }

    @Test
    public void saveWithSortMethodTest() {
        System.out.println();
    }
}