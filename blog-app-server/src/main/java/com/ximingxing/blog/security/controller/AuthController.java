package com.ximingxing.blog.security.controller;

import com.ximingxing.blog.system.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;


/**
 * Description: Auth Controller
 * Created By xxm
 */
@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity registerUser(@RequestBody Map<String, String> registerUser) {
        userService.saveUser(registerUser);
        return ResponseEntity.ok().build();
    }
}
