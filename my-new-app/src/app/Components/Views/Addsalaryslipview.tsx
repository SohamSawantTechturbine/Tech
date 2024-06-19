import React, { useEffect, useState } from 'react';
import {
  Form,
  InputNumber,
  Button,
  DatePicker,
  Card,
  Typography,
  message,
  Select,
} from 'antd';
import { useTheme } from './../Context/Themcontext';
import { salaryslip } from '../../helper/salaryslip-model';
import { useParams } from 'react-router-dom';

const { Title } = Typography;

const Addsalaryslipview = () => {
  // Use the prop here
  const [form] = Form.useForm();
  const { theme } = useTheme();
  // State to track modal visibility

  const [salaryitems, setSalaryItems] = useState<any[]>([]);
  const { Option } = Select;
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
  const { employeeId } = useParams();
  const fetchSalaries = async () => {
    try {
      const response = await fetch('http://localhost:5000/fetchAllsalaries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: employeeId }),
      });

      if (response.ok) {
        const data = await response.json();
        setSalaryItems(data.fetchsalaries);
      } else {
        message.error('Failed to fetch salary items.');
      }
    } catch (error) {
      message.error('Internal server error');
    }
  };

  useEffect(() => {
    fetchSalaries(); // Call fetchSalaries when the modal is opened
  }, []);
  console.log(salaryitems);

  useEffect(() => {
    const { basicSalary, allowance, bonus, deductions } = values;
    const grossSalary = basicSalary + allowance + bonus;
    const totalDeductions =
      deductions +
      values.providentFund +
      values.professionalTax +
      values.securityDeposits;
    const netPay = grossSalary - totalDeductions;

    form.setFieldsValue({
      grossSalary,
      totalDeductions,
      netPay,
    });
  }, [values, form]);

  const handleChange = (field: string, value: number) => {
    setValues((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const onFinish = async (values: salaryslip) => {
    console.log('Received values:', values);
    try {
      const response = await fetch('http://localhost:5000/addsalaryslip', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          userId: employeeId,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        message.error(data.error);
        return;
      }

      const data = await response.json();
      message.success('Salary slip added successfully!');
      form.resetFields();
    } catch (error) {
      message.error('Failed to add slip. Please try again later.');
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <Card
        className={`max-w-md mx-auto border border-gray-500 shadow-lg shadow-slate-500 p-4 ${
          theme === 'dark' ? 'dark-card' : ''
        }`}
      >
        <Typography>
          <Title
            level={2}
            type="danger"
            className="text-red-500 font-bold text-center"
          >
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
              initialValue={employeeId}
              rules={[{ required: true, message: 'Please input employee ID!' }]}
            >
              <InputNumber style={{ width: '100%' }} disabled />
            </Form.Item>

            <Form.Item
              label="Basic Salary"
              name="basicSalary"
              rules={[
                { required: true, message: 'Please input basic salary!' },
              ]}
            >
              <Select
                style={{ width: '100%' }}
                onChange={(value) => handleChange('basicSalary', value)}
              >
                {salaryitems.map(
                  (
                    item: any // Use map directly, TypeScript should infer the type
                  ) => (
                    <Option key={item.id} value={Number(item.salary)}>
                      {item.salary}
                    </Option>
                  )
                )}
              </Select>
            </Form.Item>

            <Form.Item label="Allowance" name="allowance">
              <InputNumber
                style={{ width: '100%' }}
                onChange={(value) =>
                  handleChange(
                    'allowance',
                    typeof value === 'number' ? value : 0
                  )
                }
              />
            </Form.Item>

            <Form.Item label="Bonus" name="bonus">
              <InputNumber
                style={{ width: '100%' }}
                onChange={(value) =>
                  handleChange('bonus', typeof value === 'number' ? value : 0)
                }
              />
            </Form.Item>

            <Form.Item label="Deductions" name="deductions">
              <InputNumber
                style={{ width: '100%' }}
                onChange={(value) =>
                  handleChange(
                    'deductions',
                    typeof value === 'number' ? value : 0
                  )
                }
              />
            </Form.Item>

            <Form.Item label="Gross Salary" name="grossSalary">
              <InputNumber style={{ width: '100%' }} disabled />
            </Form.Item>

            <Form.Item label="Net Pay" name="netPay">
              <InputNumber style={{ width: '100%' }} disabled />
            </Form.Item>

            <Form.Item
              label="Payslip Month"
              name="payslipMonth"
              rules={[
                { required: true, message: 'Please select payslip month!' },
              ]}
            >
              <DatePicker.MonthPicker style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item label="Professional Tax" name="professionalTax">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item label="Provident Fund" name="providentFund">
              <InputNumber
                style={{ width: '100%' }}
                onChange={(value) =>
                  handleChange(
                    'providentFund',
                    typeof value === 'number' ? value : 0
                  )
                }
              />
            </Form.Item>

            <Form.Item label="Security Deposits" name="securityDeposits">
              <InputNumber
                style={{ width: '100%' }}
                onChange={(value) =>
                  handleChange(
                    'securityDeposits',
                    typeof value === 'number' ? value : 0
                  )
                }
              />
            </Form.Item>

            <Form.Item label="Total Deductions" name="totalDeductions">
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
