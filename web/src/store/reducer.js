import {combineReducers} from 'redux-immutable';
import {reducer as homeReducer} from '../pages/home';

const reducer = combineReducers({
    home: homeReducer
});

export default reducer;