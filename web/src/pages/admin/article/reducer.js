import * as actionTypes from './actionTypes';
import {fromJS} from "immutable";

const defaultState = fromJS({
    labelItems: [],
    sortItems: [],
    msg: '',
    redirect: false,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.FILL_IN_FORMS:
            return state.merge({
                labelItems: state.get('labelItems').concat(fromJS(action.labelItems)),
                sortItems: state.get('sortItems').concat(fromJS(action.sortItems)),
                msg: fromJS(action.msg)
            });
        case actionTypes.HANDLE_REDIRECT:
            return state.set('redirect', fromJS(action.redirect));
        default:
            return state;
    }
}
