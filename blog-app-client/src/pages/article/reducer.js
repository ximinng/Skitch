import * as actionTypes from './actionTypes';
import {fromJS} from "immutable";

const defaultState = fromJS({
    title: "the title of article",
    article: "## 没有内容"
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_ARTICLE:
            return state.merge({
                title: fromJS(action.title),
                article: fromJS(action.article)
            });
        default:
            return state;
    }
}
