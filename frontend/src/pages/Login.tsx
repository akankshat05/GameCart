import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../constants';
import { toast } from 'react-toastify';

function Login() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formData)
    try {
      const response = await axios.post(`${BASE_URL}/login`, formData);
      console.log(response)
      // localStorage.setItem('token', response.data.token);
      // navigate('/');
    } catch (error) {
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Box width="60%">
          <Typography variant="h4" gutterBottom align="center">Login</Typography>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: "black" }}>
            <TextField 
              type="email" 
              name="email" 
              label="Email" 
              variant="outlined" 
              InputProps={{ style: { color: 'black' } }}
              onChange={handleChange} 
            />
            <TextField 
              type="password" 
              name="password" 
              label="Password" 
              variant="outlined" 
              InputProps={{ style: { color: 'black' } }}
              onChange={handleChange} 
            />
            <Button type="submit" variant="contained" color="primary">Login</Button>
          </form>
          <Typography variant="body1" align="center">
            <Link to="/register">Don't have an account? Register</Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Login;
