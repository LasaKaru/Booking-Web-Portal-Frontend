import React, { useEffect, useState } from 'react'; // Importing necessary modules from React
import { getUpcomingAppointments } from '../services/appointmentService'; // Importing function to fetch upcoming appointments
import { services } from '../serviceData'; // Importing service data
import { List, ListItem, ListItemText, Typography, Paper, Avatar, ListItemAvatar, Box } from '@mui/material'; // Importing components from Material-UI
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; // Importing calendar icon from Material-UI
import { format } from 'date-fns'; // Importing date-fns function for date formatting

// Function to convert service values to labels for display
const getServiceLabel = (serviceValue) => {
    const service = services.find(s => s.value === serviceValue); // Find service object matching the value
    return service ? service.label : serviceValue; // Return service label if found, otherwise return the value
};

// UpcomingAppointments component definition
const UpcomingAppointments = ({ email, triggerRefresh }) => {
    const [appointments, setAppointments] = useState([]); // State to store upcoming appointments

    // Function to fetch upcoming appointments
    const fetchAppointments = async () => {
        if (!email) return; // Skip fetching if email is not provided

        try {
            const upcomingAppointments = await getUpcomingAppointments(email); // Fetch upcoming appointments using email
            setAppointments(upcomingAppointments); // Update appointments state with fetched data
        } catch (error) {
            console.error('Failed to fetch Rides:', error); // Log error if fetching appointments fails
        }
    };

    useEffect(() => {
        fetchAppointments(); // Fetch appointments on component mount or when triggerRefresh changes
    }, [email, triggerRefresh]);

    // Render message when there are no upcoming appointments
    if (appointments.length === 0) {
        return (
            <Typography variant="subtitle1" style={{ marginTop: 20, textAlign: 'center' }}>
                No upcoming Rides / Booking. Let's try one!
            </Typography>
        );
    }

    // Render list of upcoming appointments
    return (
        <Paper elevation={3} style={{ marginTop: 20, padding: '20px' }}>
            <Typography variant="h6" style={{ marginBottom: 10 }}>
                Upcoming Rides / Bookings
            </Typography>
            <List>
                {appointments.map((appointment, index) => (
                    <ListItem key={index}>
                        <ListItemAvatar>
                            <Avatar>
                                <CalendarTodayIcon /> {/* Display calendar icon */}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={getServiceLabel(appointment.service)} // Display service label
                            secondary={`On ${format(new Date(appointment.appointmentDate), 'MMMM d, yyyy, h:mm a')} for ${appointment.name}`} // Display appointment details
                        />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default UpcomingAppointments; // Export UpcomingAppointments component

