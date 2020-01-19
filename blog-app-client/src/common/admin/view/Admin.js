import React from 'react';
import {Route, Link} from "react-router-dom";
import {view as Home} from "../../../pages/admin/home";
import {Article} from "../../../pages/admin/article";
import {Articles} from "../../../pages/admin/article";

import {Layout, Menu, Icon} from 'antd';
import './style.css';

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

function Admin({match}) {
    return (
        <Layout>
            <Header className="header">
                <div className="logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                >
                    <Menu.Item key="2" disabled={true}>
                        <Icon type="user"/>用户 : xxm
                    </Menu.Item>
                    <Menu.Item key="3">退出登陆</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200}>
                    <Menu mode="inline"
                          defaultOpenKeys={['sub1']}
                    >
                        <SubMenu key="sub1" title={
                            <span><Icon type="user"/>文章管理</span>
                        }
                        >
                            <Menu.Item key="1">
                                <Link to={`${match.path}/newArticle`}>新建文章</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to={`${match.path}/editArticle`}>编辑文章</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to={`${match.path}/articles`}>文章列表</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={
                            <span><Icon type="laptop"/>标签管理</span>
                        }
                        >
                            <Menu.Item key="5">新建标签</Menu.Item>
                            <Menu.Item key="6">编辑标签</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={
                            <span><Icon type="notification"/>分类管理</span>
                        }
                        >
                            <Menu.Item key="9">新建分类</Menu.Item>
                            <Menu.Item key="10">编辑分类</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title={
                            <span><Icon type="notification"/>评论管理</span>
                        }
                        >
                            <Menu.Item key="9">评论审核</Menu.Item>
                            <Menu.Item key="10">评论列表</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub5" title={
                            <span><Icon type="notification"/>友链管理</span>
                        }
                        >
                            <Menu.Item key="9">新建友链</Menu.Item>
                            <Menu.Item key="10">编辑友链</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{padding: '0 24px 24px'}}>
                    <Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            marginTop: 24,
                            minHeight: 280,
                        }}
                    >
                        <Route path={`${match.path}`} exact component={Home}/>
                        <Route path={`${match.path}/article/:action`} exact component={Article}/>
                        <Route path={`${match.path}/article/:action/:id`} component={Article}/>
                        <Route path={`${match.path}/articles`} component={Articles}/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default Admin;