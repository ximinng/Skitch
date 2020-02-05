import * as actions from './actionTypes';
import {fromJS} from "immutable";
import {ACCESS_TOKEN} from '../../common/Constants';

const defaultState = fromJS({
    token: '',
    isLogin: false,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actions.LOGIN:
            localStorage.setItem(ACCESS_TOKEN, action.token);
            return state.merge({
                token: fromJS(action.token),
                isLogin: fromJS(action.isLogin)
            });
        default:
            return state;
    }
}