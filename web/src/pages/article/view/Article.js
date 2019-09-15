import React, {Fragment} from 'react';
import './style.css';
import {Breadcrumb} from 'antd';

function Article() {
    return (
        <Fragment>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Article</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{background: '#fff', padding: 24, minHeight: 380}}>
                <div>
                    This is Article.
                </div>
            </div>
        </Fragment>
    );
}

export default Article;