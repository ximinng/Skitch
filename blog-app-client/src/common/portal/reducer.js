import * as actionTypes from './actionTypes';
import {fromJS} from "immutable";

const defaultState = fromJS({
    author: "ximing Xing",
    filing: "陕公网安备 61011302000579 号"
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_SITE_FOOTER_DESC:
            return [...state];
        default:
            return state;
    }
}