import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from './../../features/userSlice'; // Ensure correct path to userSlice

const LoginView = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  //const dispatch = useDispatch();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('userId', data.user.id);
        localStorage.setItem('Username', data.user.Name);
        localStorage.setItem('userimage', data.user.File);
        localStorage.setItem('Access_token', data.Access_token);
        localStorage.setItem('Refresh_token', data.Refresh_token);
        
        // dispatch(login({
        //   id: data.user.id,
        //   name: data.user.Name,
        //   email: data.user.Email,
        // }));

        alert(data.message);
        navigate('/home');
      } else {
        if (response.status === 401) {
          await refreshAccessToken();
          await onFinish(values);
        }
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in: ' + error);
    } finally {
      setLoading(false);
    }
  };

  const refreshAccessToken = async () => {
    try {
      const refreshToken = localStorage.getItem('Refresh_token');
      if (!refreshToken) {
        throw new Error('No refresh token found');
      }
      const response = await fetch('http://localhost:5000/refresh-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('Access_token', data.access_token);
      }
    } catch (error) {
      console.error('Error refreshing access token:', error);
      throw error;
    }
  };

  return (
    <>
      <p className="flex justify-center text-red-500 text-4xl mb-8 items-center red-500 h-5 mt-20">TECHATHALON SOFTWARE</p>
      <p className="flex justify-center text-orange-500 text-4xl mb-8 items-center red-500">Login</p>
      <div className="flex justify-center items-center">
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
