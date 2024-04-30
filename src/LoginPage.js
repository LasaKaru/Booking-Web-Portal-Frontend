// LoginPage.js
import React from 'react';
import { Button, Typography, Box, Paper, Container } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import backgroundImage from './login-background.webp'; // Ensure this path is correct

// Component for the login page
const LoginPage = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh', // Minimum height to cover the viewport
                backgroundImage: `url(${backgroundImage})`, // Background image
                backgroundRepeat: 'no-repeat', // Don't repeat the background image
                backgroundSize: 'cover', // Cover the area without spaces
                backgroundPosition: 'center', // Center the background image
                display: 'flex', // Display as a flex container
                justifyContent: 'center', // Center content horizontally
                alignItems: 'center', // Center content vertically
            }}
        >
            <Container maxWidth="xs"> {/* Container with maximum width */}
                <Paper
                    elevation={3} // Paper elevation
                    sx={{
                        padding: 4, // Padding
                        display: 'flex', // Display as a flex container
                        flexDirection: 'column', // Arrange children in a column
                        alignItems: 'center', // Center children horizontally
                        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly transparent white background
                    }}
                >
                    <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center' }}>
                        Welcome to PickNRide {/* Heading */}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom sx={{ mb: 2, textAlign: 'center' }}>
                    Your Go-To Transport Solution {/* Subtitle */}
                    </Typography>
                    <Button
                        variant="contained" // Contained button
                        color="primary" // Primary color
                        sx={{ mt: 2 }} // Margin top
                        onClick={() => window.location.href = "/auth/login"} // Redirect to login page
                    >
                        Login {/* Button text */}
                    </Button>
                </Paper>
            </Container>
            <Box component="footer" sx={{ mt: 3, py: 2, px: 3, backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%', textAlign: 'center' }}>
                <Link href="/Support" color="inherit" underline="none">
                    Visit our Support Page
                </Link>
            </Box>
        </Box>
    );
};

export default LoginPage; // Export the LoginPage component
