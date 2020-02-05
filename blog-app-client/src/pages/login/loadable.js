import React from 'react';
import Loadable from 'react-loadable';

function Loading(props) {
    if (props.error) {
        return <div>Error! <button onClick={props.retry}>Retry</button></div>;
    } else if (props.timedOut) {
        return <div>Taking a long time... <button onClick={props.retry}>Retry</button></div>;
    } else if (props.pastDelay) {
        return <div>Loading...</div>;
    } else {
        return <div>正在加载.....</div>;
    }
}

const LoadableComponent = Loadable({
    loader: () => import('./view/Login'),
    loading: Loading,
    delay: 3000, // 0.3 seconds
});

export default () => <LoadableComponent/>;