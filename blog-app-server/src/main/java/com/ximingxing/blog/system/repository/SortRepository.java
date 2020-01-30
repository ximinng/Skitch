package com.ximingxing.blog.system.repository;

import com.ximingxing.blog.system.entity.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Description: LabelRepository
 * Created By xxm
 */
@Repository
public interface SortRepository extends JpaRepository<Sort, Integer> {
}
