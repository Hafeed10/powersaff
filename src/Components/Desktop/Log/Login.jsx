import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Login.css';
import admin from '../../../Assets/admin/admin.webp';

function Login() {
    const navigate = useNavigate(); // Initialize navigation function

    const onFinish = (values) => {
        const { username, password } = values;

        // Check login credentials
        if (username === 'jabbarpkn' && password === 'jabbar123') {
            message.success('Login successful!');
            navigate('/Add_Prodcut'); // Redirect to the Dashboard page
        } else {
            message.error('Invalid username or password!');
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login-page">
            <div className="login-box">
                {/* Image Section */}
                <div className="illustration-wrapper">
                    <img src={admin} alt="Login" />
                </div>

                {/* Form Section */}
                <Form
                    name="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    className="login-form"
                >
                    <p className="form-title">Welcome back</p>
                    <p>Login to the Dashboard</p>

                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input placeholder="Username" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Password" />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            LOGIN
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default Login;
