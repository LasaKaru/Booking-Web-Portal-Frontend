import axios from 'axios'; // Importing axios for making HTTP requests

// Replace `APPOINTMENT_SERVICE_URL` with the actual URL of your appointments service
const APPOINTMENT_SERVICE_URL = window.configs.apiUrl; // Define appointment service URL

// Function to book appointment
export const bookAppointment = async (appointmentDetails) => {
  try {
    const response = await fetch(`${APPOINTMENT_SERVICE_URL}/create-appointment`, { // Send POST request to create appointment
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify content type as JSON
      },
      body: JSON.stringify(appointmentDetails), // Convert appointment details to JSON string
    });

    if (!response.ok) { // Check if response status is not ok
      const message = `An error has occurred: ${response.status}`; // Create error message
      throw new Error(message); // Throw error
    }

    const result = await response.json(); // Parse response JSON
    return result; // Return result
  } catch (error) {
    throw error; // Throw error if any occurs
  }
};

// Function to get upcoming appointments
export const getUpcomingAppointments = async (email) => {
  try {
    const response = await axios.get(`${APPOINTMENT_SERVICE_URL}/appointments`, { // Send GET request to fetch upcoming appointments
      params: {
        email: email, // Include email in query parameters
        upcoming: 'true', // Assuming backend supports filtering by upcoming appointments
      }
    });
    return response.data; // Return data from response
  } catch (error) {
    console.error('Error fetching upcoming Rides:', error); // Log error if fetching fails
    throw error; // Rethrow error
  }
};
