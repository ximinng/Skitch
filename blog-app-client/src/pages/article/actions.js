import axios from 'axios';
import * as actionTypes from './actionTypes';

const getDetail = (title, article) => ({
    type: actionTypes.GET_ARTICLE,
    title,
    article
});

export const getArticle = (id) => {
    return (dispatch) => {
        axios.get("/api/article.json?id" + id).then((res) => {
            const data = res.data.data;
            dispatch(getDetail(data.title, data.article));
        })
    }
};