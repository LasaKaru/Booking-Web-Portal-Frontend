import React, { useState, useEffect } from 'react'; // Importing necessary modules from React
import { services } from '../serviceData'; // Importing service data
import { TextField, MenuItem, Button, CircularProgress } from '@mui/material'; // Importing components from Material-UI
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers'; // Importing date-time picker components from Material-UI
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'; // Importing date adapter from Material-UI
import { add, startOfDay } from 'date-fns'; // Importing date-fns functions
import { bookAppointment } from '../services/appointmentService'; // Importing function to book appointment

// Background image import
import backgroundImage1 from './image1.gif';

// BookingForm component definition
const BookingForm = ({ userDetails, handleOpenSnackbar, onBookingSuccess }) => {
    const defaultAppointmentDate = add(startOfDay(new Date()), { days: 1, hours: 10 }); // Setting default appointment date

    const [name, setName] = useState(userDetails.name || userDetails.username); // State for name input field
    const [phoneNumber, setPhoneNumber] = useState(''); // State for phone number input field
    const [service, setService] = useState(''); // State for service selection
    const [appointmentDate, setAppointmentDate] = useState(defaultAppointmentDate); // State for appointment date
    const [errors, setErrors] = useState({ // State for form validation errors
        name: '',
        phoneNumber: '',
        service: '',
        appointmentDate: '',
    });
    const [isBooking, setIsBooking] = useState(false); // State to track booking process loading state

    // Effect to update state when userDetails changes
    useEffect(() => {
        setName(userDetails.name || userDetails.username); // Update name state when userDetails changes
    }, [userDetails]);

    // Function to validate form fields
    const validateForm = () => {
        let tempErrors = { name: '', service: '', appointmentDate: '', phoneNumber: '' }; // Temporary object to store validation errors
        let isValid = true; // Flag to track overall form validation status

        if (!name) { // Validate name field
            tempErrors.name = 'Name is required.'; // Set error message if name field is empty
            isValid = false; // Set flag to false if name field is empty
        }

        if (!service) { // Validate service field
            tempErrors.service = 'Please select a service.'; // Set error message if service field is empty
            isValid = false; // Set flag to false if service field is empty
        }

        if (!appointmentDate || new Date(appointmentDate) < new Date()) { // Validate appointment date
            tempErrors.appointmentDate = 'Please select a future date and time.'; // Set error message if appointment date is not in the future
            isValid = false; // Set flag to false if appointment date is not in the future
        }

        // Basic validation for phone number
        const phoneRegex = /^[0-9]{10}$/; // Regular expression for 10-digit phone number
        if (!phoneNumber) { // Validate phone number field
            tempErrors.phoneNumber = 'Phone number is required.'; // Set error message if phone number field is empty
            isValid = false; // Set flag to false if phone number field is empty
        } else if (!phoneRegex.test(phoneNumber)) { // Validate phone number format
            tempErrors.phoneNumber = 'Phone number must be 10 digits.'; // Set error message if phone number format is incorrect
            isValid = false; // Set flag to false if phone number format is incorrect
        }

        setErrors(tempErrors); // Update errors state with validation errors
        return isValid; // Return overall form validation status
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        if (!validateForm()) return; // Skip form submission if form validation fails

        setIsBooking(true); // Start loading indicator for booking process

        const appointmentDetails = { // Create object with appointment details
            name,
            phoneNumber,
            service,
            appointmentDate,
            email: userDetails.email, // Include user email in appointment details
        };

        try {
            await bookAppointment(appointmentDetails); // Call function to book appointment
            handleOpenSnackbar('Ride booked successfully!'); // Display success message
            onBookingSuccess(); // Trigger onBookingSuccess callback

            // Reset form fields
            setService('');
            setAppointmentDate(defaultAppointmentDate);
            setPhoneNumber('');
        } catch (error) {
            console.error('Booking failed:', error); // Log error if booking fails
            handleOpenSnackbar('Failed to book the Ride. Please try again.'); // Display error message
        } finally {
            setIsBooking(false); // Stop loading indicator regardless of the outcome
        }
    };

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, padding: '20px' }}>
                <img src={backgroundImage1} alt="Background" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1, padding: '20px' }}>
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
                        type="tel" // Suggests to browsers that this input should be treated as a telephone number
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
                    <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 20, position: 'relative' }} disabled={isBooking}>
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
            </div>
        </div>
    );
};

export default BookingForm; // Exporting BookingForm component
