// ThemedButton.tsx
import React from 'react';
import { Button } from 'antd';
import { useTheme } from './Themcontext'; 
import { EyeOutlined } from '@ant-design/icons';
const ThemedButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <EyeOutlined  className=" bg-white" onClick={toggleTheme}>
      Toggle to {theme === 'light' ? 'dark' : 'light'} mode
    </EyeOutlined>
  );
};

export default ThemedButton;
