// File: src/admin/AdminLogin.jsx (inferred)
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = () => {
    if (credentials.username === 'admin' && credentials.password === 'xu896Ajhu') {
      localStorage.setItem('adminLoggedIn', 'true');
      navigate('/admin/dashboard');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="admin-login-section bg-surface min-h-screen flex items-center justify-center p-6">
      <div className="login-card max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">BlogVerse Admin Login</h1>
          <p className="text-gray-600 mt-2">Access the admin panel to manage your blog.</p>
        </div>
        <div className="container" id='zex'>
          <div className="space-y-6">
            <div className="form-group">
              <label className="form-label">Username</label>
              <input
                type="text"
                placeholder="Enter username"
                className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              />
            </div>
            <button onClick={handleLogin} className="btn w-full">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;