// src/components/ContactPage.jsx
import React from 'react';
import './Contact.scss';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

// 💡 Original-style icons (matching your skills page)
import { FaUserAlt, FaEnvelope, FaCommentDots } from 'react-icons/fa';

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        'service_492czu6',
        'template_vcdaw0n',
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        'HWWsQyRjJGTbzDlYR'
      );
      toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      console.error('Email sending failed:', error);
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
            <label htmlFor="name">
              <FaUserAlt className="input-icon" /> Name
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <span className="error">{errors.name.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <FaEnvelope className="input-icon" /> Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <span className="error">{errors.email.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">
              <FaCommentDots className="input-icon" /> Message
            </label>
            <textarea
              id="message"
              {...register('message', {
                required: 'Message is required',
                minLength: {
                  value: 5,
                  message: 'Please enter a more detailed message',
                },
              })}
              rows={4}
              style={{ minHeight: '100px' }}
            />
            {errors.message && (
              <span className="error">{errors.message.message}</span>
            )}
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
