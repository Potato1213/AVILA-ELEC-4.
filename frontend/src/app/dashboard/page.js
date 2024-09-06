'use client'

import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Box, List, ListItem, ListItemText, Divider, Avatar, Link } from '@mui/material';
import { lightBlue } from '@mui/material/colors';

function Dashboard() {
  // Sample data for events and announcements
  const upcomingEvents = ['10TH UC CCS CONGRESS 2024', 'Capstone exhibits', 'Intramurals 2024'];
  const recentlyFinished = ['Mental Health Awareness Month', 'General Assembly'];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Sidebar */}
        <Grid item xs={12} sm={2}>
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <img src="/img/download (1).png" alt="University of Cebu Lapu-lapu Mandaues" width="100%" />
          </Box>
          <Box sx={{ mt: 3,  }}>
            <Link href="#" variant="button" sx={{ fontSize: 18, }} gutterBottom underline="none" >
              Dashboard
            </Link>
            <Divider />
            <Link href="#" variant="button" sx={{ fontSize: 18 }} gutterBottom underline="none" >
              Calendar    
            </Link>
          </Box>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} sm={7} >
          <Typography variant="h5" gutterBottom color='blue'>
            Dashboard
          </Typography>
          <Divider />
          <Grid container spacing={2} marginTop={2} sx={{ backgroundColor: '' }}>
            {/* Example Cards */}
            {['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5'].map((event, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ border: '0.5px solid blue' }}> 
                  <CardMedia
                    component="img"
                    height="140"
                    image={`/path/to/event-image-${index + 1}.png`}
                    alt={`Event ${index + 1}`}
                  />
                  <CardContent>
                    <Typography variant="body1" component="div">
                      {event}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Right Sidebar */}
        <Grid item xs={12} sm={3}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" color='blue'>Upcoming Events</Typography>
            <List>
              {upcomingEvents.map((event, index) => (
                <ListItem key={index}>
                  <ListItemText primary={event} />
                </ListItem> 
              ))}
            </List>
            <Divider />
          </Box>
          
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" color='blue'>Recently Finished</Typography>
            <List>
              {recentlyFinished.map((event, index) => (
                <ListItem key={index}>
                  <ListItemText primary={event} />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>S</Avatar>
            <Typography variant="body1">Student BSIT</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
