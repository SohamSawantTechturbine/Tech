
import { Request, Response } from 'express';
import { AddEmpolyee, payslip } from '../Connection/Connection';
import { AddEmpolyeedata } from '../Model/Addemplopyee-model';
  export const fetchsalaryslip=async(req:Request,res:Response)=>{
      const {userid}=req.body
      const employeeid=Number(userid)
      try{
       
        const salaryslips= await payslip.findAll({where:{employeeid}})
      //  console.log(salaryslips);
        const user=await AddEmpolyee.findAll({where:{id:employeeid}})
        return res.status(200).json({salaryslips,user})
      }
      catch(error){
    return res.status(500).send({ error: 'Internal server error' });

      }
      
  }