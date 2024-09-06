'use client'

import React from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Typography, Link, Box, Container, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function Login() {
  return (
    <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#ffffff', // White background for form container
            padding: 3,
            borderRadius: 2, // Rounded corners
            boxShadow: 3, // Add shadow for a card-like effect
            minHeight: '100vh',
          }}
        >
    
    <Container  maxWidth="xs" sx={{
            mt: 8, // Top margin for the Container
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#ffffff', // White background for form container
            padding: 3,
            borderRadius: 2, // Rounded corners
            boxShadow: 3, // Card-like shadow
            width: '100%', // Ensure it takes full width of its parent
          }}>
        <CssBaseline />
        
          <img src="/path/to/university-logo.png" alt="University Logo" style={{ marginBottom: '16px' }} />
          <Typography component="h1" variant="h5">
            University of Cebu
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="idNumber"
              label="ID Number"
              name="idNumber"
              autoComplete="idNumber"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Stay signed in"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Link href="/register" variant="body2">
                Don’t have an account?
              </Link>
              <Link href="#" variant="body2">
                Forgot Password?
              </Link>
            </Box>
            <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 5 }}>
              © EVENTSHPERE
            </Typography>
          </Box>
        
      </Container>
      </Box>
  );
}

export default Login;
