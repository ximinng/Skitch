import {auth} from '../../common/request';
import * as actionTypes from './actionTypes';

/**
 * 已登陆
 * @param token 后端返回的token
 * @returns {{type: string, token: *}}
 */
const loggedIn = (token) => ({
    type: actionTypes.USER_LOGGED_IN,
    token: token
});

export const login = user => dispatch => {
    // 登陆中
    dispatch({
        type: actionTypes.USER_LOGGING_IN
    });
    // 已登陆
    const data = {
        "username": user.username,
        "password": user.password,
        "rememberMe": user.remember
    };
    auth.post('/login', data).then((res) => {
        console.log(res);
        console.log(res.headers.authorization);

        dispatch(loggedIn(res.headers.authorization));
    });
};

/**
 * 正在登陆
 * @returns {{isLoading: boolean, type: string}}
 */
const loggingIn = () => ({
    type: actionTypes.USER_LOGGING_IN,
    isLoading: true
});

export const userLoggingAction = () => {
    return (dispatch) => {
        dispatch(loggingIn())
    }
};

/**
 * 已登陆
 * @param token 后端返回的token
 * @returns {{type: string, token: *}}
 */
// const loggedIn = (token) => ({
//     type: actionTypes.USER_LOGGED_IN,
//     token: token
// });

export const userLoginAction = (user) => {
    return (dispatch) => {
        const data = {
            "username": user.username,
            "password": user.password,
            "rememberMe": user.remember
        };
        auth.post('/login', data).then((res) => {
            console.log(res);
            console.log(res.headers.authorization);

            dispatch(loggedIn(res.headers.authorization));
        })
    }
};