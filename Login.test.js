// Import necessary libraries and components for testing
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import the component to be tested
import Login from './Login';

// Mock the axios library for testing purposes
jest.mock('axios');

// Describe the test suite for the Login component
describe('Login Component', () => {
  // Test 1: Ensure that the Login form renders with all required fields
  test('renders Login form with all fields', () => {
    render(<Login />);
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  // Test 2: Check if the navigation to the registration page works
  test('navigates to registration page', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<div>Registration Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    // Update this to use a regular expression for case-insensitive matching
    const registrationLink = screen.getByText(/register/i);
    expect(registrationLink).toBeInTheDocument();

    fireEvent.click(registrationLink);

    expect(screen.getByText(/registration page/i)).toBeInTheDocument();
  });

  // Test 3: Check if typing in input fields works correctly
  test('allows typing in input fields', async () => {
    render(<Login />);
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);

    await act(async () => {
      await userEvent.type(usernameInput, 'testuser');
      await userEvent.type(passwordInput, 'password123');
    });

    expect(await screen.findByDisplayValue('testuser')).toBeInTheDocument();
    expect(await screen.findByDisplayValue('password123')).toBeInTheDocument();
  });

  // Test 4: Check if the component handles incorrect login attempts
  test('detects incorrect login attempt', async () => {
    // Mock the axios.post method to simulate a rejected login attempt
    axios.post.mockRejectedValue({ response: { data: { error: 'Invalid credentials' } } });

    render(
      <MemoryRouter initialEntries={['/login']}>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </MemoryRouter>
    );

    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });

    await act(async () => {
      await userEvent.type(usernameInput, 'testuser');
      await userEvent.type(passwordInput, 'wrongpassword');
    });

    fireEvent.click(loginButton);

    expect(await screen.findByText(/invalid credentials/i)).toBeInTheDocument();
  });
});
