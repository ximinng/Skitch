import {auth} from '../../common/request';
import * as actionTypes from './actionTypes';

const loginSuccess = (token) => ({
    type: actionTypes.LOGIN,
    token,
    isLogin: true
});

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

            dispatch(loginSuccess(res.headers.authorization));
        });
    }
};