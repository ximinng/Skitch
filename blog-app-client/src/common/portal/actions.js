import axios from 'axios';
import * as actionTypes from './actionTypes';

const _getSiteFooterDesc = (title, content) => ({
    type: actionTypes.GET_SITE_FOOTER_DESC,
    title,
    content
});

/**
 * 获取网站描述信息.
 * @returns {Function}
 */
export const getSiteFooterDesc = () => {
    return (dispatch) => {
        axios.get('').then((res) => {
            const result = res.data.data;
            dispatch(_getSiteFooterDesc(result.title, result.content));
        })
    }
};