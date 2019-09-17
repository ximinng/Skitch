import {combineReducers} from 'redux-immutable';
import {reducer as homeReducer} from '../pages/home';
import {reducer as adminArticleReducer} from '../pages/admin/article';

const reducer = combineReducers({
    home: homeReducer,
    adminArticle: adminArticleReducer
});

export default reducer;