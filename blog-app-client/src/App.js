import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter, Switch} from 'react-router-dom';
import {routes, RouteWithSubRoutes} from './common/routes';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        {
                            routes.map((route, i) => (
                                <RouteWithSubRoutes key={i} {...route}/>
                            ))
                        }
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;