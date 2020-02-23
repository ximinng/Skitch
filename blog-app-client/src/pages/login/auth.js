import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import {connectedRouterRedirect} from 'redux-auth-wrapper/history4/redirect';
import {is} from 'immutable';

import Loading from './view/Loading';

const locationHelper = locationHelperBuilder({});

export const userIsNotAuthenticated = connectedRouterRedirect({
    // This sends the user either to the query param route if we have one, or to the landing page if none is specified and the user is already logged in
    redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/admin',
    // This prevents us from adding the query parameter when we send the user away from the login page
    allowRedirectBack: false,
    // If selector is true, wrapper will not redirect
    // So if there is no user data, then we show the page
    authenticatedSelector: state => is(state.getIn(['login', 'token']), null),
    // A nice display name for this check
    wrapperDisplayName: 'UserIsNotAuthenticated'
});

export const userIsAuthenticated = connectedRouterRedirect({
    redirectPath: '/login',
    authenticatedSelector: state => !is(state.getIn(['login', 'token']), null),
    // Returns true if the user auth state is loading
    authenticatingSelector: state => state.getIn(['login', 'isLoading']),
    // Render this component when the authenticatingSelector returns true
    AuthenticatingComponent: Loading,
    wrapperDisplayName: 'UserIsAuthenticated'
});
