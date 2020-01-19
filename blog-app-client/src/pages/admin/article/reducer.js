import * as actionTypes from './actionTypes';
import {fromJS} from "immutable";

const defaultState = fromJS({
    labelItems: [],
    sortItems: [],
    msg: '',
    redirect: false,
    Articles: [],
    fields: "123"
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.FORM_CHANGE:
            return state.set('fields', fromJS(action.changedFields));
        case actionTypes.SET_ARTICLE:
            return state.set('article', (action.article));
        case actionTypes.SET_ARTICLES:
            return state.set('articles', action.articles);
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
