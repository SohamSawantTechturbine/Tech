import React, { useState, useEffect } from 'react';
import { Button, Table, message } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import Navbar from '../pages/Navbar';
import Specificsalaryslip from './Specificsalaryslip';
import Addsalaryslipview from './Addsalaryslipview';
import ModalComponent from '../utils/Modal';
import { salaryslip } from '../../helper/salaryslip-model';
import { Employee } from '../../helper/Employee-model';
import { useParams } from 'react-router-dom';
import { useModal } from '../utils/modalcom';
import moment from 'moment';

const HrandAdminSalaryslipview = () => {
  const [salarySlips, setSalarySlips] = useState<salaryslip[]>([]);
  const [userdata, setUserdata] = useState<Employee | null>(null);
  const [selectedSlip, setSelectedSlip] = useState<salaryslip | null>(null);
  const [modalContent, setModalContent] = useState<'view' | 'add' | null>(null);
  const { employeeId } = useParams<{ employeeId: string }>();
  const { openModal, visible: modalVisible, closeModal } = useModal();

  useEffect(() => {
    if (employeeId) {
      const fetchSalarySlips = async () => {
        try {
          const response = await fetch("http://localhost:5000/fetchsalaryslip", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userid: employeeId }),
          });
          const data = await response.json();
          if (!response.ok) {
            message.error(data.error);
          } else {
            setSalarySlips(data.salaryslips);
            setUserdata(data.user);
          }
        } catch (error) {
          console.error("Error fetching salary slips:", error);
          message.error("Error fetching salary slips");
        }
      };
      fetchSalarySlips();
    }
  }, [employeeId]);

  const handleSlipView = (record: salaryslip) => {
    setSelectedSlip(record);
    setModalContent('view');
    openModal();
  };

  const handleAddSalarySlip = () => {
    setModalContent('add');
    openModal();
  };

  const columns = [
    {
      title: 'Employee ID',
      dataIndex: 'employeeid',
      key: 'employeeid',
    },
    {
      title: 'Payslip Month',
      dataIndex: 'payslipmonth',
      key: 'payslipmonth',
      render: (text: string) => moment(text).format('YYYY-MM'),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: any, record: salaryslip) => (
        <EyeOutlined className='text-blue-700 w-10 h-10' onClick={() => handleSlipView(record)} />
      ),
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-28">
        <h1 className="text-red-500 text-4xl mb-8 text-center">Techalathon Software</h1>
        <div className="overflow-x-auto">
          <Table dataSource={salarySlips} columns={columns} className='bg-white border-black' rowKey="id" />
        </div>
        <Button type="primary" onClick={handleAddSalarySlip} className="mt-4">
          Add Salary
        </Button>
        <ModalComponent
          open={modalVisible}
          title={modalContent === 'view' ? "View Payslip" : "Add Salary"}
          onCancel={closeModal}
        >
          {modalContent === 'view' && selectedSlip && userdata && (
            <Specificsalaryslip userdata={userdata} salarySlips={selectedSlip} employeeId={employeeId} />
          )}
          {modalContent === 'add' && (
            <Addsalaryslipview />
          )}
        </ModalComponent>
      </div>
    </div>
  );
};

export default HrandAdminSalaryslipview;
