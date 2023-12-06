import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils'; // Import act from react-dom/test-utils
import SignUp from './SignUp.js'; 

test('renders SignUp form with all fields', () => {
  render(<SignUp />); // Render the SignUp component
  expect(screen.getByLabelText(/username/i)).toBeInTheDocument(); // Ensure the username input is in the document
  expect(screen.getByTestId('password-input')).toBeInTheDocument(); // Ensure the password input is in the document
  expect(screen.getByTestId('confirm-password-input')).toBeInTheDocument(); // Ensure the confirm password input is in the document
  expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument(); // Ensure the sign-up button is in the document
});

test('allows typing in input fields', () => {
  render(<SignUp />); // Render the SignUp component
  const usernameInput = screen.getByLabelText(/username/i); // Get the username input element by its label
  const passwordInput = screen.getByTestId('password-input'); // Get the password input element by its data-testid
  const confirmPasswordInput = screen.getByTestId('confirm-password-input'); // Get the confirm password input element by its data-testid

  // Wrap user interactions with act
  act(() => {
    userEvent.type(usernameInput, 'newuser'); // Simulate typing 'newuser' into the username input
    userEvent.type(passwordInput, 'newpass123'); // Simulate typing 'newpass123' into the password input
    userEvent.type(confirmPasswordInput, 'newpass123'); // Simulate typing 'newpass123' into the confirm password input
  });

  // Ensure that the input fields have the expected values
  expect(usernameInput.value).toBe('newuser');
  expect(passwordInput.value).toBe('newpass123');
  expect(confirmPasswordInput.value).toBe('newpass123');
});

test('shows error if passwords do not match', () => {
  render(<SignUp />); // Render the SignUp component
  const passwordInput = screen.getByTestId('password-input'); // Get the password input element by its data-testid
  const confirmPasswordInput = screen.getByTestId('confirm-password-input'); // Get the confirm password input element by its data-testid
  const submitButton = screen.getByRole('button', { name: /sign up/i }); // Get the sign-up button element by its role and name

  // Wrap user interactions with act
  act(() => {
    userEvent.type(passwordInput, 'newpass123'); // Simulate typing 'newpass123' into the password input
    userEvent.type(confirmPasswordInput, 'differentpass'); // Simulate typing 'differentpass' into the confirm password input
    userEvent.click(submitButton); // Simulate clicking the sign-up button
  });

  // Debugging: Print the rendered HTML to the console
  console.log(screen.debug());

  // Use a regular expression to match part of the error message text
  expect(screen.getByText(/Passwords do not match/i)).toBeInTheDocument(); // Ensure that the error message is displayed
});