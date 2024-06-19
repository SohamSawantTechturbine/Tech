import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

const UploadForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data:any) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('file', data.file[0]);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json();
        message.success(responseData.message);
        navigate('/home'); // Optionally redirect or perform other actions after successful upload
      } else {
        const errorData = await response.json();
        message.error(`Failed to upload: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error uploading data:', error);
      message.error('Error uploading data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            {...register('name', { required: true })}
          />
          {errors.name && <span>This field is required</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            {...register('email', { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            {...register('password', { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </div>
        <div>
          <label>File:</label>
          <input
            type="file"
            {...register('file', { required: true })}
          />
          {errors.file && <span>This field is required</span>}
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
