package com.ximingxing.blog.system.repository;

import com.ximingxing.blog.system.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Description: UserRepository
 * Created By xxm
 */
public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username);

    @Transactional
    void deleteByUsername(String username);

//    @Query("select status from user where username= :username")
//    Optional<String> findUserStatusByName(@Param("username") String username);
}
