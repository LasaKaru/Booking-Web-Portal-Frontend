import React from 'react'; // Importing React library
import { createRoot } from 'react-dom'; // Importing createRoot function from react-dom
import './index.css'; // Importing CSS file
import App from './App'; // Importing the App component
import reportWebVitals from './reportWebVitals'; // Importing reportWebVitals function

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const root = createRoot(document.getElementById('root')); // Creating a root for ReactDOM
root.render( // Rendering the App component within React StrictMode
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); // Reporting web vitals
