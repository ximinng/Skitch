package com.ximingxing.blog.system.repository;

import com.ximingxing.blog.system.entity.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Description: LabelRepository
 * Created By xxm
 */
@Repository
public interface SortRepository extends JpaRepository<Sort, Integer> {

    /**
     * 通过分类Id查询分类项
     *
     * @param sortId
     * @return
     */
    Optional<Sort> findSortBySortId(Integer sortId);

    /**
     * 通过分类名称查询分类项
     *
     * @param sortName
     * @return
     */
    Optional<Sort> findSortBySortName(String sortName);
}
