import React, { Component } from 'react';
import { Form, Input, Checkbox, Button } from "antd";
//导入redux 
import { connect } from 'react-redux';//连接器
import { bindActionCreators } from "redux";
import * as reduxFunc from '../../action'


class Login extends Component {
    state = {

    }
    render() {
        const layout = {
            labelCol: {
                span: 8,
            },
            wrapperCol: {
                span: 16,
            },
        };
        const tailLayout = {
            wrapperCol: {
                offset: 8,
                span: 16,
            },
        };
        const onFinish = (values) => {
            console.log('Success:', values);
        };

        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };


        return (
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
              </Button>
                </Form.Item>
            </Form>
        )
    }
}


const mapStateToprops = state => {
    const { } = state.httpData;
    const { } = state.staticData;
    return {}
};

const mapDispatchToprops = dispatch => ({
    fetchQueryData: bindActionCreators(reduxFunc.fetchQueryData, dispatch),
    loadData: bindActionCreators(reduxFunc.loadData, dispatch),
})

export default connect(mapStateToprops, mapDispatchToprops)(Login)
