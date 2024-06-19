import { gql } from 'graphql-tag';
import {  AddEmpolyee } from '../Connection/Connection';
import { Request, Response } from 'express';

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






