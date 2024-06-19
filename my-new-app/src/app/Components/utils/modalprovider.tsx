import React, { useState, ReactNode } from 'react';
import { ModalContext } from './modalcom';

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <ModalContext.Provider value={{ visible, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
