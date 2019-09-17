import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {Form, Select, Radio, Button, Input, Row, Col,} from 'antd';

const {Option} = Select;
const {TextArea} = Input;

class NewArticle extends PureComponent {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 14},
        };
        const {
            labelItems, sortItems, msg,
            handleSubmit
        } = this.props;

        return (
            <Form {...formItemLayout} onSubmit={(e) => handleSubmit(e, this.props.form)}>
                <Form.Item label="Task">
                    <span className="ant-form-text">新建文章</span>
                </Form.Item>
                <Form.Item {...formItemLayout} label="文章标题">
                    {getFieldDecorator('articleTitle', {
                        rules: [
                            {
                                required: true,
                                message: '请输入文章标题!',
                            },
                        ],
                    })(<Input placeholder="请输入文章标题"/>)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="访问URL">
                    {getFieldDecorator('articleAlias', {
                        rules: [
                            {
                                required: true,
                                message: '请输入访问URL!',
                            },
                        ],
                    })(<Input placeholder="请输入访问URL"/>)}
                </Form.Item>
                <Form.Item label="文章分类" hasFeedback>
                    {getFieldDecorator('sort', {
                        rules: [{required: true, message: '请选择文章分类!'}],
                    })(
                        <Select notFoundContent={msg} placeholder="请选择文章分类">
                            {
                                sortItems.map((item) => {
                                    // key:map遍历，value提交label主键
                                    return <Option key={item._tail.array[0]}
                                                   value={item._tail.array[0]}>{item._tail.array[1]}</Option>
                                })
                            }
                        </Select>
                    )}
                </Form.Item>
                <Form.Item label="文章标签">
                    {getFieldDecorator('labels', {
                        rules: [
                            {required: true, message: '请选择文章标签!', type: 'array'},
                        ],
                    })(
                        <Select mode="multiple" notFoundContent={msg} placeholder="请选择文章标签">
                            {
                                labelItems.map((item) => {
                                    // key:map遍历，value提交label主键
                                    return <Option key={item._tail.array[0]}
                                                   value={item._tail.array[0]}>{item._tail.array[1]}</Option>
                                })
                            }
                        </Select>
                    )}
                </Form.Item>
                <Form.Item label="文章正文">
                    {getFieldDecorator('articleContent')(
                        <TextArea rows={4}/>
                    )}
                </Form.Item>
                <Form.Item label="文章状态">
                    {getFieldDecorator('articleStatus', {
                        initialValue: '1',
                    })(
                        <Radio.Group>
                            <Radio value="1">发布</Radio>
                            <Radio value="0">存为草稿</Radio>
                        </Radio.Group>
                    )}
                </Form.Item>
                <Form.Item wrapperCol={{span: 12, offset: 6}}>
                    <Button type="primary" htmlType="submit">
                        创建文章
                    </Button>
                </Form.Item>
            </Form>
        );
    }

    componentDidMount() {
        this.props.fillInForm()
    }
}

const mapStateToProps = (state) => ({
    labelItems: state.getIn(['adminArticle', 'labelItems']),
    sortItems: state.getIn(['adminArticle', 'sortItems']),
    msg: state.getIn(['adminArticle', 'msg'])
});

const mapDispatchToProps = (dispatch) => ({
    // 填充表单分类和标签数据
    fillInForm() {
        dispatch(actions.fillInFormWithLabelAndSort())
    },
    // 提交创建文章
    handleSubmit(e, form) {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                dispatch(actions.createArticle(values));
            }
        });
    }
});

export default Form.create({name: 'validate_other'})(connect(mapStateToProps, mapDispatchToProps)(NewArticle));