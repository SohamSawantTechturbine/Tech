import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  visible: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
