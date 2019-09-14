package com.ximingxing.blog.server.pojo;

public class Sort {
    private Integer sortId;

    private String sortName;

    private String sortDesc;

    private Integer sortParentId;

    public Integer getSortId() {
        return sortId;
    }

    public void setSortId(Integer sortId) {
        this.sortId = sortId;
    }

    public String getSortName() {
        return sortName;
    }

    public void setSortName(String sortName) {
        this.sortName = sortName == null ? null : sortName.trim();
    }

    public String getSortDesc() {
        return sortDesc;
    }

    public void setSortDesc(String sortDesc) {
        this.sortDesc = sortDesc == null ? null : sortDesc.trim();
    }

    public Integer getSortParentId() {
        return sortParentId;
    }

    public void setSortParentId(Integer sortParentId) {
        this.sortParentId = sortParentId;
    }
}