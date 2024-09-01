import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BASE_URL } from '../constants';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: any) => {
    setError(''); // Reset error on input change
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com)$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length > 5;
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();

    // Field validation
    if (!formData.username || !formData.email || !formData.password) {
      setError('All fields are required.');
      return;
    }

    // Email validation
    if (!validateEmail(formData.email)) {
      setError('Invalid email format.');
      return;
    }

    // Password validation
    if (!validatePassword(formData.password)) {
      setError('Password must be greater than 5 characters.');
      return;
    }

    setError(''); // Clear any existing errors
    console.log(formData)
    try {
      const response = await axios.post(`${BASE_URL}/register`, formData);
      console.log(response); // Handle registration success
      toast.success('You are registered successfully!');
    } catch (error) {
      console.error('Registration failed', error);
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Box width="60%">
        <Typography variant="h4" gutterBottom align="center">Register</Typography>
        <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <TextField
            type="text"
            name="username"
            label="Username"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            type="email"
            name="email"
            label="Email"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            onChange={handleChange}
          />
          <Typography color="error" variant="body2" style={{ marginBottom: "10px" }}>
            {error ? error : null}
          </Typography>
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </form>
        <Typography variant="body1" align="center">
          <Link to="/login">Already have an account? Login</Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Register;
