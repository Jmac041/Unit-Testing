import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils'; // Import act from react-dom/test-utils
import SignUp from './SignUp.js'; 

test('renders SignUp form with all fields', async () => {
  render(<SignUp />);
  expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
  expect(screen.getByTestId('password-input')).toBeInTheDocument();
  expect(screen.getByTestId('confirm-password-input')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
});

test('allows typing in input fields', async () => {
  render(<SignUp />);
  const usernameInput = screen.getByLabelText(/username/i);
  const passwordInput = screen.getByTestId('password-input');
  const confirmPasswordInput = screen.getByTestId('confirm-password-input');

  await userEvent.type(usernameInput, 'newuser');
  await userEvent.type(passwordInput, 'newpass123');
  await userEvent.type(confirmPasswordInput, 'newpass123');

  expect(usernameInput.value).toBe('newuser');
  expect(passwordInput.value).toBe('newpass123');
  expect(confirmPasswordInput.value).toBe('newpass123');
});

test('shows error if passwords do not match', async () => {
  render(<SignUp />);
  const passwordInput = screen.getByTestId('password-input');
  const confirmPasswordInput = screen.getByTestId('confirm-password-input');
  const submitButton = screen.getByRole('button', { name: /sign up/i });

  await userEvent.type(passwordInput, 'newpass123');
  await userEvent.type(confirmPasswordInput, 'differentpass');
  userEvent.click(submitButton);

  expect(screen.getByText(/Passwords do not match/i)).toBeInTheDocument();
});
