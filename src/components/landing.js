import React from 'react';
import { Typography, Box } from '@mui/material';

const Landing = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full viewport height
        backgroundColor: '#ffffff', // Light background color '#f5f5f5'
        padding: '0 20px', // Small padding to ensure text doesn't touch edges
        paddingTop: '700vh',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: 'bold',
          color: '#000000',
          fontSize: 'clamp(2rem, 8vw, 6rem)', // Responsive font size
          textAlign: 'center',
        }}
      >
        Building a Stronger Community Through Technology Since 2015
      </Typography>
    </Box>
  );
};

export default Landing;
