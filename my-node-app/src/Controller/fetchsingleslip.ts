import { Request ,Response} from "express";
import { AddEmpolyee, payslip } from "../Connection/Connection";

export const fetchsingleslip=async(req:Request,res:Response)=>{
    try{
      const {userId,slipid,employeeId}=req.body;
      console.log(userId);
      
      const id=Number(userId)

      const payslipUserId = employeeId ? employeeId : userId;

      const user=await AddEmpolyee.findOne({where:{id}})

      const salaryslip=await payslip.findOne({where:{id:slipid , employeeid:payslipUserId}})
      if(!user){
        return  res.status(400).json({message:"no user found"})
      }
    // console.log(salaryslip);
     const salarySlip=salaryslip.dataValues
    const department=user.dataValues.Department  
    return   res.status(200).json({department,salarySlip})
      
         
  }
    catch(error){
   return res.status(500).json({message:"internal server error"})
    }
  
    
  }