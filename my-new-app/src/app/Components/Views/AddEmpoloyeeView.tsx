import React, { useState } from 'react';
import { Form, Input, DatePicker, Select, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Card from 'antd/es/card/Card';

const { Option } = Select;

const AddEmployeeView: React.FC = () => {
  const [joindate, setJoinDate] = useState<string>();
  const [birthdate, setBirthDate] = useState<string>();
  const [fileSelected, setFileSelected] = useState<File | undefined>();

  const handleDateChange = (date: any) => {
    setJoinDate(date.format());
  };

  const handleBirthDateChange = (date: any) => {
    setBirthDate(date.format());
  };

 

  const onFinish = async (values: any) => {
    console.log(values);
    
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append("file",values.file.fileList[0]
    .originFileObj);
    formData.append('password', values.password);
    formData.append('email', values.email);
    formData.append('department', values.department);
    formData.append('joinDate', joindate || '');
    formData.append('birthDate', birthdate || '');
    formData.append('Contact',  values.contact);

    if (fileSelected) {
      formData.append('file', fileSelected);
    }

    try {
      const response = await fetch('http://localhost:5000/addemployee', {
        method: 'POST',
        body: formData,
      });
    
      if (response.ok) {
        const data = await response.json();
        alert(data.message); // Display success message
      } else {
        const errorMessage = await response.json();
        // console.error('Failed to add employee:', errorMessage);
        alert('Failed to add employee: ' + errorMessage.message); // Display error message
      }
    } catch (error) {
      console.error('Error adding employee:', error);
      alert('Error adding employee: ' + error); // Display error message
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-red-500 text-4xl mb-8  flex justify-center items-center">
        Techalathon Software
      </h1>
      <Card className='shadow shadow-lg shadow-gray-500 border-black'>
      <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} encType="multipart/form-data">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="contact"
          name="contact"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Temporary Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, type: 'email', message: 'Please input a valid email!' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Department"
          name="department"
          rules={[{ required: true, message: 'Please select department!' }]}
        >
          <Select>
            <Option value="HR">HR</Option>
            <Option value="Developer">Developer</Option>
            <Option value="Admin">Admin</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Join Date">
          <DatePicker onChange={handleDateChange} />
        </Form.Item>
        <Form.Item label="Birth Date">
          <DatePicker onChange={handleBirthDateChange} />
        </Form.Item>
        <Form.Item name="file" label="Profile Picture">
          <Upload
            name="file"
            beforeUpload={() => false}
           
          >
            <Button icon={<UploadOutlined />}>Choose Picture</Button>
          </Upload>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form></Card>
    </div>
  );
};

export default AddEmployeeView;
