import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { CardHeader } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <>
      <CardMedia
        component="img"
        height="100%"
        image="https://images.unsplash.com/photo-1624289714790-abf07fdea970?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        sx={{ width: '90vw', height: '50vh', objectFit: 'cover', borderRadius: '30px' }}

      />
      <CardContent sx={{ position: 'absolute', top: '40%', left: '47%', transform: 'translate(-50%, -50%)' }}>
        <div>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'white'
            }}
          >
            Find Next Place To <span style={{ color: '#66B6C3' }}>Visit</span>
          </Typography>

          <Typography
            variant="h7"
            gutterBottom
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'white'
            }}
          >
            Discover comfortable rides for anywhere
          </Typography>

        </div>

      </CardContent>

    </>



  );
}