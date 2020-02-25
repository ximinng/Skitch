import * as actions from './actionTypes';
import {fromJS} from "immutable";
import {ACCESS_TOKEN} from '../../common/constants';

const defaultState = fromJS({
    user: '',
    token: null,
    isLoading: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actions.USER_LOGGING_IN:
            return state.set('isLoading', fromJS(true));
        case actions.USER_LOGGED_IN:
            localStorage.setItem(ACCESS_TOKEN, action.token);
            return state.merge({
                token: fromJS(action.token),
                isLoading: fromJS(false)
            });
        default:
            return state;
    }
}