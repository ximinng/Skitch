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
        return <div>sss</div>;
    }
}

const LoadableComponent = Loadable({
    loader: () => import('./view/Container'),
    loading: Loading,
    delay: 3000, // 0.3 seconds
});

export default () => <LoadableComponent/>;