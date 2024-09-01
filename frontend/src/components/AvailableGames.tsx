import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import theme from '../theme';

const availableGames = [
  {
    id: 1,
    name: 'Call of Duty : Black Ops 6',
    price: '$59.99',
    imageUrl: 'https://gmedia.playstation.com/is/image/SIEPDC/cod-bo6-keyart-no-logo-01-en-7jun24?$600px--t$',
  },
  {
    id: 2,
    name: 'HellDivers 2',
    price: '$49.99',
    imageUrl: 'https://gmedia.playstation.com/is/image/SIEPDC/helldivers-2-video-thumbnail-01-en-06dec23?$1600px$',
  },
  {
    id: 3,
    name: 'EA Sports',
    price: '$39.99',
    imageUrl: 'https://gmedia.playstation.com/is/image/SIEPDC/FC24-screenshot-10-en-06jul23?$1600px$',
  },
  {
    id: 4,
    name: 'God of War Ragnarok',
    price: '$29.99',
    imageUrl: 'https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-raganok-clean-keyart-01-en-10mar22?$600px--t$',
  },
  {
    id: 5,
    name: 'Marvel Spiderman 2',
    price: '$19.99',
    imageUrl: 'https://gmedia.playstation.com/is/image/SIEPDC/spiderman-miles-morales-screenshot-04-disclaimer-en-01oct20?$1600px--t$',
  },
  {
    id: 6,
    name: 'Kena Bridge of Spirits',
    price: '$9.99',
    imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202102/2307/kQzDCY5RCrSXCeeFjPGUzkGI.png?w=1200',
  },
];

function AvailableGames() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleBuy = (id: number) => {
    navigate(`/game/${id}`)
  }

  return (
    <>
      <div style={{ padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <Grid container spacing={4}>
          {availableGames.map((game) => (
            <Grid item key={game.id} xs={12} sm={6} md={4}>
              <Card style={{ borderRadius: '30px', backgroundColor: theme.palette.background.paper }}>
                <CardMedia
                  component="img"
                  height="280"
                  image={game.imageUrl}
                  alt={game.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div" color="text.primary">
                    {game.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {game.price}
                  </Typography>
                  <Button sx={{ marginTop: '20px' }} variant="contained" color="secondary" onClick={() => handleBuy(game.id)}>
                    Buy Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default AvailableGames;
