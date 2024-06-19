
import { Request, Response } from "express";
import { AddEmpolyee } from "../Connection/Connection";


export const updateprofile=async(_,{Name,Email,Birth_Date,Contact,userid})=>
    {

   const id=Number(userid)
   console.log(id);
   const Contactnu=Number(Contact)
   try{
    const user=await AddEmpolyee.findOne({where:{id}})
    if(!user){
        return ({message:"no user found"})
        
    }
    await user.update({
        Name,
        Email,
        Birth_Date,
        Contact:Contactnu

    })
    return ({message:"update succesfull"})
   }catch(err){
      return ({message:"internal server error"})
   }
    } 