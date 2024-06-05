import {Request, Response } from "express";
import { AddEmpolyee } from "../Connection/Connection";
import { message } from "antd";
import { stringify } from "querystring";

const addemploye=async(req:Request,res:Response)=>{
const { name, password, email, department, joinDate,birthDate,Contact } = req.body;
let filePath=null;
const ContactNumber=Number(Contact)
const file = req.file;
try {
  // Check if the email already exists in the database
  const existingEmployee = await AddEmpolyee.findOne({ where: { Email:email } });
  if (existingEmployee) {
    return res.status(400).send({ message: 'Email already exists' });
  }
  filePath = `/uploads/${file.originalname}`;
  // If email does not exist, create a new employee record
  const newEmployee = await AddEmpolyee.create({
    Name:name,
    Password: password,
    Email:   email,
    Department: department,
    Join_Date:joinDate,
    Birth_Date: birthDate,
    File:  req.file ? filePath:null,// Store file path if available
    Contact:ContactNumber
  });

  // Respond with success message
  return res.status(201).send({ message: 'Employee added successfully', employee: newEmployee });
} catch (error) {
  console.error('Error adding employee:', error);
  return res.status(500).send({ error: 'Internal server error' });
}
};
export default addemploye