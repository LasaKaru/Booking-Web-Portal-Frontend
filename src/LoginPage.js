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
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Container maxWidth="xs" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
            <Box sx={{ p: 2, backgroundColor: 'rgba(0, 0, 0, 0.5)', textAlign: 'center', color: 'white' }}>
                <Button onClick={redirectToSupportPage} style={{ color: 'white' }}>
                    Visit our Support Page
                </Button>
            </Box>
        </Box>
    );
};

export default LoginPage;
