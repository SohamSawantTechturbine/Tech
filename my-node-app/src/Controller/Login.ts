import { gql } from 'graphql-tag';
import {  AddEmpolyee } from '../Connection/Connection';
import { Request, Response } from 'express';
import { generateRefreshToken, generateToken } from '../middleware/authjwt';

export const login = async(_, { email, password }) => {
  const userdata = await AddEmpolyee.findOne({ where: { Email: email } });
  if (!userdata) {
    throw new Error("User not found");
  }
  
  // Directly compare the plaintext passwords
  if (userdata.dataValues.Password !== password) {
    throw new Error("Incorrect password");
  }

  return { message: "Login successful", user:userdata };
}



export const logindata = async(req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const user = await AddEmpolyee.findOne({ where: { Email: email } });
    if (!user) {
      // User not found
      return res.status(404).json({ message: "User not found" });
    }
console.log(user);

    //Check password
    if (user?.dataValues.Password !== password) {
      // Incorrect password
      return res.status(400).json({ message: "Incorrect password" });
    }
    const Access_token = generateToken(user.dataValues);
    const Refresh_token = generateRefreshToken(user.dataValues);
    // Login successful
    // Here you can generate a token or set session data if you're using authentication
   res.status(200).json({ message: "Login successful" ,user,Access_token,Refresh_token});
  }catch(error){
    res.status(500).json({message:"intrnal server error"})
  }
};



