import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Auth.css';
import { useNavigate } from "react-router-dom";

function Auth() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();
  const handleSignup = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/signup', { username, password });
      if (response.status === 201) {
        console.log('Signup successful!');
        setUsername('');
        setPassword('');
      } else {
        console.error('Signup failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setIsLoading(false);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/login', { username, password });
      const token = response.data.token;
      console.log(token);
      localStorage.setItem('token', token);
      setUsername('');
      setPassword('');
      navigate("/home");
      
    } catch (error) {
      console.error('Login failed.');
    }
    setIsLoading(false);
  };

  return (
    <div className="Auth-form-container">
      <div className="Auth-form">
        <div className="Auth-form-content">
          <div className={`form-container ${isLoading ? 'loading' : ''}`}>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="form-button" type="submit" disabled={isLoading}>
                {isLoading && <span className="loading-icon">...</span>}
                Signup
              </button>
            </form>
          </div>
          <div className={`form-container ${isLoading ? 'loading' : ''}`}>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="form-button" type="submit" disabled={isLoading}>
                {isLoading && <span className="loading-icon">...</span>}
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
