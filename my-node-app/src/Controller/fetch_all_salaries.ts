import { Request ,Response} from "express";
import { Salary } from "../Connection/Connection";



export const fetch_All_salaries=async(req:Request,res:Response)=>{
    
    const {userId}=req.body
    console.log(userId,"salarirs");
    
    try{
       
         const fetchsalaries=await Salary.findAll({where:{userId}})


        res.status(201).json({fetchsalaries });
 
    }
catch(error){
    res.status(500).json({message:"internal  server error"})
}
     
}