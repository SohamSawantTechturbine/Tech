import { message } from 'antd';
import { Request, Response } from 'express';
import { AddEmpolyee } from '../Connection/Connection';

export const login = async(req: Request, res: Response) => {
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

    // Login successful
    // Here you can generate a token or set session data if you're using authentication
   res.status(200).json({ message: "Login successful" ,user});
  }catch(error){
    res.status(500).json({message:"intrnal server error"})
  }
};
