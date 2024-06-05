import { Request ,Response} from "express";
import { AddEmpolyee } from "../Connection/Connection";
export const fetchallemployee=async(req:Request,res:Response)=>{
    try{
      const users=await AddEmpolyee.findAll();
      return res.status(200).json(users);
         
  }
    catch(error){
    res.status(500).json({message:"internal server error"})
    }
  
    
  }