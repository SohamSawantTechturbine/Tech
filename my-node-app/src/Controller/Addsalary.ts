import { Request ,Response} from "express";
import { Salary } from "../Connection/Connection";


export const Addsalary=async(req:Request,res:Response)=>{
    const { salary, SD, addedBy, startingDate ,userId} = req.body;
    console.log( salary, SD, addedBy, startingDate);
    

  try {
    const newSalary = await Salary
    .create({
        employeeId:  userId,
        salary: salary,
        SD:  SD,
        addedBy  :addedBy,
        startingDate: startingDate,
        userId:userId
    });

    res.status(201).json({ message: 'Salary added successfully!', data: newSalary });
  } catch (error) {
    console.error('Error adding salary:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}