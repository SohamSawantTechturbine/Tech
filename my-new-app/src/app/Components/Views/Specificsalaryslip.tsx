import React, { useEffect, useState } from 'react';
import {
  Form,
  Input,
  Button,
  Card,
  message,
  InputNumber,
  DatePicker,
} from 'antd';
import { PrinterOutlined, EditOutlined } from '@ant-design/icons';
import moment from 'moment';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { salaryslip } from '../../helper/salaryslip-model';
import { log } from 'console';
import { useParams } from 'react-router-dom';

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
  // { employeeId } = useParams<{ employeeId: string }>();
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
        form.setFieldsValue({
          ...data.salarySlip,
          payslipmonth: moment(data.salarySlip.payslipmonth),
        });
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
    const totalDeductions =
      (deductions || 0) +
      values.providentfund +
      values.professionaltax +
      values.securitydeposits;
    const netPay = grossSalary - totalDeductions;

    form.setFieldsValue({
      grossSalary,
      totalDeductions,
      netPay,
    });
  }, [values]);

  const handleChange = (
    field: string,
    value: number | moment.Moment | null
  ) => {
    if (field === 'payslipmonth' && value instanceof moment) {
      value = value.valueOf();
    }
    setValues((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const onFinish = async (formValues: any) => {
    try {
      const response = await fetch(`http://localhost:5000/updateSalarySlip`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          slipid,
          values: formValues,
          userId,
          employeeId,
        }),
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
    form
      .validateFields()
      .then(onFinish)
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
    setIsEditMode(false);
  };

  const handleSend = async () => {
    const input = document.getElementById('pdfContent');
    if (input) {
      const canvas = await html2canvas(input);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 180; // Increase the width of the image in the PDF
      const pageHeight = 190; // Adjust the height to keep proportions and margins
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio
      const pageWidth = pdf.internal.pageSize.getWidth(); // Get the PDF page width
      const pageHeightTotal = pdf.internal.pageSize.getHeight(); // Get the total PDF page height

      const position = 0;

      // Center the image on the page
      const xOffset = (pageWidth - imgWidth) / 2; // Calculate the x offset to center the image
      const yOffset = (pageHeightTotal - imgHeight) / 2; // Calculate the y offset to center the image

      pdf.setLineWidth(1);
      pdf.setDrawColor(0);
      pdf.rect(xOffset - 2, yOffset - 2, imgWidth + 4, imgHeight + 4); // Draw border around the image

      pdf.addImage(imgData, 'PNG', xOffset, yOffset, imgWidth, imgHeight);

      // Check if image exceeds the page height
      let heightLeft = imgHeight - pageHeightTotal;

      while (heightLeft > 0) {
        pdf.addPage();
        pdf.rect(xOffset - 2, yOffset - 2, imgWidth + 4, imgHeight + 4); // Draw border on each page
        pdf.addImage(
          imgData,
          'PNG',
          xOffset,
          position - heightLeft,
          imgWidth,
          imgHeight
        );
        heightLeft -= pageHeightTotal;
      }

      const pdfBlob = pdf.output('blob');

      const formData = new FormData();
      formData.append('pdf', pdfBlob);
      formData.append('userId', employeeId);
      formData.append('Email', user.Email);

      try {
        const response = await fetch(`http://localhost:5000/sendSalarySlip`, {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          message.success('Salary slip sent successfully');
        } else {
          message.error('Failed to send salary slip');
        }
      } catch (error) {
        console.error('Error sending salary slip:', error);
        message.error('Error sending salary slip');
      }
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4">
      <Card>
        <div id="pdfContent">
          <p className="flex justify-center text-red-600">
            Techalthon Software solutions
          </p>
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
          </div>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={values}
          >
            {isEditMode ? (
              <>
                <Form.Item
                  label="Basic Salary"
                  name="basicsalary"
                  rules={[
                    { required: true, message: 'Please input basic salary!' },
                  ]}
                >
                  <InputNumber
                    onChange={(value) =>
                      handleChange(
                        'basicsalary',
                        typeof value === 'number' ? value : 0
                      )
                    }
                  />
                </Form.Item>
                <Form.Item
                  label="Allowance"
                  name="allowance"
                  rules={[
                    { required: true, message: 'Please input allowance!' },
                  ]}
                >
                  <InputNumber
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
                    onChange={(value) =>
                      handleChange(
                        'bonus',
                        typeof value === 'number' ? value : 0
                      )
                    }
                  />
                </Form.Item>
                <Form.Item label="Deductions" name="deductions">
                  <InputNumber
                    onChange={(value) =>
                      handleChange(
                        'deductions',
                        typeof value === 'number' ? value : 0
                      )
                    }
                  />
                </Form.Item>
                <Form.Item label="Gross Salary" name="grossSalary">
                  <InputNumber value={values.grosssalary} disabled />
                </Form.Item>
                <Form.Item label="Net Pay" name="netPay">
                  <InputNumber value={values.netpay} disabled />
                </Form.Item>
                <Form.Item
                  label="Payslip Month"
                  name="payslipmonth"
                  rules={[
                    { required: true, message: 'Please select payslip month!' },
                  ]}
                >
                  <DatePicker.MonthPicker
                    style={{ width: '100%' }}
                    value={
                      values.payslipmonth
                        ? moment(values.payslipmonth)
                        : undefined
                    }
                    onChange={(date) => handleChange('payslipmonth', date)}
                  />
                </Form.Item>
                <Form.Item label="Professional Tax" name="professionaltax">
                  <InputNumber
                    onChange={(value) =>
                      handleChange(
                        'professionaltax',
                        typeof value === 'number' ? value : 0
                      )
                    }
                  />
                </Form.Item>
                <Form.Item label="Provident Fund" name="providentfund">
                  <InputNumber
                    onChange={(value) =>
                      handleChange(
                        'providentfund',
                        typeof value === 'number' ? value : 0
                      )
                    }
                  />
                </Form.Item>
                <Form.Item label="Total Deductions" name="totaldeductions">
                  <InputNumber value={values.totaldeductions} disabled />
                </Form.Item>
                <Form.Item label="Security Deposits" name="securitydeposits">
                  <InputNumber
                    onChange={(value) =>
                      handleChange(
                        'securitydeposits',
                        typeof value === 'number' ? value : 0
                      )
                    }
                  />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Update
                  </Button>
                </Form.Item>
              </>
            ) : (
              <div>
                <table className="w-full table-auto border-collapse border border-gray-500">
                  <tbody>
                    <tr>
                      <td className="border border-gray-500 p-2">
                        Basic Salary: {values.basicsalary}
                      </td>
                      <td className="border border-gray-500 p-2">
                        Allowance: {values.allowance}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-500 p-2">
                        Bonus: {values.bonus}
                      </td>
                      <td className="border border-gray-500 p-2">
                        Deductions: {values.deductions}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-500 p-2">
                        Gross Salary: {values.grosssalary}
                      </td>
                      <td className="border border-gray-500 p-2">
                        Net Pay: {values.netpay}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-500 p-2">
                        Payslip Month:{' '}
                        {moment(values.payslipmonth).format('YYYY-MM')}
                      </td>
                      <td className="border border-gray-500 p-2">
                        Professional Tax: {values.professionaltax}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-500 p-2">
                        Provident Fund: {values.providentfund}
                      </td>
                      <td className="border border-gray-500 p-2">
                        Total Deductions: {values.totaldeductions}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-500 p-2">
                        Security Deposits: {values.securitydeposits}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </Form>
        </div>
        <div className="flex gap-2 mt-4">
          <Button
            type="primary"
            onClick={handlePrint}
            icon={<PrinterOutlined />}
          >
            Print
          </Button>
          <Button type="primary" onClick={handleSend} icon={<EditOutlined />}>
            Send
          </Button>
          {!isEditMode ? (
            <Button type="primary" onClick={handleEdit} icon={<EditOutlined />}>
              Edit
            </Button>
          ) : (
            <Button type="primary" onClick={handleSave} icon={<EditOutlined />}>
              Save
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default SpecificSalarySlip;
