package com.ximingxing.blog.system.exception;

import io.jsonwebtoken.security.SignatureException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import javax.servlet.http.HttpServletRequest;

/**
 * Description: 全局统一异常拦截器
 * Created By xxm
 */
@ControllerAdvice
public class GlobalExceptionHandler {

    /**
     * 全局统一拦截参数校验异常
     *
     * @param request
     * @param e
     * @return 仅返回自定义异常信息
     */
    public String MethodArgsValidException(HttpServletRequest request, Exception e) {
        String failMsg = null;
        if (e instanceof MethodArgumentNotValidException) {
            failMsg = ((MethodArgumentNotValidException) e).getBindingResult().getFieldError().getDefaultMessage();
        }
        return failMsg;
    }

    @ExceptionHandler(value = UserNameAlreadyExistException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorMessage handleUserNameAlreadyExistException(UserNameAlreadyExistException e) {
        return new ErrorMessage(HttpStatus.BAD_REQUEST.value(), e.getMessage());
    }

    @ExceptionHandler(value = SignatureException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorMessage handleSignatureException(SignatureException e) {
        return new ErrorMessage(HttpStatus.UNAUTHORIZED.value(), e.getMessage());
    }
}
