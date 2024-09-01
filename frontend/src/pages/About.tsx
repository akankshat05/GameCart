import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
function About() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        bgcolor: '#f5f5f5',
      }}
    >
      <Card
        sx={{
          maxWidth: 600,
          padding: 4,
          boxShadow: 3,
        }}
      >
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom>
            About GameCart
          </Typography>
          <Typography variant="body1" color="text.secondary">
            GameCart is a leading digital game distribution platform that provides gamers with a seamless
            and enjoyable experience to browse, purchase, and manage their game library. Our mission is to
            bring the best gaming content to players worldwide, with a focus on accessibility, quality, and
            user satisfaction.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default About;
