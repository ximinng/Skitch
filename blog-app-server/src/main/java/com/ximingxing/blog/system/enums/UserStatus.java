package com.ximingxing.blog.system.enums;

import com.fasterxml.jackson.annotation.JsonCreator;


/**
 * Description: 用户状态
 * Created By xxm
 */
public enum UserStatus {
    CAN_USE("can use in system"),
    CAN_NOT_USE("can not use in system");

    private String status;

    UserStatus(String status) {
        this.status = status;
    }

    public String getName() {
        return this.status;
    }

    @JsonCreator
    public static UserStatus fromRole(String status) {
        for (UserStatus type : UserStatus.values())
            if (type.getName().equals(status)) return type;
        return null;
    }
}
