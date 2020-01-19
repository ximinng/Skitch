import React from 'react';
import {Route, Link} from "react-router-dom";

import {Layout, Menu, BackTop, List, Icon} from 'antd';
import './style.css';

import {view as Home} from '../../../pages/home';
import {view as Article} from '../../../pages/article';

const {Header, Content, Footer} = Layout;
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1370406_qnpnxgr0rpm.js',
});

function Portal({match}) {
    return (
        <Layout>
            <Header style={{position: 'fixed', zIndex: 1, width: '100%', backgroundColor: '#FFFFFF'}}>
                {/*<div className="logo"/>*/}
                <Menu theme="light"
                      mode="horizontal"
                      style={{lineHeight: '64px'}}
                >
                    <Menu.Item key="1">
                        <Link to={`${match.path}`}>主页</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        {/*<Link to={`${match.path}article`}>Article</Link>*/}
                        归档
                    </Menu.Item>
                    <Menu.Item key="3">关于</Menu.Item>
                </Menu>
            </Header>

            <Content style={{padding: '0 50px', marginTop: 64}}>
                <Route path={`${match.path}`} exact component={Home}/>
                <Route path={`${match.path}article`} component={Article}/>
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