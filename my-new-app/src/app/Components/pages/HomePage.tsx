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
      {userDepartment === "Admin" || userDepartment === "HR" ? (
        <div className="container mx-auto mt-28 w-auto h-50">
          <Card  className="w-1/2 mx-auto border-black">
            <h2 className=' ml-44 text-teal-600'>Add Employee</h2>
            {/* Add button or form for adding employee */}
            <div className="flex justify-center mt-4">
           <Avatar className='h-11 w-11 border-gray-500'><PlusOutlined onClick={()=>navigate("/Addemployee")} /> </Avatar> 

            </div>
          </Card>
        </div>
       ) : null} 
    </div>
  );
}

export default HomePage;
