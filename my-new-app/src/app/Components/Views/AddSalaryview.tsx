import React, { useState } from 'react';
import { Form, Input, Button, notification, DatePicker } from 'antd';
import { UserOutlined, DollarOutlined, CalendarOutlined } from '@ant-design/icons';
import { FaRupeeSign } from 'react-icons/fa'; // Import rupee icon from react-icons
import { useParams } from 'react-router-dom';

const AddSalaryView = () => {
  const [form] = Form.useForm();
  //const userId = localStorage.getItem('userId');
  const [startdate, setStartDate] = useState<string>();
  const { employeeId } = useParams<{ employeeId: string }>();
  const handleDateChange = (date: any) => {
    setStartDate(date ? date.format('YYYY-MM-DD') : '');
  };

  const onFinish = async (values: any) => {
    console.log(employeeId);
    
    const data = {
      ...values,
      addedBy: employeeId,
      userId:employeeId,
      startingDate: startdate, // Include starting date in the data
    };

    try {
      const response = await fetch('http://localhost:5000/Addsalary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const result = await response.json();
      notification.success({
        message: 'Success',
        description: 'Salary added successfully!',
      });
      form.resetFields();
    } catch (error) {
      notification.error({
        message: 'Error',
    //    description: error.message,
      });
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white border border-collapse rounded-md">
      <h2 className="text-2xl font-bold mb-4 flex justify-center items-center text-gray-700">Add Salary</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          salary: '',
          SD: '', // Assuming SD is another field in the form
        }}
      >
        {/* <Form.Item
          label="Employee ID"
          name="employeeIdd"
          rules={[{ required: true, message: 'Please input the Employee ID!' }]}
        >
          <Input suffix={<UserOutlined />} />
        </Form.Item> */}
        <Form.Item
          label="Salary"
          name="salary"
          rules={[{ required: true, message: 'Please input the Salary!' }]}
        >
          <Input suffix={<DollarOutlined />} type="number" />
        </Form.Item>
        <Form.Item
          label="SD"
          name="SD"
          rules={[{ required: true, message: 'Please input the SD!' }]}
        >
          <Input suffix={<FaRupeeSign />} type="number" />
        </Form.Item>
        <Form.Item label="Starting Date">
          <Input.Group compact>
            <Input style={{ width: '10%' }} prefix={<CalendarOutlined />} disabled />
            <DatePicker style={{ width: '90%' }} onChange={handleDateChange} />
          </Input.Group>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Salary
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddSalaryView;
