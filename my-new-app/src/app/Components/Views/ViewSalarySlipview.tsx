import React, { useState, useEffect } from 'react';
import { Modal, message } from 'antd';
import { salaryslip } from '../../helper/salaryslip-model';
import Navbar from '../pages/Navbar';
import moment from 'moment';
import { EyeOutlined } from '@ant-design/icons';
import Specificsalaryslip from './Specificsalaryslip';
import { Employee } from '../../helper/Employee-model';
import { useNavigate } from 'react-router-dom';
import CustomTable from '../utils/Table';
import ModalComponent from '../utils/Modal';
import { ModalContext, useModal } from '../utils/modalcom';
const ViewSalarySlipview = () => {
  const [salarySlips, setSalarySlips] = useState<salaryslip[] | any>([]);
  const [userdata, setuserdata] = useState<Employee | any>();
  const userid = localStorage.getItem('userId');
  // const [visible, setVisible] = useState(false);
  const [selectedSlip, setSelectedSlip] = useState<salaryslip | any>();
  const navigate = useNavigate();
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<number | null>(
    null
  ); // State to store the selected employee ID
  const { visible, openModal, closeModal } = useModal();
  useEffect(() => {
    const fetchSalarySlips = async () => {
      try {
        const response = await fetch('http://localhost:5000/fetchsalaryslip', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userid }),
        });
        if (!response.ok) {
          const data = await response.json();
          message.error(data.error);
        } else {
          const data = await response.json();
          setSalarySlips(data.salaryslips);
          setuserdata(data.user);
        }
      } catch (error) {
        console.error('Error fetching salary slips:', error);
      }
    };

    fetchSalarySlips();
  }, [userid]);

  const handleslip = (record: salaryslip) => {
    setSelectedSlip(record);
    openModal();
    //setVisible(true); // Open the modal
  };

  //   const closeModal = () => {
  //     setVisible(false); // Close the modal
  //   };

  const columns = [
    {
      title: 'Employee ID',
      dataIndex: 'employeeid',
      key: 'employeeid',
      className: 'bg-orange-500 text-white border border-black',
    },
    {
      title: 'Payslip Month',
      dataIndex: 'payslipmonth',
      key: 'payslipmonth',
      className: 'bg-orange-500 text-black border border-black',
      render: (text: string) => moment(text).format('YYYY-MM'),
    },
    {
      className:
        'bg-orange-500 text-black border border-black hover:bg-orange-400',
      title: 'Actions',
      key: 'actions',
      render: (text: any, record: salaryslip) => (
        <EyeOutlined
          type="primary"
          className="text-blue-700 w-10 h-10"
          onClick={() => handleslip(record)}
        >
          View Payslip
        </EyeOutlined>
      ),
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-28">
        <h1 className="text-red-500 text-4xl mb-8 text-center">
          Techalathon Software
        </h1>
        <div className="overflow-x-auto">
          <CustomTable
            dataSource={salarySlips}
            loading={false}
            rowKey="employeeid"
            columns={columns}
            className="border border-black"
          />
        </div>
        <ModalComponent
          open={visible}
          title={<span >"View Payslip"</span>}
          onCancel={closeModal}
        >
          <Specificsalaryslip
            userdata={userdata}
            salarySlips={selectedSlip}
            employeeId={selectedEmployeeId}
          />
        </ModalComponent>
      </div>
    </div>
  );
};

export default ViewSalarySlipview;
