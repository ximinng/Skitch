import React from 'react';
import Loadable from 'react-loadable';

import {Spin, Alert} from 'antd';

const LoadingSpin = (tip, retry) => {
    return (
        <Spin tip={tip}>
            <Alert
                message="Alert message title"
                description="Further details about the context of this alert."
                type="info"
            >
            </Alert>
        </Spin>
    )
};

function Loading(props) {
    if (props.error) {
        return LoadingSpin("错误!", props.retry)
    } else if (props.timedOut) {
        return LoadingSpin("可能需要更长时间....", props.retry)
    } else if (props.pastDelay) {
        return LoadingSpin("正在加载....");
    } else {
        // return LoadingSpin("正在加载....");
        return null;
    }
}

const LoadableComponent = Loadable({
    loader: () => import('./view/NewArticle'),
    loading: Loading
});

export default () => <LoadableComponent/>;