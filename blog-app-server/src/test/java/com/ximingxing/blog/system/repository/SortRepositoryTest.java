package com.ximingxing.blog.system.repository;

import com.ximingxing.blog.system.entity.Sort;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

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
        Sort sort1 = sortRepository.save(new Sort(1, "分类One", null));
        System.out.println(sort1.getSortId());

        Sort sort2 = sortRepository.save(new Sort(2, "分类Two", null));
        System.out.println(sort2.getSortId());

        Sort sort3 = sortRepository.save(new Sort(3, "分类Three", null));
        System.out.println(sort3.getSortId());
        sort3.setParentId(sort3.getSortId()); // 顶层分类: sort_id == parent_id
        sortRepository.save(sort3);

        // 1 <- 2 <- 3
        sort1.setParentId(sort2.getSortId());
        sort2.setParentId(sort3.getSortId());
        sortRepository.save(sort1);
        sortRepository.save(sort2);
    }

    /**
     * 递归查询分类归属
     *
     * @param id       调用前确保id存在
     * @param sortList 小分类 -> 大分类,顺序存储
     * @return sortList
     */
    public List<Optional<Sort>> getSortByRecursion(Integer id, List<Optional<Sort>> sortList) {
        Optional<Sort> curSort = sortRepository.findSortBySortId(id);
        sortList.add(curSort);
        // curSort不存在存在或者sortId等于parentId
        if (curSort.isPresent() && (curSort.get().getParentId().equals(curSort.get().getSortId()))) {
            return sortList;
        } else {
            id = curSort.get().getParentId();
            return getSortByRecursion(id, sortList);
        }
    }

    @Test
    public void findSortRecursionMethodTest() {
        // 给定分类名称查询父分类
        String tar = "分类One";
        Optional<Sort> sortOption = sortRepository.findSortBySortName(tar);
        Integer sortId = sortOption.get().getSortId();

        // 递归查询父分类
        List<Optional<Sort>> sortByRecursion = getSortByRecursion(sortId, new LinkedList<>());

        System.out.println(sortByRecursion);
    }

    @Test
    public void saveTopSortMethodTest() {
        Sort sort = sortRepository.save(new Sort(-1, "分类Three", null));
        System.out.println(sort.getSortId());
        sort.setParentId(sort.getSortId()); // 顶层分类: sort_id == parent_id
        sortRepository.save(sort);
    }
}