// File: frontend/src/admin/CategoryListAdmin.jsx
// =========================
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CategoryListAdmin() {
  const [cats, setCats] = useState([]);
  const API = import.meta.env.VITE_API_BASE;

  const fetch = async () => {
    try {
      const res = await axios.get(`${API}/api/categories`);
      setCats(res.data);
    } catch (e) { console.error(e); }
  };

  const del = async (id) => {
    if (!window.confirm('Delete this category?')) return;
    try {
      await axios.delete(`${API}/api/categories/${id}`);
      fetch();
    } catch (e) { console.error(e); }
  };

  useEffect(fetch, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Categories</h2 > );
      <Link to="/admin/add-category" className="mb-4 inline-block bg-black text-white px-3 py-1 rounded">➕ Add New</Link>
      {cats.map(c => (
        <div key={c._id} className="flex justify-between p-2 border-b">
          <span>{c.name}</span>
          <button onClick={() => del(c._id)} className="text-red-600">Delete</button>
        </div>
      ))}
    </div>
  );
}

