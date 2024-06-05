import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import {  useNavigate } from 'react-router-dom';
import { log } from 'console';

const LoginView = () => {
    const [loading, setLoading] = useState<boolean>(false);
     const Navigate=useNavigate();
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
          console.log(data.user);
          localStorage.setItem("userId",data.user.id)
          localStorage.setItem("Username",data.user.Name)
           localStorage.setItem("userimage",data.user.File)
          alert(data.message);
          Navigate("/home") // Display success message
        } else {
          const errorMessage = await response.text();
          alert('Failed to login: ' + errorMessage); // Display error message
        }
      } catch (error) {
        console.error('Error logging in:', error);
        alert('Error logging in: ' + error); // Display error message
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
  }
export default LoginView
