import React from "react";
import {Route} from 'react-router-dom';

import {view as Portal} from './portal';
import {view as AdminComponent} from './admin';
import {view as LoginComponent} from '../pages/login';
import {view as Home} from '../pages/home';
import {view as Article} from '../pages/article';

import {userIsAuthenticated, userIsNotAuthenticated} from "./auth";

// auth权限包装组件
const Login = userIsNotAuthenticated(LoginComponent);
const Admin = userIsAuthenticated(AdminComponent);

/* route集中配置文件 */

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
export function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes}/>
            )}
        />
    );
}

export const routes = [
    {
        path: "/login",
        component: Login
    },
    {
        path: "/admin",
        component: Admin
    },
    {
        path: "/",
        component: (props) => <Portal {...props}/>,
        routes: [
            {
                path: "/home",
                component: Home
            },
            {
                path: "/article",
                component: Article
            }
        ]
    }
];