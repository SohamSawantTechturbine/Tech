import { Request ,Response} from "express";
import { AddEmpolyee } from "../Connection/Connection";


export const fetchprofile=async(req:Request,res:Response)=>{
  try{
    const {userid}=req.body;
    console.log(userid);
    
    const id=Number(userid)
    const user=await AddEmpolyee.findOne({where:{id}})
    if(!user){
        res.status(400).json({message:"no user found"})
    }
    // const userdata={...user.dataValues ,Password}
    const {Password,...userdata}=user.dataValues
    res.status(200).json(userdata)
     //console.log(user.dataValues);
       
}
  catch(error){
  res.status(500).json({message:"internal server error"})
  }

  
}