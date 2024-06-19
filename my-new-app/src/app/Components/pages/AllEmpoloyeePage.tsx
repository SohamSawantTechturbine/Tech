import { Employee } from '../../helper/Employee-model';
import Navbar from './Navbar'
import React, { useState, useEffect } from "react";
import { EyeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const AllEmployeePage = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const navigate = useNavigate();
    const fetchEmployees = async () => {
        try {
            const response = await fetch("http://localhost:5000/fetchallemployee", {
                method: "POST",
            });
            if (!response.ok) {
                throw new Error("Failed to fetch employees");
            }
            const data = await response.json();
            setEmployees(data);
        } catch (error) {
            console.error("Error fetching employees:", error);
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const filteredEmployees = employees.filter(employee =>
        employee.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const handleslipview = (employeeId: any) => {
        navigate(`/hrandadminsalaryslip/${employeeId}`);
    };
    
    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 bg-gray-300">
                <div className="mt-8">
                    <h1 className="text-2xl font-bold mb-4">All Employees</h1>
                    <div className="flex justify-end mb-4">
                        <input
                            type="text"
                            placeholder="Search by name"
                            className="px-3 py-2 border border-gray-400 rounded-md"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse border border-black">
                            <thead className="bg-orange-300 ">
                                <tr>
                                    <th className='px-4 py-2 text-left border border-black'> Employee_ID</th>
                                    <th className="px-4 py-2 text-left border border-black">Profile Image</th>
                                    <th className="px-4 py-2 text-left border border-black">Name</th>
                                    <th className="px-4 py-2 text-left border border-black">Email</th>
                                    <th className="px-4 py-2 text-left border border-black">Join Date</th>
                                    <th className="px-4 py-2 text-left border border-black">Birth Date</th>
                                    <th className="px-4 py-2 text-left border border-black">Contact_No</th>
                                    <th className="px-4 py-2 text-left border border-black">View Slips</th> 
                                
                                </tr>
                            </thead>
                            <tbody>
                                {filteredEmployees.map((employee, index) => (
                                    <tr key={index} className="bg-white border border border-black">
                                        <td className='px-4 py-2 border border-black'>{employee.id}</td>
                                        <td className="px-4 py-2 border border-black"><img src={`http://localhost:5000${employee.File}`} alt="avatar" className="w-16 h-16 object-cover" /></td>
                                        <td className="px-4 py-2 border border-black">{employee.Name}</td>
                                        <td className="px-4 py-2 border border-black">{employee.Email}</td>
                                        <td className="px-4 py-2 border border-black">{employee.Join_Date}</td>
                                        <td className="px-4 py-2 border border-black">{employee.Birth_Date}</td>
                                        <td className="px-4 py-2 border border-black">{employee.Contact}</td>
                                        <td className="px-4 py-2 border border-black">
                                            <EyeOutlined onClick={()=>handleslipview(employee.id)}>View Slips</EyeOutlined> 
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllEmployeePage;
