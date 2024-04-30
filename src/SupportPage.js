// SupportPage.js

import React from 'react';
import { Typography, Box, Container, Paper } from '@mui/material';

const SupportPage = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f0f0f0', // Light gray background
            }}
        >
            <Container maxWidth="md">
                <Paper elevation={3} sx={{ padding: 4, margin: 2 }}>
                    <Typography variant="h4" gutterBottom>
                        Support Page
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Welcome to our support page. If you need help, please contact us using the information below.
                    </Typography>
                    <Typography variant="h6">
                        Email Support
                    </Typography>
                    <Typography variant="body1" paragraph>
                        support@picknride.com
                    </Typography>
                    <Typography variant="h6">
                        Phone Support
                    </Typography>
                    <Typography variant="body1" paragraph>
                        +123 456 7890
                    </Typography>
                    <Typography variant="h6">
                        FAQs
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Visit our FAQ section to find answers to commonly asked questions.
                    </Typography>
                </Paper>
            </Container>
        </Box>
    );
};

export default SupportPage;