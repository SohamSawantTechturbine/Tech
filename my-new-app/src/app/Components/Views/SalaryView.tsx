import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useModal } from '../utils/modalcom';
import ModalComponent from '../utils/Modal';
import AddSalarypage from '../pages/AddSalarypage';
interface SalaryViewProps {
  employeeId?: string;
}

const SalaryView = () => {
  const [salaryData, setSalaryData] = useState<any>(null);
  const { employeeId } = useParams<{ employeeId: string }>();
  const [loading, setLoading] = useState<boolean>(true);
  const {openModal,visible,closeModal}=useModal()
  const navigate=useNavigate();
  useEffect(() => {
    if (employeeId) {
      // Fetch salary data for the given employeeId
      const fetchSalaryData = async () => {
        try {
          const response = await fetch(`http://localhost:5000/salary/${employeeId}`);
          const res = await response.json();
          setSalaryData(res.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching salary data:', error);
          setLoading(false);
        }
      };

      fetchSalaryData();
    }
  }, [employeeId]);

  return (
    <>
    <div className="p-4 max-w-md mx-auto bg-white border border-collapse rounded-md">
    <h2 className="text-2xl font-bold mb-4 text-gray-700">Salary Details for Employee ID: {employeeId}</h2>
    {loading ? (
      <p>Loading...</p>
    ) : (
      salaryData && (
        <div>
          {salaryData?.map((salary:any) => (
            <div key={salary.id} className="mb-4 p-4 border rounded-md">
              <p><strong>Salary:</strong> {salary.salary}</p>
              <p><strong>SD:</strong> {salary.SD}</p>
              <p><strong>Starting Date:</strong> {salary.startingDate}</p>
              <p><strong>Added By:</strong> {salary.addedBy}</p>
              <p><strong>Created At:</strong> {new Date(salary.createdAt).toLocaleString()}</p>
              <p><strong>Updated At:</strong> {new Date(salary.updatedAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )
    )}

  </div>
  <Button type="primary"  onClick={()=>(openModal())}>
          Add salary
        </Button>
        <ModalComponent
      open={visible}
      onCancel={closeModal}
      title=" "
     
      
      
      >
        <AddSalarypage/>
      </ModalComponent>
  </>
);
};
export default SalaryView;
