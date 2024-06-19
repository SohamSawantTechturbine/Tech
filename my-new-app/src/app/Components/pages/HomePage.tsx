import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Card, Button, Avatar } from 'antd';

import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [userDepartment, setUserDepartment] = useState("");
const navigate=useNavigate();
  const fetchUserDepartment = async () => {
    const userId = localStorage.getItem("userId");
    
    if (!userId) {
      console.error("User ID not found in localStorage");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/fetchuserdepartment/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        // Add any authentication headers if required
      });

      if (response.ok) {
        const data = await response.json();
        setUserDepartment(data);
      } else {
        console.error("Failed to fetch user department");
      }
    } catch (error) {
      console.error("Error fetching user department:", error);
    }
  }

  useEffect(() => {
    fetchUserDepartment();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-28">
        {userDepartment === "Admin" || userDepartment === "HR" ? (
          <Card className="w-1/2 mx-4 border-black">
            <h2 className='text-teal-600 flex justify-center'>Add Employee</h2>
            <div className="flex justify-center mt-4">
              <Avatar className='h-11 w-11 border-gray-500 cursor-pointer' onClick={() => navigate("/Addemployee")}>
                <PlusOutlined />
              </Avatar>
            </div>
          </Card>
        ) : null}
        <Card className="w-1/2 mx-4 border-black">
          <h2 className='text-teal-600 flex justify-center'>View SalarySlips</h2>
          <div className="flex justify-center mt-4">
            <Avatar className='h-11 w-11 border-gray-500 cursor-pointer' onClick={() => navigate("/viewsalaryslip")}>
              <PlusOutlined />
            </Avatar>
          </div>
        </Card>
      </div>
    </div>
  );
}


export default HomePage;
