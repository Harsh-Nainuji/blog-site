import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function AddCategory() {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_BASE;

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/api/categories`, { name });
      navigate('/admin/categories');
    } catch (error) {
      console.error('Add category error:', error);
      alert('Error adding category!');
    }
  };

  return (
    <div className="add-category-section container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <div className="header mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Add New Category</h2>
          <p className="text-gray-600">Create a category to organize your BlogVerse posts.</p>
        </div>
        <div className="form-container space-y-6 bg-white p-8 rounded-lg shadow-lg">
          <div className="form-group">
            <label className="form-label">Category Name</label>
            <input
              className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter category name"
              required
            />
          </div>
          <button type="submit" onClick={submit} className="btn w-full">Save Category</button>
          <Link to="/admin/dashboard" className="text-primary hover:underline block text-center mt-4">← Back to Dashboard</Link>
        </div>
      </div>
    </div>
  );
}