import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import UpcomingGames from '../components/UpcomingGames';
import { Typography } from '@mui/material';
import Footer from '../components/Footer';
import AvailableGames from '../components/AvailableGames';
import "../App.css"
const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/games')
      .then(response => setGames(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='app-container'>
      <Typography sx={{padding: "50px 0px 30px 12px", color: "white"}}variant="h4" component="h2" gutterBottom>
        Available Games
      </Typography>
      <AvailableGames/>
      <Typography sx={{padding: "50px 0px 30px 12px", color: "white"}}variant="h4" component="h2" gutterBottom>
        Upcoming Games
      </Typography>
      <UpcomingGames/>
    </div>
  );
}

export default Home;
