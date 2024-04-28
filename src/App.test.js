import { render, screen } from '@testing-library/react'; // Importing render and screen from testing-library/react
import App from './App'; // Importing the App component

// Test to check if "learn react" link is rendered
test('renders learn react link', () => {
  render(<App />); // Render the App component
  const linkElement = screen.getByText(/learn react/i); // Get the element containing "learn react" text
  expect(linkElement).toBeInTheDocument(); // Assert that the element is in the document
});
