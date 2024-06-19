import {  AddEmpolyee } from '../Connection/Connection';
import { Request, Response } from 'express';
import { generateRefreshToken, generateToken, verifyRefreshToken, verifyToken } from '../middleware/authjwt';

export const Refreshtoken=async(req:Request,res:Response)=>{

    const refreshToken = req.body.refreshToken;
    if (!refreshToken) {
      return res.status(401).json({ message: 'Refresh token not provided' });
    }
  
    try {
        const user = verifyRefreshToken(refreshToken);
        const accessToken = generateToken(user);
        res.json({ accessToken });
      } catch (error) {
        return res.sendStatus(403);
      }
}