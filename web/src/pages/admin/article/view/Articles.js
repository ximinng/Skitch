import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from "react-router-dom";
import * as actions from '../actions';

import {Form, Select, Input, List, Icon, Button} from 'antd';

const {Option} = Select;
const {TextArea} = Input;

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`
    });
}

const IconText = ({type, text}) => (
    <span>
        <Icon type={type} style={{marginRight: 8}}/>{text}
    </span>
);

class Articles extends PureComponent {

    render() {
        const {
            labelItems, sortItems, msg,
            handleSubmit,
            redirect
        } = this.props;

        return (
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 6,
                }}
                dataSource={listData}
                header={
                    <div>
                        <b>文章列表</b>
                    </div>
                }
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        extra={
                            <div>
                                <Button type="primary">
                                    <IconText type="edit" text="edit"/>
                                </Button>
                                &nbsp;
                                <Button type="dashed">
                                    <IconText type="more" text="more"/>
                                </Button>
                            </div>
                        }
                    >
                        <List.Item.Meta
                            title={<a href={item.href}>{item.title}</a>}
                        />
                    </List.Item>
                )}
            />
        )
    }

    componentDidMount() {
        this.props.fillInLists()
    }
}

const mapStateToProps = (state) => ({
    labelItems: state.getIn(['adminArticle', 'labelItems']),
    sortItems: state.getIn(['adminArticle', 'sortItems']),
    msg: state.getIn(['adminArticle', 'msg']),
    redirect: state.getIn(['adminArticle', 'redirect'])
});

const mapDispatchToProps = (dispatch) => ({
    // 填充表单分类和标签数据
    fillInLists() {
        // dispatch(actions.fillInFormWithLabelAndSort())
    }
});

export default Form.create({name: 'articles'})(connect(mapStateToProps, mapDispatchToProps)(Articles));