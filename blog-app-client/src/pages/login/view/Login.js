import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Form, Icon, Input, Button, Checkbox, Row, Col} from 'antd';
import * as actions from '../actions';
import './style.css';

class Login extends PureComponent {
    /*处理表单提交*/
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.userLogin(values)
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form; // 表单域校验

        return (
            <Row>
                <Col span={8} xs={2}/>
                <Col span={8} xs={20}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{required: true, message: 'Please input your username!'}],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: 'Please input your Password!'}],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>Remember me</Checkbox>)}
                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={8} xs={2}/>
            </Row>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    userLogin(user) {
        dispatch(actions.userLoginAction(user))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login));