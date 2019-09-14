import React, {PureComponent, Fragment} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Fragment>
                        <Switch>

                        </Switch>
                    </Fragment>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;