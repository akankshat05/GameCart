import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button, Card, CardMedia, IconButton, TextField, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import axios from 'axios';
import { BASE_URL } from '../constants';
function GameDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const game = {
    id: id,
    title: 'Dummy Game Title',
    description: 'This is a detailed description of the dummy game. It is packed with exciting features and gameplay.',
    price: '$59.99',
    stock: true, // Set to false to simulate out of stock
    images: [
      'https://gmedia.playstation.com/is/image/SIEPDC/ea-sports-fc-25-screenshot-01-en-9july24?$1600px$', // Replace with actual image URLs
      'https://via.placeholder.com/600x300',
    ],
  };
  // useEffect(() => {
  //   const fetchGame = async () => {
  //     try {
  //       const response = await axios.get(`${BASE_URL}/games/${id}`);
  //       console.log(response)
  //       setGame(response.data);
  //       setLoading(false);
  //     } catch (err: any) {
  //       setError(err.message || 'An error occurred');
  //       setLoading(false);
  //     }
  //   };

  //   fetchGame();
  // }, [id]);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;
  // if (!game) return <p>No game found</p>;  
  const handleQuantityChange = (change: any) => {
    setQuantity((prev) => Math.max(prev + change, 1));
  };

  return (
    <Container sx={{ marginTop: 4, height: '100vh', color: 'black' }}>
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
        {/* Carousel Section */}
        <Box flex={1} position="relative">
        <Carousel
            NextArrow={<IconButton sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' } }}><ChevronRightIcon /></IconButton>}
            PrevArrow={<IconButton sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' } }}><ChevronLeftIcon /></IconButton>}
          >
            {game.images.map((image, index) => (
              <Card key={index} sx={{ boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={image}
                  alt={`Game image ${index + 1}`}
                />
              </Card>
            ))}
          </Carousel>
        </Box>


        {/* Game Information Section */}
        <Box flex={1}>
          <Typography variant="h4" gutterBottom>
            {game.title}
          </Typography>
          <Typography variant="h5" color="primary" gutterBottom>
            {game.price}
          </Typography>
          <Typography variant="body1" gutterBottom color={game.stock ? 'success.main' : 'error.main'}>
            {game.stock ? 'Available' : 'Out of Stock'}
          </Typography>

          {/* Payment Options */}
          <Box display="flex" alignItems="center" gap={1} my={2}>
            <PaymentIcon color="secondary" />
            <MonetizationOnIcon color="secondary" />
            <Typography variant="body2">
              Credit Card/ Debit Card/ Net Banking/ COD Available
            </Typography>
          </Box>

          {/* Quantity Selector */}
          <Box display="flex" alignItems="center" gap={1} my={2}>
            <Typography variant="body1">Quantity:</Typography>
            <Box display="flex" alignItems="center">
              <IconButton
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
              >
                <RemoveIcon />
              </IconButton>

              <Typography variant="body1" sx={{fontWeight: "bold", padding: "0px 12px"}}>{quantity}</Typography>
              <IconButton onClick={() => handleQuantityChange(1)}>
                <AddIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Add to Cart Button */}
          <Button
            variant="contained"
            color="primary"
            startIcon={<ShoppingCartIcon />}
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Add to Cart
          </Button>

          {/* Game Description */}
          <Typography variant="body1" sx={{ marginTop: 4 }}>
            {game.description}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default GameDetails;
