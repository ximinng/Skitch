import React from "react";
import {Route} from 'react-router-dom';

import {view as Portal} from './portal';
import {view as AdminComponent} from './admin';
import {view as LoginComponent} from '../pages/login';

import {userIsAuthenticated, userIsNotAuthenticated} from "./auth";

const Login = userIsNotAuthenticated(LoginComponent);
const Admin = userIsAuthenticated(AdminComponent);

export function RouteWithSubRoutes(route) {
    return (
        <Route path={route.path}
               render={props => (
                   <route.component {...props} routes={route.routes}/>
               )}/>
    )
}

export const routes = [
    {
        path: '/home',
        component: Portal
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/admin',
        component: Admin
    },
    {
        path: '/',
        component: Portal
    }
];