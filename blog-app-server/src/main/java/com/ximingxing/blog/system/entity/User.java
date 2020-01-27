package com.ximingxing.blog.system.entity;

import com.ximingxing.blog.system.enums.UserStatus;
import lombok.Data;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


/**
 * Description: 用户实体
 * Created By xxm
 */
@Data
@Entity
@Table(name = "s_user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id; // 用户ID

    @Column(name = "username")
    private String username; // 用户账号

    @Column(name = "password")
    private String password; // 用户密码 -- 加密

    @Column(name = "status")
    @Enumerated(value = EnumType.STRING)
    private UserStatus status; // 当前用户是否激活

    @Column(name = "role")
    private String roles; // 用户权限

    /**
     * 将Roles字段组装成SpringSecurity中SimpleGrantedAuthority
     * 在权限字符前拼接`ROLE_`
     *
     * @return List<SimpleGrantedAuthority>
     */
    public List<SimpleGrantedAuthority> getRoles() {
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
        Arrays.stream(roles.split(","))
                .forEach(role -> authorities.add(new SimpleGrantedAuthority("ROLE_" + role)));
        return authorities;
    }

}
