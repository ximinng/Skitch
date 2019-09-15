import React, {Component, Fragment} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {view as Home} from './pages/home';
import {view as Article} from './pages/article';
import {view as Admin} from './pages/admin/home';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Fragment>
                        <Switch>
                            <Route path={'/'} exact component={Home}/>
                            <Route path={'/article'} component={Article}/>
                            <Route path={'/admin'} component={Admin}/>
                        </Switch>
                        <Switch>
                        </Switch>
                    </Fragment>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;