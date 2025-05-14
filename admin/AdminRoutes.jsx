// File: frontend/src/admin/AdminRoutes.jsx
// =========================
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import AddBlog from './AddBlog';
import BlogListAdmin from './BlogListAdmin';
import CategoryListAdmin from './CategoryListAdmin';
import AddCategory from './AddCategory';

const AdminRoutes = () => {
  const isAuthenticated = localStorage.getItem('adminLoggedIn') === 'true';
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/dashboard" element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/admin/login" />} />
      <Route path="/add-blog" element={isAuthenticated ? <AddBlog /> : <Navigate to="/admin/login" />} />
      <Route path="/blogs" element={isAuthenticated ? <BlogListAdmin /> : <Navigate to="/admin/login" />} />
      <Route path="/categories" element={isAuthenticated ? <CategoryListAdmin /> : <Navigate to="/admin/login" />} />
      <Route path="/add-category" element={isAuthenticated ? <AddCategory /> : <Navigate to="/admin/login" />} />
      <Route path="*" element={<Navigate to="/admin/login" />} />
    </Routes>
  );
};

export default AdminRoutes;
