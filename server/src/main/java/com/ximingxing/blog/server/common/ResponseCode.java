package com.ximingxing.blog.server.common;

/**
 * 响应的枚举类
 */
public enum ResponseCode {

    SUCCESS(0, "SUCCESS"),
    ERROR(1, "ERROR"),
    NEED_LOGIN(10, "NEED_LOGIN"),
    ILLEGAL_ARGUMENT(2, "ILLEGAL_ARGUMENT");

    private final int code;
    private final String desc;

    // 这里使用default的修饰，只允许类内部及本包调用
    ResponseCode(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    /**
     * 暴露获取属性的方法
     *
     * @return
     */
    public int getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }
}