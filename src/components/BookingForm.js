import React, { useState, useEffect } from 'react';
import { TextField, MenuItem, Button, CircularProgress, Box, Paper, Container } from '@mui/material';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { add, startOfDay } from 'date-fns';
import { services } from '../serviceData';
import { bookAppointment } from '../services/appointmentService';

const BookingForm = ({ userDetails, handleOpenSnackbar, onBookingSuccess }) => {
    const defaultAppointmentDate = add(startOfDay(new Date()), { days: 1, hours: 10 });

    const [name, setName] = useState(userDetails.name || userDetails.username);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [service, setService] = useState('');
    const [appointmentDate, setAppointmentDate] = useState(defaultAppointmentDate);
    const [tripDetails, setTripDetails] = useState('');
    const [startLocation, setStartLocation] = useState('');
    const [errors, setErrors] = useState({
        name: '',
        phoneNumber: '',
        service: '',
        appointmentDate: '',
        tripDetails: '',
        startLocation: ''
    });
    const [isBooking, setIsBooking] = useState(false);

    useEffect(() => {
        setName(userDetails.name || userDetails.username);
    }, [userDetails]);

    const validateForm = () => {
        let tempErrors = { name: '', service: '', appointmentDate: '', phoneNumber: '', tripDetails: '', startLocation: '' };
        let isValid = true;

        if (!name) {
            tempErrors.name = 'Name is required.';
            isValid = false;
        }
        if (!phoneNumber) {
            tempErrors.phoneNumber = 'Phone number is required.';
            isValid = false;
        }
        if (!service) {
            tempErrors.service = 'Please select a service.';
            isValid = false;
        }
        if (!appointmentDate || new Date(appointmentDate) < new Date()) {
            tempErrors.appointmentDate = 'Please select a future date and time.';
            isValid = false;
        }
        if (!tripDetails) {
            tempErrors.tripDetails = 'Trip details are required.';
            isValid = false;
        }
        if (!startLocation) {
            tempErrors.startLocation = 'Start location is required.';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsBooking(true);

        const appointmentDetails = {
            name,
            phoneNumber,
            service,
            appointmentDate,
            tripDetails,
            startLocation,
            email: userDetails.email,
        };

        try {
            await bookAppointment(appointmentDetails);
            handleOpenSnackbar('Ride booked successfully!');
            onBookingSuccess();

            setService('');
            setAppointmentDate(defaultAppointmentDate);
            setPhoneNumber('');
            setTripDetails('');
            setStartLocation('');
        } catch (error) {
            console.error('Booking failed:', error);
            handleOpenSnackbar('Failed to book the Ride. Please try again.');
        } finally {
            setIsBooking(false);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                minHeight: '100vh',
                backgroundColor: 'white', // Set background color to white
            }}
        >
            {/* Left Side: Image */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img src="./image1.gif" alt="Ride" style={{ width: '400px', height: '400px' }} />
            </Box>
            
            {/* Right Side: Form */}
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
                    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                        <TextField
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            error={!!errors.name}
                            helperText={errors.name}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            label="Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            error={!!errors.phoneNumber}
                            helperText={errors.phoneNumber}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            type="tel"
                        />
                        <TextField
                            label="Trip Details"
                            value={tripDetails}
                            onChange={(e) => setTripDetails(e.target.value)}
                            error={!!errors.tripDetails}
                            helperText={errors.tripDetails}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            label="Start Location"
                            value={startLocation}
                            onChange={(e) => setStartLocation(e.target.value)}
                            error={!!errors.startLocation}
                            helperText={errors.startLocation}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            select
                            label="Service"
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            error={!!errors.service}
                            helperText={errors.service}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        >
                            {services.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateTimePicker
                                label="Appointment Date"
                                value={appointmentDate}
                                onChange={(newValue) => setAppointmentDate(newValue)}
                                slotProps={{
                                    textField: {
                                        variant: 'outlined',
                                        fullWidth: true,
                                        margin: 'normal',
                                        error: !!errors.appointmentDate,
                                        helperText: errors.appointmentDate,
                                    }
                                }}
                            />
                        </LocalizationProvider>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            style={{ marginTop: 20, position: 'relative' }}
                            disabled={isBooking}
                        >
                            Book Ride
                            {isBooking && (
                                <CircularProgress
                                    size={24}
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        marginTop: -12,
                                        marginLeft: -12,
                                    }}
                                />
                            )}
                        </Button>
                    </form>
                </Paper>
            </Container>
        </Box>
    );
};

export default BookingForm;
