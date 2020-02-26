import React from 'react';
import {Switch, Link, useRouteMatch, useParams} from "react-router-dom";

import {Layout, Menu, BackTop, List, Icon} from 'antd';
import './style.css';

import {routes, RouteWithSubRoutes} from '../../routes';


const {Header, Content, Footer} = Layout;
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1370406_qnpnxgr0rpm.js',
});

// 定义博客页面布局
function Portal({routes}) {
    // console.log(routes);
    // console.log(useRouteMatch());
    // console.log(useParams());

    return (
        <Layout>
            <Header style={{position: 'fixed', zIndex: 1, width: '100%', backgroundColor: '#FFFFFF'}}>
                {/*<div className="logo"/>*/}
                <Menu theme="light"
                      mode="horizontal"
                      style={{lineHeight: '64px'}}
                >
                    <Menu.Item key="1">
                        {/*<Link to={`${match.path}`}>主页</Link>*/}
                        主页
                    </Menu.Item>
                    <Menu.Item key="2">
                        {/*<Link to={`${match.path}article`}>Article</Link>*/}
                        归档
                    </Menu.Item>
                    <Menu.Item key="3">关于</Menu.Item>
                </Menu>
            </Header>

            <Content style={{padding: '0 50px', marginTop: 64}}>
                <Switch>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                </Switch>
            </Content>

            <Footer style={{textAlign: 'center'}}>
                <div>
                    <BackTop/>
                    <strong className={'bat-footer-backTop'}/>
                </div>
                <List size={'small'}
                      bordered={false}
                      split={false}
                      loading={false}>
                    <List.Item>Personal BLOG ©2019 Created by ximingXing.</List.Item>
                    <List.Item>
                        <IconFont type="icon-wangzhanbeian"/>
                        &nbsp;&nbsp;陕公网安备 61011302000579号
                    </List.Item>
                </List>
            </Footer>
        </Layout>
    );
}

export default Portal;