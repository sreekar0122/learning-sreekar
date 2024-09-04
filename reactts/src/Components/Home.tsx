import React, { useState } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault(); // Prevents page reload on form submission
    if (username && password) {
      setMessage('Login successful!');
    } else {
      setMessage('Please enter both username and password.');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="username" className="form-label">Username</label>
          <input 
            id="username"
            type="text" 
            placeholder="Enter your username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            id="password"
            type="password" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">Login</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default Home;
