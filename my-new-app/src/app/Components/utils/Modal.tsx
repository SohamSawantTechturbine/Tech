import React from 'react';
import { Modal } from 'antd';
interface ModalProps {
    open: boolean;
    title: string| JSX.Element;
    onCancel: () => void;
    children: React.ReactNode;
  }
const ModalComponent: React.FC<ModalProps> = ({ open, title, onCancel, children }) => {
  return (
    <Modal
      open={open}
      title={title}
      onCancel={onCancel}
      footer={null}
      className=' shadow-gray-200'
    >
      {children}
    </Modal>
  );
}

export default ModalComponent;