import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { LOGIN_MUTATION } from '../Grapql/Login_mutation';

const LoginView = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [login] = useMutation(LOGIN_MUTATION);
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const { data } = await login({
        variables: { email: values.email, password: values.password },
      });
      localStorage.setItem("userId", data.login.user.id);
      localStorage.setItem("Username", data.login.user.Name);
      message.success(data.login.message);
      navigate("/home");
    } catch (error) {
      console.error('Failed to login:', error);
      message.error('Failed to login: ' + message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <p className='flex justify-center text-red-500 text-4xl mb-8 items-center red-500 h-5 mt-20'>TECHATHALON SOFTWARE </p>
      <p className='flex justify-center text-orange-500 text-4xl mb-8 items-center red-500 '>login</p>
      <div className="flex justify-center items-center ">
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          className="bg-white p-8 rounded shadow-md shadow-black"
        >
          <h2 className="text-2xl mb-6">Login</h2>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default LoginView;
