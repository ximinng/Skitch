import axios from 'axios';
import * as actionTypes from './actionTypes';
import * as Constants from '../../../common/Constants';
import Qs from 'qs';

const requestLabelAndSortInfos = (labelItems, sortItems, msg) => ({
    type: actionTypes.FILL_IN_FORMS,
    labelItems,
    sortItems,
    msg
});

/**
 * 从后端获取所有标签和分类
 */
export const fillInFormWithLabelAndSort = () => {
    return (dispatch) => {
        axios.get('http://localhost:8080/admin/article').then((res) => {
                const response = res.data;
                const labelItems = [];
                const sortItems = [];
                const msg = res.data.msg;

                if (response.status.toString() === Constants.SUCCESS) {
                    const labels = response.data.labels;
                    labels.map((item) => {
                        labelItems.push([item.labelId, item.labelName]);
                    });
                    const sorts = response.data.sorts;
                    sorts.map((item) => {
                        sortItems.push([item.sortId, item.sortName]);
                    });

                    console.log(labelItems, sortItems);
                    dispatch(requestLabelAndSortInfos(labelItems, sortItems, msg))
                }
            }
        ).catch((error) => {
            console.log(error);
        })
    }
};

const handleCreateArticle = (redirect) => ({
    type: actionTypes.HANDLE_REDIRECT,
    redirect
});

/**
 * 调用后端接口创建文章
 * @param values info about new article.
 */
export const createArticle = (values) => {
    return (dispatch) => {
        // 组装label
        const newLabels = [];
        values.labels.map((item) => {
            newLabels.push({
                labelId: item
            })
        });

        axios.post('http://localhost:8080/admin/article', {
                articleTitle: values.articleTitle,
                articleAlias: values.articleAlias,
                sort: {
                    sortId: values.sorts
                },
                labels: newLabels,
                articleContent: values.articleContent,
                articleStatus: values.articleStatus
            }
        ).then(function (response) {
            // console.log(response.data); // status msg
            dispatch(handleCreateArticle(true))
        }).catch(function (error) {
            console.log(error.data);
            dispatch(handleCreateArticle(false))
        });
    }
};

const getArticles = (articles) => ({
    type: actionTypes.SET_ARTICLES,
    articles
});

/**
 * 请求所有文章信息 --- id title alias
 * @returns {Function}
 */
export const requestArticles = () => {
    return (dispatch) => {
        axios.get('http://localhost:8080/admin/articles').then((res) => {
            const response = res.data;
            const values = [];

            if (response.status.toString() === Constants.SUCCESS) {
                response.data.map((item) => {
                    values.push(item);
                });
                dispatch(getArticles(values));
            } else if (response.status.toString() === Constants.ERROR) {
            }
        }).catch((error) => {
            console.log(error);
        })
    }
};

const setArticle = (article) => ({
    type: actionTypes.SET_ARTICLE,
    article
});

/**
 * 根据文章id查询文章信息
 * @param id
 */
export const fillInFormById = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:8080/admin/article/${id}`).then((res) => {
            const response = res.data;
            if (response.status.toString() === Constants.SUCCESS) {
                console.log(response.data);
                dispatch(setArticle(response.data));
            } else if (response.status.toString === Constants.ERROR) {
            }
        }).catch((error) => {
            console.log(error);
        })
    }
};

export const formChange = (changedFields) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.FORM_CHANGE,
            changedFields
        })
    }
};