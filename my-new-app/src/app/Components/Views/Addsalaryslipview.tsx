import React, { useState, useEffect } from 'react';
import { Form, InputNumber, Button, DatePicker, Card, Typography } from 'antd';

import { salaryslip } from '../../helper/salaryslip-model';
import Navbar from '../pages/Navbar';

const { Title } = Typography;

const Addsalaryslipview = () => {
  const [form] = Form.useForm();
  const [values, setValues] = useState({
    basicSalary: 0,
    allowance: 0,
    bonus: 0,
    deductions: 0,
    providentFund: 0,
    professionalTax: 0,
    securityDeposits: 0,
    grossSalary: 0,
    totalDeductions: 0,
    netPay: 0,
  });

  const onFinish = (values: salaryslip) => {
    console.log('Received values:', values);
  };

  useEffect(() => {
    const { basicSalary, allowance, bonus, deductions } = values;
    const grossSalary = basicSalary + allowance + bonus;
    const totalDeductions = deductions + values.providentFund + values.professionalTax + values.securityDeposits;
    const netPay = grossSalary - totalDeductions;

    form.setFieldsValue({
      grossSalary,
      totalDeductions,
      netPay,
    });
  }, [values]);

  const handleChange = (field: string, value: number ) => {
    setValues((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <div className="container mx-auto mt-10">
  
      <Card className="max-w-md mx-auto border border-gray-500 shadow-lg shadow-slate-500 p-4">
        <Typography>
          <Title level={2} type="danger" className="text-red-500 font-bold text-center">
            Techathlon Software Solutions
          </Title>
        </Typography>
        <Form
          form={form}
          name="addSalaryForm"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          <div className="grid grid-cols-2 gap-4">
            <Form.Item
              label="Employee ID"
              name="employeeId"
              rules={[{ required: true, message: 'Please input employee ID!' }]}
            >
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
              label="Basic Salary"
              name="basicSalary"
              rules={[{ required: true, message: 'Please input basic salary!' }]}
            >
              <InputNumber
                style={{ width: '100%' }}
                onChange={(value) => handleChange('basicSalary',typeof value === 'number' ? value : 0)}
              />
            </Form.Item>

            <Form.Item
              label="Allowance"
              name="allowance"
            >
              <InputNumber
                style={{ width: '100%' }}
                onChange={(value) => handleChange('allowance', typeof value === 'number' ? value : 0)}
              />
            </Form.Item>

            <Form.Item
              label="Bonus"
              name="bonus"
            >
              <InputNumber
                style={{ width: '100%' }}
                onChange={(value) => handleChange('bonus', typeof value === 'number' ? value : 0)}
              />
            </Form.Item>

            <Form.Item
              label="Deductions"
              name="deductions"
            >
              <InputNumber
                style={{ width: '100%' }}
                onChange={(value) => handleChange('deductions', typeof value === 'number' ? value : 0)}
              />
            </Form.Item>

            <Form.Item
              label="Gross Salary"
              name="grossSalary"
            >
              <InputNumber style={{ width: '100%' }} disabled />
            </Form.Item>

            <Form.Item
              label="Net Pay"
              name="netPay"
            >
              <InputNumber style={{ width: '100%' }} disabled />
            </Form.Item>

            <Form.Item
              label="Payslip Month"
              name="payslipMonth"
              rules={[{ required: true, message: 'Please select payslip month!' }]}
            >
              <DatePicker.MonthPicker style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
              label="Professional Tax"
              name="professionalTax"
            >
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
              label="Provident Fund"
              name="providentFund"
            >
              <InputNumber
                style={{ width: '100%' }}
                onChange={(value) => handleChange('providentFund', typeof value === 'number' ? value : 0)}
              />
            </Form.Item>

            <Form.Item
              label="Security Deposits"
              name="securityDeposits"
            >
              <InputNumber
                style={{ width: '100%' }}
                onChange={(value) => handleChange('securityDeposits', typeof value === 'number' ? value : 0)}
              />
            </Form.Item>

            <Form.Item
              label="Total Deductions"
              name="totalDeductions"
            >
              <InputNumber style={{ width: '100%' }} disabled />
            </Form.Item>
          </div>

          <Form.Item className="text-center">
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Addsalaryslipview;
