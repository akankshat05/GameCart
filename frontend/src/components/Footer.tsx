import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        bottom: 0,
        left: 0,
        width: '100%',
        bgcolor: 'primary.main',
        color: 'white',
        py: 2,
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} GameCart. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
