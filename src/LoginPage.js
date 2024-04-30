import React, { useState, useEffect } from 'react';
import { Button, Typography, Box, Paper, Container } from '@mui/material';
import backgroundImage1 from './image1.jpg'; // Ensure these paths are correct
import backgroundImage2 from './image2.jpg';
import backgroundImage3 from './image3.jpg';

// Component for the login page
const LoginPage = () => {
    const images = [backgroundImage1, backgroundImage2, backgroundImage3]; // Array of image paths
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track the current image index

    // Function to switch to the next image
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Effect to change images every 5 seconds
    useEffect(() => {
        const intervalId = setInterval(nextImage, 5000);
        return () => clearInterval(intervalId); // Cleanup function to clear the interval
    }, []);

    const redirectToSupportPage = () => {
        window.location.href = "./support"; // Redirect to the support page
    };

    return (
        <Box
            sx={{
                display: 'flex',
                minHeight: '100vh',
                backgroundColor: 'white', // Set background color to white
            }}
        >
            {/* Left Side: Images */}
            <Box
                sx={{
                    flex: 1, // Take up remaining space
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} style={{ width: '500px', height: '500px' }} />
            </Box>
            
            {/* Right Side: Login Content */}
            <Container maxWidth="xs" sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Paper
                    elevation={3}
                    sx={{
                        padding: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    }}
                >
                    <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center' }}>
                        Welcome to PickNRide
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom sx={{ mb: 2, textAlign: 'center' }}>
                        Your Go-To Transport Solution
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                        onClick={() => window.location.href = "/auth/login"}
                    >
                        Login
                    </Button>
                </Paper>
            </Container>
            {/* Footer */}
            <Box
                sx={{
                    width: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    textAlign: 'center',
                    color: 'white',
                    p: 2,
                    position: 'absolute',
                    bottom: 0,
                }}
            >
                <Button onClick={redirectToSupportPage} style={{ color: 'white' }}>
                    Visit our Support Page
                </Button>
            </Box>
        </Box>
    );
};

export default LoginPage;
