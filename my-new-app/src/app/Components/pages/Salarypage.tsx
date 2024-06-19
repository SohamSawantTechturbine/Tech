import React from 'react';
import { useParams } from 'react-router-dom';
import SalaryView from '../Views/SalaryView'; // Update the import path as needed

const Salarypage = () => {
  const { employeeId } = useParams<{ employeeId: string }>();

  return (
    <div>
      <SalaryView  />
    </div>
  );
};

export default Salarypage;
