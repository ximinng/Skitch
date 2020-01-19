package com.ximingxing.blog.system.service;

import com.ximingxing.blog.system.entity.User;
import org.springframework.data.domain.Page;

import java.util.Map;

/**
 * Description:
 * Created By xxm
 */
public interface UserService {
    void saveUser(Map<String, String> registerUser);

    User findUserByUserName(String name);

    void deleteUserByUserName(String name);

    Page<User> getAllUser(int pageNum, int pageSize);
}
