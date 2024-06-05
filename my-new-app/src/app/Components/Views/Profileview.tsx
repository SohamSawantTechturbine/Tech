import React, { useEffect, useState } from 'react';
import { Spin, Card, Avatar, Button, Modal } from 'antd'; // Import required components from antd
import { EditOutlined } from '@ant-design/icons'; // Import the EditOutlined icon

import { Employee } from '../../helper/Employee-model';
import UpdateProfile from './Updateprofile';

const Profileview = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Employee>();
  const [editVisible, setEditVisible] = useState(false); // State to control the visibility of the modal
  const [refetch,setrefetch] = useState(1); // State to control the visibility of the modal

  const fetchProfile = async () => {
    const userid = localStorage.getItem("userId");
    try {
      const response = await fetch("http://localhost:5000/fetchprofile", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userid })
      });

      if (response.ok) {
        const data = await response.json();
        setProfile(data);
        setLoading(false);
      } else {
        alert("No user present");
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
      alert("Error fetching profile. Please try again later.");
    }
  }

  useEffect(() => {
    fetchProfile();
  }, [refetch]);

  // Function to handle opening the modal
  const handleEditProfile = () => {
    setEditVisible(true);
  }

  // Function to handle closing the modal
  const handleCancel = () => {
    setEditVisible(false);
  }
  const fetchdat = () => {
   setrefetch(prev=> prev+1);
  }

  return (
    <div className="container mx-auto mt-8">
      {loading ? (
        <div className="flex justify-center items-center">
          <Spin size="large" />
        </div>
      ) : (
        <>
          <Card title="Profile" className="w-1/2 h-3/4  mx-auto border shadow-md shadow-gray-500 border-black justify-center text-red-500">
            <div className="flex items-center justify-center mb-4 ">
              <Avatar size={64} src={`http://localhost:5000${profile?.File}`} alt="Profile Picture" />
            </div>
            <div className="text-center ">
              <h2 className="text-lg text-black font-semibold">{profile?.Name.toUpperCase()}</h2>
              <div className="mt-2">
                <p><strong className='text-black'>Email:</strong> {profile?.Email}</p>
                <p><strong className='text-black'>Department:</strong> {profile?.Department}</p>
                <p><strong className='text-black'>Join Date:</strong> {profile?.Join_Date}</p>
                <p><strong className='text-black'>Contact:</strong> {profile?.Contact}</p>
              </div>
              <Button icon={<EditOutlined />} onClick={handleEditProfile} className="mt-4">Edit Profile</Button>
            </div>
          </Card>
          {/* Modal for Update Profile */}
          <Modal
            title="Edit Profile"
            visible={editVisible}
            onCancel={handleCancel}
            footer={null}
            destroyOnClose={true}
            className=' border-black shadow-slate-400'
          >
            {profile &&<UpdateProfile onCancel={handleCancel} profile ={profile} refetch={fetchdat}/>}
          </Modal>
        </>
      )}
    </div>
  );
}

export default Profileview;
