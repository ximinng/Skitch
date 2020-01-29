package com.ximingxing.blog.system.repository;

import com.ximingxing.blog.system.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Description: ArticleRepository
 * Created By xxm
 */
public interface ArticleRepository extends JpaRepository<Article, Integer> {

}
