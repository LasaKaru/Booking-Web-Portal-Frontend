import React from 'react'; // Importing React library
import { Navigate, Outlet } from 'react-router-dom'; // Importing Navigate and Outlet from react-router-dom

// ProtectedRoute component that renders Outlet if isLoggedIn is true, otherwise redirects to login page
const ProtectedRoute = ({ isLoggedIn }) => {
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />; // If isLoggedIn is true, render Outlet, else redirect to /login
};

export default ProtectedRoute; // Exporting ProtectedRoute component
