import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import * as actions from '../actions';

import {Form, List, Icon, Button} from 'antd';

const IconText = ({type, text}) => (
    <span>
        <Icon type={type} style={{marginRight: 8}}/>{text}
    </span>
);

class Articles extends PureComponent {

    render() {
        const {articles} = this.props;

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
                dataSource={articles}
                header={
                    <div>
                        <b>文章列表</b>
                    </div>
                }
                renderItem={(item) => (
                    <List.Item
                        key={item.articleId}
                        extra={
                            <div>
                                <Button type="primary">
                                    <Link to={`admin/article/edit/${item.articleId}`}>
                                        <IconText type="edit" text="编辑"/>
                                    </Link>
                                </Button>
                                &nbsp;
                                <Button type="dashed">
                                    <IconText type="more" text="详情"/>
                                </Button>
                            </div>
                        }
                    >
                        {
                            console.log(item)
                        }
                        <List.Item.Meta
                            title={item.articleTitle}
                        />
                    </List.Item>
                )}
            />
        )
    }

    componentDidMount() {
        this.props.fillInLists();
    }
}

const mapStateToProps = (state) => ({
    articles: state.getIn(['adminArticle', 'articles']),
});

const mapDispatchToProps = (dispatch) => ({
    // 获取所有文章信息
    fillInLists() {
        dispatch(actions.requestArticles());
    }
});

export default Form.create({name: 'articles'})(connect(mapStateToProps, mapDispatchToProps)(Articles));