import React from 'react';
import { Button, Typography, Box, Paper, Container } from '@mui/material';
import backgroundImage from './login-background.webp'; // Ensure this path is correct

// Component for the login page
const LoginPage = () => {
    const redirectToSupportPage = () => {
        window.location.href = "/support"; // Redirect to the support page
    };

    return (
        <Box
            sx={{
                minHeight: '100vh', // Minimum height to cover the viewport
                backgroundImage: `url(${backgroundImage})`, // Background image
                backgroundRepeat: 'no-repeat', // Don't repeat the background image
                backgroundSize: 'cover', // Cover the area without spaces
                backgroundPosition: 'center', // Center the background image
                display: 'flex', // Display as a flex container
                flexDirection: 'column', // Arrange content in a column
                justifyContent: 'center', // Center content vertically
                alignItems: 'center', // Center content horizontally
            }}
        >
            <Container maxWidth="xs">
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
            <Box sx={{ p: 2, backgroundColor: 'rgba(0, 0, 0, 0.5)', textAlign: 'center', color: 'white' }}>
                <Button onClick={redirectToSupportPage} style={{ color: 'white' }}>
                    Visit our Support Page
                </Button>
            </Box>
        </Box>
    );
};

export default LoginPage;
