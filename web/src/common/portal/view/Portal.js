import React from 'react';
import {Layout, Menu} from 'antd';
import {Route, Link} from "react-router-dom";
import './style.css';

import {view as Home} from '../../../pages/home';
import {view as Article} from '../../../pages/article';

const {Header, Content, Footer} = Layout;

function Portal({match}) {
    return (
        <Layout>
            <Header style={{position: 'fixed', zIndex: 1, width: '100%', backgroundColor: '#FFFFFF'}}>
                <div className="logo"/>
                <Menu theme="light"
                      mode="horizontal"
                      style={{lineHeight: '64px'}}
                >
                    <Menu.Item key="1">
                        <Link to={`${match.path}`}>Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to={`${match.path}article`}>Article</Link>
                    </Menu.Item>
                    <Menu.Item key="3">About</Menu.Item>
                </Menu>
            </Header>

            <Content style={{padding: '0 50px', marginTop: 64}}>
                <Route path={`${match.path}`} exact component={Home}/>
                <Route path={`${match.path}article`} component={Article}/>
            </Content>

            <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

export default Portal;