package com.ximingxing.blog.security.dto;

import lombok.Data;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

/**
 * Description: 前端录入用户模型
 * Created By xxm
 */
@Data
public class LoginUserDTO {
    @NotNull(message = "用户名为空")
    @NotEmpty(message = "用户名为空")
    private String username;

    @NotNull(message = "密码为空")
    @Min(value = 0, message = "密码应大于一个字符")
    @Max(value = 100, message = "密码过长")
    private String password;

    @NotNull(message = "选项为空")
    @NotEmpty(message = "选项为空")
    private Boolean rememberMe;
}
