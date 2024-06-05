
import { Request, Response } from "express";
import { AddEmpolyee } from "../Connection/Connection";


export const updateprofile=async(req:Request,res:Response)=>
    {
   const {userid,Name,Email,Birth_Date,Contact}=req.body;
   const id=Number(userid)
   try{
    const user=await AddEmpolyee.findOne({where:{id}})
    if(!user){
        return res.status(400).json({message:"no user found"})
    }
    await user.update({
        Name,
        Email,
        Birth_Date,
        Contact

    })
    return res.status(200).json({message:"update succesfull"})
   }catch(err){
      return res.status(500).json({message:"internal server error"})
   }
    } 