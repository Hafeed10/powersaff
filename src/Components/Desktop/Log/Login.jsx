import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import admin from '../../../Assets/admin/admin.webp';

function Login() {
    const navigate = useNavigate(); 

    const onFinish = (values) => {
        const { username, password } = values;

        // Dummy user data for login simulation (Replace with API call)
        const users = [
            { username: "jabbarpkn", password: "jabbar123", role: "admin" },
            { username: "user123", password: "userpass", role: "user" }
        ];

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            message.success('Login successful!');

            // Store login status and user role in localStorage
            localStorage.setItem('users', JSON.stringify({ username, role: user.role }));

            // Redirect based on role
            navigate(user.role === "admin" ? "/add-productPage" : "/admin-dashboard");
        } else {
            message.error('Invalid username or password!');
        }
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
