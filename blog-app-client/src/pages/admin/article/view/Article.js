import React from 'react';
import {Form, Select, Radio, Button, Input} from 'antd';
import {Redirect, Route} from "react-router-dom";

const Article = Form.create({
    name: 'adminArticle',
    // 当 Form.Item 子节点的值（包括 error）发生改变时触发，可以把对应的值转存到 Redux store
    onFieldsChange(props, changedFields) {
        console.log(changedFields);
        // props.onChange(changedFields.username.value);
    },
    mapPropsToFields(props) {
        console.log(props.username);
        return {
            username: Form.createFormField({
                value: props.username,
            }),
        };
    },
    // 监听表单域值变化 -- 任一表单域的值发生改变时的回调
    onValuesChange(_, values) {
        console.log(values);
    },
})(props => {
    const {Option} = Select;
    const {TextArea} = Input;
    const {getFieldDecorator} = props.form;
    const formItemLayout = {
        labelCol: {span: 6},
        wrapperCol: {span: 14},
    };
    const {sorts, labels, handleSubmit} = props;
    const action = props.action; // 访问执行类型

    return (
        <Form {...formItemLayout}
              onSubmit={(e) => handleSubmit(e, props.form)}
        >
            <Form.Item label="Task">
                {
                    action === 'edit'
                        ? <span className="ant-form-text">编辑文章</span>
                        : (action === 'new' ? <span className="ant-form-text">新建文章</span> :
                        <span className="ant-form-text">未知任务</span>)
                }
            </Form.Item>
            <Form.Item {...formItemLayout} label="文章标题">
                <div>
                    {
                        getFieldDecorator('articleTitle', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入文章标题!',
                                },
                            ],
                            initialValue: ''
                        })(<Input placeholder="请输入文章标题"/>)
                    }
                </div>
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
                {getFieldDecorator('sorts', {
                    rules: [{required: true, message: '请选择文章分类!'}],
                })(
                    <Select placeholder="请选择文章分类"
                        // notFoundContent={msg}
                    >
                        {
                            sorts.map((item) => {
                                // key:map遍历，value提交label主键
                                return <Option key={item.get(0)}
                                               value={item.get(0)}>{item.get(1)}</Option>
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
                    <Select mode="multiple"
                            placeholder="请选择文章标签"
                        // notFoundContent={msg}
                    >
                        {
                            labels.map((item) => {
                                // key:map遍历，value提交label主键
                                return <Option key={item.get(0)}
                                               value={item.get(0)}>{item.get(1)}</Option>
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
});

export default Article;