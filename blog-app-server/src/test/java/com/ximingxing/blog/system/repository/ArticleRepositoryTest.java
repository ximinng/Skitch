package com.ximingxing.blog.system.repository;

import com.ximingxing.blog.system.entity.Article;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;

import static org.junit.Assert.*;

/**
 * Description:
 * Created By xxm
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class ArticleRepositoryTest {

    @Autowired
    private ArticleRepository articleRepository;

    @Test
    public void ArticleRepositoryMethodTest() {
        System.out.println(
                articleRepository.save(Article.builder()
                        .articleTitle("##Title")
                        .articleViews(20)
                        .articleContent("##123")
                        .createTime(new Date())
                        .updateTime(new Date())
                        .build())
        );
    }
}