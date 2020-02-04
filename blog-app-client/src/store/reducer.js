import {combineReducers} from 'redux-immutable';
import {reducer as portalReducer} from '../common/portal';
import {reducer as homeReducer} from '../pages/home';
import {reducer as LoginReducer} from '../pages/login';
import {reducer as adminArticleReducer} from '../pages/admin/article';

const reducer = combineReducers({
    portal: portalReducer,
    home: homeReducer,
    login: LoginReducer,
    adminArticle: adminArticleReducer
});

export default reducer;