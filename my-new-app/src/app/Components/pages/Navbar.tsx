// Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Layout, Button, Drawer, Menu, Avatar, Modal } from 'antd';
import {
  MenuOutlined,
  UserOutlined,
  CodeOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import Addsalaryslip from './Addsalaryslip';
import Addsalaryslipview from '../Views/Addsalaryslipview';
import { ThemeProvider, useTheme } from './../Context/Themcontext';
import ThemedButton from './../Context/Themebutoon'; // Import ThemedButton
import './../../../styles.css';

const { Header } = Layout;

interface MenuProps {
  mode: 'horizontal' | 'inline';
}

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isAdminOrHR, setIsAdminOrHR] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const { pathname: location } = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    fetchUserDepartment();
  }, []);

  const fetchUserDepartment = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/fetchuserdepartment/${userId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          // Add any authentication headers if required
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch user department');
      }
      const data = await response.json();
      if (data === 'Admin' || data === 'HR') {
        setIsAdminOrHR(true);
      }
    } catch (error) {
      console.error('Error fetching user department:', error);
    }
  };

  useEffect(() => {
    setVisible(false);
  }, [location]);

  const LeftMenu = ({ mode }: MenuProps) => (
    <Menu mode={mode} className="bg-pink-200">
      {isAdminOrHR && (
        <>
          <Menu.Item
            key="EmployeeList"
            onClick={() => navigate('/AllEmployee')}
          >
            Employee List
          </Menu.Item>
          <Menu.Item key="AddSalarySlip" onClick={showAddModal}>
            Add Salary Slip
          </Menu.Item>
        </>
      )}
      <Menu.Item key="home" onClick={() => navigate('/home')}>
        Home
      </Menu.Item>
    </Menu>
  );

  const showAddModal = () => {
    setAddModalVisible(true);
  };

  const handleAddModalCancel = () => {
    setAddModalVisible(false);
  };

  const Username = localStorage.getItem('Username');
  const Userimage = localStorage.getItem('userimage');

  const RightMenu = ({ mode }: MenuProps) => (
    <Menu mode={mode} className="bg-pink-200">
      <Menu.SubMenu
        title={
          <span>
            {Userimage && (
              <img
                src={`http://localhost:5000${Userimage}`}
                className="border rounded-lg h-5"
                alt="user avatar"
              />
            )}{' '}
            <span className="ml-2">{Username}</span>
          </span>
        }
      >
        <Menu.Item key="Profile" onClick={() => navigate('/profile')}>
          <UserOutlined /> Profile
        </Menu.Item>
        <Menu.Item key="log-out">
          <LogoutOutlined /> Logout
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );

  return (
    <Layout>
      <Header
        className={`fixed top-0 left-0 right-0 z-50 bg-pink-200 ${
          theme === 'dark' ? 'bg-gray-600' : ''
        }`}
      >
        <div className="flex justify-between items-center h-full px-4">
          <div className="text-red-500 text-lg">Techathlon Software</div>
          <div className="p-4">
            <ThemedButton /> {/* Use the ThemedButton component here */}
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <LeftMenu mode="horizontal" />
            </div>
            <Button
              type="text"
              onClick={() => setVisible(!visible)}
              className="sm:hidden"
            >
              <MenuOutlined />
            </Button>
            <div className="hidden sm:block">
              <RightMenu mode="horizontal" />
            </div>
          </div>
        </div>
      </Header>
      <Drawer
        title="Brand Here"
        placement="right"
        closable={true}
        onClose={() => setVisible(false)}
        open={visible}
      >
        <LeftMenu mode="inline" />
        <RightMenu mode="inline" />
      </Drawer>
      {/* <Modal
        title="Add Salary Slip"
        visible={addModalVisible}
        onCancel={handleAddModalCancel}
        footer={null}
      >
        <Addsalaryslipview onCancel={handleAddModalCancel} />
      </Modal> */}
    </Layout>
  );
};

export default Navbar;
