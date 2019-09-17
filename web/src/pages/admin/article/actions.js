import axios from 'axios';
import * as actionTypes from './actionTypes';
import * as Constants from '../../../common/Constants';

const requestLabelAndSortInfos = (labelItems, sortItems, msg) => ({
    type: actionTypes.GET_BEFORE_ARTICLE_INFOS,
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
                const data = res.data;
                const labelItems = [];
                const sortItems = [];
                const msg = res.data.msg;

                if (data.status.toString() === Constants.SUCCESS) {
                    const labels = data.data.labels;
                    labels.map((item) => {
                        labelItems.push([item.labelId, item.labelName]);
                    });
                    const sorts = data.data.sorts;
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

const handleRedirect = (redirect) => ({
    type: actionTypes.HANDLE_REDIRECT,
    redirect
});

/**
 * 调用后端接口创建文章
 * @param values info about new article.
 */
export const createArticle = (values) => {
    return (dispatch) => {
        // console.log('Received values of form: ', values);
        axios.post('http://localhost:8080/admin/article', {
                articleTitle: values.articleTitle,
                articleAlias: values.articleAlias,
                sort: values.sort,
                labels: values.labels,
                articleContent: values.articleContent,
                articleStatus: values.articleStatus
            }
        ).then(function (response) {
            console.log(response.data);
            dispatch(handleRedirect(true))
            // status msg
        }).catch(function (error) {
            console.log(error.data);
            dispatch(handleRedirect(false))
        });
    }
};