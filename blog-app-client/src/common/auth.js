import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import {connectedRouterRedirect} from 'redux-auth-wrapper/history4/redirect';
import {is} from 'immutable';
// import {ACCESS_TOKEN} from './Constants';

import Loading from '../pages/login/view/Loading';

const locationHelper = locationHelperBuilder({});
// const token = localStorage.getItem(ACCESS_TOKEN);

export const userIsNotAuthenticated = connectedRouterRedirect({
    // This sends the user either to the query param route if we have one, or to the landing page if none is specified and the user is already logged in
    redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/admin',
    // This prevents us from adding the query parameter when we send the user away from the login page
    allowRedirectBack: false,
    // If selector is true, wrapper will not redirect
    // So if there is no user data, then we show the page
    // authenticatedSelector: () => token === null,
    authenticatedSelector: state => is(state.getIn(['login', 'token']), null),
    // A nice display name for this check
    wrapperDisplayName: 'UserIsNotAuthenticated'
});

export const userIsAuthenticated = connectedRouterRedirect({
    redirectPath: '/login',
    // authenticatedSelector: () => token !== null,
    authenticatedSelector: state => !is(state.getIn(['login', 'token']), null),
    // Returns true if the user auth state is loading
    authenticatingSelector: state => state.getIn(['login', 'isLoading']),
    // Render this component when the authenticatingSelector returns true
    AuthenticatingComponent: Loading,
    wrapperDisplayName: 'UserIsAuthenticated'
});
