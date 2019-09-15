import React, {Fragment} from 'react';
import {Breadcrumb} from 'antd';
import './style.css';

function Home() {
    return (
        <Fragment>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{background: '#fff', padding: 24, minHeight: 380}}>
                Content
            </div>
        </Fragment>
    );
}

export default Home;