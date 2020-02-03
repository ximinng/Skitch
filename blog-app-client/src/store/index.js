import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

// Redux chrome plugin apply
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
    // Redux integration thunk that action returns func type.
    applyMiddleware(thunk)
));

export default store; // Include all status
// To visit:
// import store from './store';
// store.getState() 访问整个状态树.