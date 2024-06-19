import React, { useState, useEffect } from "react";
import { EyeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './../Context/Themcontext';
import { Employee } from '../../helper/Employee-model';
import Navbar from './Navbar';
import CustomTable from '../utils/Table'; 
import { ColumnsType } from 'antd/es/table';

const AllEmployeePage = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const fetchEmployees = async () => {
    try {
      const response = await fetch("http://localhost:5000/fetchallemployee", {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch employees");
      }
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleslipview = (employeeId: any) => {
    navigate(`/hrandadminsalaryslip/${employeeId}`);
  };

  const handleslipviewsalary = (employeeId: any) => {
    navigate(`/salarypage/${employeeId}`);
  };

  const columns: ColumnsType<Employee> = [
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
    },
    {
      title: 'Department',
      dataIndex: 'Department',
      key: 'Department',
    },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Email',
    },
    {
      title: 'Join Date',
      dataIndex: 'Join_Date',
      key: 'Join_Date',
    },
    {
      title: 'Birth Date',
      dataIndex: 'Birth_Date',
      key: 'Birth_Date',
    },
    {
      title: 'Contact',
      dataIndex: 'Contact',
      key: 'Contact',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <EyeOutlined onClick={() => handleslipview(record.id)} />
      ),
    },
    {
      title: 'Salary',
      key: 'salary',
      render: (text, record) => (
        <EyeOutlined onClick={() => handleslipviewsalary(record.id)} />
      ),
    },
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <Navbar />
      <div className="p-4">
      <div className={`container mx-auto px-4 bg-gray-300 ${theme === 'dark' ? 'dark-card' : ''}`}>
                <div className="mt-8">
                    <h1 className="text-2xl font-bold mb-4">All Employees</h1>
                    <div className="flex justify-end mb-4">
                        <input
                            type="text"
                            placeholder="Search by name"
                            className="px-3 py-2 border border-gray-400 rounded-md"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                    </div>
                    </div>
        <CustomTable<Employee>
          columns={columns}
          dataSource={filteredEmployees}
          loading={false}
          rowKey="id"
          className="border-black"
        />
      </div>
    </div>
    </div>
  );
};

export default AllEmployeePage;
