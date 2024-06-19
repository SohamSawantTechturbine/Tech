import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Card, Avatar, Button } from 'antd';
import { PlusOutlined, ShareAltOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './../Context/Themcontext'; // Import useTheme hook
import { ShareSocial } from 'react-share-social';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useModal } from '../utils/modalcom';
import ModalComponent from '../utils/Modal';
import AddSalarypage from './AddSalarypage';

const HomePage = () => {
  const [userDepartment, setUserDepartment] = useState("");
  const [showShareOptions, setShowShareOptions] = useState(false);
  const { theme } = useTheme(); // Use the useTheme hook to access theme
  const navigate = useNavigate();
  const {visible,openModal,closeModal}=useModal();
  const shareUrl = window.location.href; // Current page URL

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
  };

  useEffect(() => {
    fetchUserDepartment();
  }, []);

  const handleShareClick = () => {
    setShowShareOptions(!showShareOptions);
  };
  const handleAddSalaryClick = () => {
    openModal(); // Open the modal when "Add Salary" is clicked
  };
  return (
    <div className={theme === 'dark' ? 'dark-background' : ''}>
      <Navbar />
      <div className="flex justify-center mt-28">
        {userDepartment === "Admin" || userDepartment === "HR" ? (
          <div>
          <Card className={`w-1/2 mx-4 border-black ${theme === 'dark' ? 'dark-card' : ''}`}>
            <h2 className='text-teal-600 flex justify-center'>Add Employee</h2>
            <div className="flex justify-center mt-4">
              <Avatar className='h-11 w-11 border-gray-500 cursor-pointer' onClick={() => navigate("/Addemployee")}>
                <PlusOutlined />
              </Avatar>
            </div>
          </Card>
          <Card className={`w-1/2 mx-4 border-black ${theme === 'dark' ? 'dark-card' : ''}`}>
          <h2 className='text-teal-600 flex justify-center'>Add SalaryPage</h2>
          <div className="flex justify-center mt-4">
            <Avatar className='h-11 w-11 border-gray-500 cursor-pointer' onClick={handleAddSalaryClick}>
              <PlusOutlined />
            </Avatar>
          </div>
        </Card>
          </div>
        ) : null}
        <Card className={`w-1/2 mx-4 border-black ${theme === 'dark' ? 'dark-card' : ''}`}>
          <h2 className='text-teal-600 flex justify-center'>View SalarySlips</h2>
          <div className="flex justify-center mt-4">
            <Avatar className='h-11 w-11 border-gray-500 cursor-pointer' onClick={() => navigate("/viewsalaryslip")}>
              <PlusOutlined />
            </Avatar>
          </div>
        </Card>
      
      </div>
      <div className="flex justify-center mt-4">
        <Button type="primary" icon={<ShareAltOutlined />} onClick={handleShareClick}>
          Share
        </Button>
      </div>
      {showShareOptions && (
        <div className="flex justify-center mt-4">
          <ShareSocial
            url={shareUrl}
            socialTypes={['facebook', 'twitter', 'whatsapp', 'telegram']}
         
          />
          <CopyToClipboard text={shareUrl}>
            <Button type="primary" className="ml-4">Copy Link</Button>
          </CopyToClipboard>
        </div>
      )}
       <ModalComponent
      open={visible}
      onCancel={closeModal}
      title=" "
     
      
      
      >
        <AddSalarypage/>
      </ModalComponent>
    </div>
  );
};

export default HomePage;
