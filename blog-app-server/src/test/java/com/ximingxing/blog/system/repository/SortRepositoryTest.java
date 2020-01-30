package com.ximingxing.blog.system.repository;

import com.ximingxing.blog.system.entity.Sort;
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
public class SortRepositoryTest {

    @Autowired
    private SortRepository sortRepository;

    @Test
    public void saveSortMethodTest() {
        Sort sort = sortRepository.save(new Sort(null, "分类One", null));
        System.out.println(sort.getSortId());
//        sort.setParentId(sort.getSortId()); // 顶层分类
//        sortRepository.save(sort);
    }
}