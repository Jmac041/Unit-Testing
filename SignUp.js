import React, { useState } from 'react';
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp({ onSignUp }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/index.php/user/create', {
        username,
        password,
      });

      if (response.data.success) {
        toast.success('Signup successful! Please log in', {      
        position: 'top-right', // Adjust the position as needed
        autoClose: 3000, // Notification will close after 3 seconds
      });
        setUsername(''); // Clear the username input
        setPassword(''); // Clear the password input
        setConfirmPassword(''); // Clear the confirm password input
        setError(''); // Clear any previous error messages
        onSignUp(); // Notify the parent component (App) that signup is complete
      } else {
        toast.error('Error creating account', {      
          position: 'top-right', // Adjust the position as needed
          autoClose: 3000, // Notification will close after 3 seconds
        })
      }
    } catch (err) {
      console.error('There was an error creating an account:', err);
      toast.error('Username already exists', {      
        position: 'top-right', // Adjust the position as needed
        autoClose: 3000, // Notification will close after 3 seconds
      })
    }
  };

  return (
    <div>
      <ToastContainer /> {/* Include the NotificationContainer */}     
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      </form>
      <NotificationContainer /> {/* Include the NotificationContainer */}
    </div>
  );
}

export default SignUp;
