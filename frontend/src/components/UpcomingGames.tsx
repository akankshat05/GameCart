import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const upcomingGames = [
  {
    id: 1,
    name: 'Stellar Blade',
    price: '$59.99',
    imageUrl: 'https://gmedia.playstation.com/is/image/SIEPDC/stellar-blade-keyart-no-logo-01-en-7jun24?$600px--t$',
  },
  {
    id: 2,
    name: 'Rise of the Ronin',
    price: '$49.99',
    imageUrl: 'https://gmedia.playstation.com/is/image/SIEPDC/rise-of-the-ronin-hero-banner-mobile-01-en-30mar23?$600px--t$',
  },
  {
    id: 3,
    name: 'The Last of Us',
    price: '$39.99',
    imageUrl: 'https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-the-last-of-us-part-1-image-block-en-20jun22?$600px--t$',
  },
  {
    id: 4,
    name: 'Need for Speed Most Wanted',
    price: '$29.99',
    imageUrl: 'https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-gt7-hub-image-block-01-en-10mar22?$600px--t$',
  },
  {
    id: 5,
    name: 'Ratchet and Clank',
    price: '$19.99',
    imageUrl: 'https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-ratchet-and-clank-rift-apart-image-block-en-26aug22?$600px--t$',
  },
  {
    id: 6,
    name: 'Astro Bot',
    price: '$9.99',
    imageUrl: 'https://gmedia.playstation.com/is/image/SIEPDC/Astro-Bot-key-features-screenshot-15-en-24may24?$1600px$',
  },
];

function UpcomingGames() {
  return (
    <div style={{ padding: '20px' }}>
      <Grid container spacing={4}>
        {upcomingGames.map((game) => (
          <Grid item key={game.id} xs={12} sm={6} md={4}>
            <Card style={{borderRadius: "30px"}}>
              <CardMedia
                component="img"
                height="280"
                image={game.imageUrl}
                alt={game.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {game.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {game.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default UpcomingGames;
