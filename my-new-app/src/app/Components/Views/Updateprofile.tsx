import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { Employee } from '../../helper/Employee-model';
import { useMutation } from '@apollo/client';
import { Update_mutation } from '../Grapql/Update_mutation';

interface Props {
    onCancel: () => void,
    profile: Employee,
    refetch:()=>void
}

const UpdateProfile = ({ onCancel, profile,refetch }: Props) => {
    const [form] = Form.useForm();
     
    // Set initial form values using the profile data
    //form.setFieldsValue(profile);
   const[updateprofile]=useMutation(Update_mutation);
    const handleSubmit = async (values: any) => {
        try {
           const{Name,Email,Birth_Date,Contact}=values
         const  userid=localStorage.getItem("userId")
            
              const{data}=await updateprofile({
                variables:{Name,Email,Birth_Date,Contact,userid}
              })

           
                message.success("Profile updated successfully");
                
                onCancel();
                refetch()
                
        } catch (error) {
            console.error("Error updating profile:", error);
            message.error("Failed to update profile. Please try again later.");
        }
    }

    return (
        <div>
            <Form
                form={form}
                onFinish={handleSubmit}
                initialValues={profile}
            >
                <Form.Item
                    label="Name"
                    name="Name"
                    rules={[{ required: true, message: 'Please enter your name' }]}
                >
                    <Input />
                </Form.Item>
               
       
               
                <Form.Item
                    label="Email"
                    name="Email"
                    rules={[{ required: true, message: 'Please enter your email' }]}
                >
                    <Input />
                </Form.Item>
              
                <Form.Item
                    label="Birth Date"
                    name="Birth_Date"
                    rules={[{ required: true, message: 'Please enter your birth date' }]}
                >
                    <Input />
                </Form.Item>
          
                <Form.Item
                    label="Contact"
                    name="Contact"
                    rules={[{ required: true, message: 'Please enter your contact' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Update</Button>
                    <Button onClick={onCancel} style={{ marginLeft: 8 }}>Cancel</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default UpdateProfile;
