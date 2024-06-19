import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Card, message, Avatar, InputNumber, DatePicker } from 'antd';
import { PrinterOutlined, EditOutlined } from '@ant-design/icons';
import moment from 'moment';

import { salaryslip } from '../../helper/salaryslip-model';

interface Props {
  userdata: any;
  salarySlips: any;
  employeeId: any | 0; // Adjust type according to your needs
}

const SpecificSalarySlip = ({ userdata, salarySlips, employeeId }: Props) => {
  const userId = localStorage.getItem('userId');
  const slipid = salarySlips.id;
  const [userDepartment, setUserDepartment] = useState('');
  const [form] = Form.useForm();
  const [isEditMode, setIsEditMode] = useState(false);
  const [values, setValues] = useState<salaryslip>(salarySlips);
  const user = userdata[0];

  const fetchUserDepartment = async () => {
    if (!userId) {
      console.error('User ID not found in localStorage');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/fetchsingleslip`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, slipid, employeeId }),
      });

      if (response.ok) {
        const data = await response.json();
        setUserDepartment(data.department);
        setValues(data.salarySlip);
        form.setFieldsValue(data.salarySlip);
      } else {
        console.error('Failed to fetch user department');
      }
    } catch (error) {
      console.error('Error fetching user department:', error);
    }
  };

  useEffect(() => {
    fetchUserDepartment();
  }, [salarySlips, isEditMode]);

  useEffect(() => {
    const { basicsalary, allowance, bonus, deductions } = values;
    const grossSalary = basicsalary + allowance + (bonus || 0);
    const totalDeductions = (deductions || 0) + values.providentfund + values.professionaltax + values.securitydeposits;
    const netPay = grossSalary - totalDeductions;

    form.setFieldsValue({
      grossSalary,
      totalDeductions,
      netPay,
    });
  }, [values]);

  const handleChange = (field: string, value: number | moment.Moment | null) => {
    if (field === 'payslipmonth' && value instanceof moment) {
      value = value.valueOf();
    }
    setValues((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const onFinish = async (values: any) => {
    try {
      const response = await fetch(`http://localhost:5000/updateSalarySlip`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slipid, values, userId, employeeId }),
      });

      if (response.ok) {
        message.success('Salary slip updated successfully');
      } else {
        const data = await response.json();
        message.error(data.error);
      }
    } catch (error) {
      console.error('Error updating salary slip:', error);
      message.error('Failed to update salary slip');
    }

    setIsEditMode(false);
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    onFinish(values);
    setIsEditMode(false);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4">
      <h1 className="text-red-500 text-4xl mb-8 flex justify-center items-center">Techalathon Software</h1>
      <Card>
        <div className="flex grid grid-cols-2 gap-4">
          <div>
            <p className="py-4">
              <strong>Name:</strong> {user.Name}
            </p>
            <p className="py-4">
              <strong>Email:</strong> {user.Email}
            </p>
            <p className="py-4">
              <strong>Contact No:</strong> {user.Contact}
            </p>
          </div>
          <div className="flex justify-end">
            <Button type="primary" onClick={handlePrint} className="mr-2">
              <PrinterOutlined /> Print
            </Button>
            {(userDepartment === 'Admin' || userDepartment === 'HR') && (
              isEditMode ? (
                <Button type="primary" onClick={handleSave}>
                  Save
                </Button>
              ) : (
                <Button type="primary" onClick={handleEdit}>
                  <EditOutlined /> Edit
                </Button>
              )
            )}
          </div>
        </div>
        <Form form={form} layout="vertical" onFinish={onFinish} initialValues={values}>
          {isEditMode ? (
            <>
              <Form.Item label="Basic Salary" name="basicsalary">
                <InputNumber onChange={(value) => handleChange('basicsalary', typeof value === 'number' ? value : 0)} />
              </Form.Item>
              <Form.Item label="Allowance" name="allowance">
                <InputNumber onChange={(value) => handleChange('allowance', typeof value === 'number' ? value : 0)} />
              </Form.Item>
              <Form.Item label="Bonus" name="bonus">
                <InputNumber onChange={(value) => handleChange('bonus', typeof value === 'number' ? value : 0)} />
              </Form.Item>
              <Form.Item label="Deductions" name="deductions">
                <InputNumber onChange={(value) => handleChange('deductions', typeof value === 'number' ? value : 0)} />
              </Form.Item>
              <Form.Item label="Gross Salary" name="grossSalary">
                <InputNumber value={values.grosssalary} disabled />
              </Form.Item>
              <Form.Item label="Net Pay" name="netPay">
                <InputNumber value={values.netpay} disabled />
              </Form.Item>
              <Form.Item label="Payslip Month" name="payslipmonth">
                <DatePicker.MonthPicker
                  style={{ width: '100%' }}
                  value={moment(values.payslipmonth)}
                  onChange={(date) => handleChange('payslipmonth', date)}
                />
              </Form.Item>
              <Form.Item label="Professional Tax" name="professionaltax">
                <InputNumber onChange={(value) => handleChange('professionaltax', typeof value === 'number' ? value : 0)} />
              </Form.Item>
              <Form.Item label="Provident Fund" name="providentfund">
                <InputNumber onChange={(value) => handleChange('providentfund', typeof value === 'number' ? value : 0)} />
              </Form.Item>
              <Form.Item label="Total Deductions" name="totaldeductions">
                <InputNumber value={values.totaldeductions} disabled />
              </Form.Item>
              <Form.Item label="Security Deposits" name="securitydeposits">
                <InputNumber onChange={(value) => handleChange('securitydeposits', typeof value === 'number' ? value : 0)} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">Update</Button>
              </Form.Item>
            </>
          ) : (
            <div>
              <table className="w-full table-auto border-collapse border border-gray-500">
                <tbody>
                  <tr>
                    <td className="border border-gray-500 p-2">Basic Salary: {values.basicsalary}</td>
                    <td className="border border-gray-500 p-2">Allowance: {values.allowance}</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 p-2">Bonus: {values.bonus}</td>
                    <td className="border border-gray-500 p-2">Deductions: {values.deductions}</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 p-2">Gross Salary: {values.grosssalary}</td>
                    <td className="border border-gray-500 p-2">Provident Fund: {values.providentfund}</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 p-2">Payslip Month: {moment(values.payslipmonth).format('YYYY-MM')}</td>
                    <td className="border border-gray-500 p-2">Professional Tax: {values.professionaltax}</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 p-2">Total Deductions: {values.totaldeductions}</td>
                    <td className="border border-gray-500 p-2">Security Deposits: {values.securitydeposits}</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 p-2" colSpan={2}>Net Pay: {values.netpay}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </Form>
      </Card>
    </div>
  );
};

export default SpecificSalarySlip;
