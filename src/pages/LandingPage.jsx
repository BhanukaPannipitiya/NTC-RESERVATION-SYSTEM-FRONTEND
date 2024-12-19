import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { Box, Container, Paper } from '@mui/material';
import ActionAreaCard from '../components/ActionAreaCard';

const LandingPage = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="lg" style={{ position: 'relative', padding: '20px 0' }}>
        {/* Responsive container for layout */}
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            position: 'relative',
          }}
        >
          <ActionAreaCard />
          <Paper
            elevation={3}
            sx={{
              position: 'absolute',
              top: { xs: '200px', sm: '250px', md: '270px' }, // Adjusts for different screen sizes
              left: { xs: '10px', sm: '25px' },
              right: { xs: '10px', sm: '25px' },
              padding: '20px',
              borderRadius: '20px',
              height: { xs: '80px', sm: '100px' }, // Adjust height for smaller screens
              zIndex: 50,
              boxShadow: 3,
              backgroundColor: 'white',
            }}
          >
            {/* Content inside Paper */}
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default LandingPage;
