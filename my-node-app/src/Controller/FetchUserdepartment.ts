import { Request ,Response} from "express";
import { AddEmpolyee } from "../Connection/Connection";
export const fetchuserdepartment=async(req:Request,res:Response)=>{
    try{
      const {userId}=req.params;
      console.log(userId);
      
      const id=Number(userId)
      const user=await AddEmpolyee.findOne({where:{id}})
      if(!user){
        return  res.status(400).json({message:"no user found"})
      }
      // const userdata={...user.dataValues ,Password}
    const department=user.dataValues.Department  
    return   res.status(200).json(department)
       //console.log(user.dataValues);
         
  }
    catch(error){
    res.status(500).json({message:"internal server error"})
    }
  
    
  }