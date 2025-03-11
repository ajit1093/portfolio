// src/components/ContactPage.jsx
import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form'; // Import useForm hook
import './Contact.scss';
import { toast } from 'react-toastify';
const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Send a POST request using axios
      const response = await axios.post(
        'https://679755b9c2c861de0c6c48dc.mockapi.io/curd/portfolio',
        data
      );

      console.log('Form Data Submitted Successfully:', response.data);

      // Reset the form after successful submission
      reset();

      toast.success('Message sent successfully!');
    } catch (error) {
      console.error('There was a problem with the axios request:', error);
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-card">
        <h1>Contact Us</h1>
        <p>Have questions or want to get in touch? Send us a message!</p>
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <span className="error">{errors.name.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <span className="error">{errors.email.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              {...register('message', { required: true,
                minLength:{value:5,message:"Please Enter appropriate Message"}
               })}
            />
            {errors.message && <span className="error">{errors.message.message}</span>}
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;