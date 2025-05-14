// File: src/admin/AdminDashboard.jsx (inferred)
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/admin/login');
  };

  return (
    <div className="admin-dashboard container mx-auto px-4 py-12">
      <div className="admin-header mb-12 text-center">
        <h2 className="admin-header-title text-4xl font-bold text-gray-800 mb-2">
          BlogVerse Admin Dashboard
        </h2>
        <p className="admin-header-welcome text-lg text-primary mb-4">
          Welcome, Admin!
        </p>
        <p className="admin-header-subtitle text-lg text-gray-600">
          Manage your blog content effortlessly with intuitive tools.
        </p>
      </div>

      <div className="admin-cards grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/admin/add-blog"
          className="admin-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <span className="admin-card-icon text-3xl mb-4 text-primary">➕</span>
          <h3 className="admin-card-title text-xl font-semibold text-gray-800 mb-1">
            Add Blog
          </h3>
          <p className="admin-card-subtitle text-sm uppercase text-gray-500 mb-2">
            New Post
          </p>
          <p className="admin-card-description text-gray-600 text-sm">
            Create a new blog post to engage your BlogVerse audience.
          </p>
        </Link>

        <Link
          to="/admin/blogs"
          className="admin-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <span className="admin-card-icon text-3xl mb-4 text-primary">📝</span>
          <h3 className="admin-card-title text-xl font-semibold text-gray-800 mb-1">
            Manage Blogs
          </h3>
          <p className="admin-card-subtitle text-sm uppercase text-gray-500 mb-2">
            Edit Content
          </p>
          <p className="admin-card-description text-gray-600 text-sm">
            Update or remove existing blog posts with ease.
          </p>
        </Link>

        <Link
          to="/admin/categories"
          className="admin-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <span className="admin-card-icon text-3xl mb-4 text-primary">📂</span>
          <h3 className="admin-card-title text-xl font-semibold text-gray-800 mb-1">
            Manage Categories
          </h3>
          <p className="admin-card-subtitle text-sm uppercase text-gray-500 mb-2">
            Organize Posts
          </p>
          <p className="admin-card-description text-gray-600 text-sm">
            Edit categories to keep your blog organized.
          </p>
        </Link>

        <Link
          to="/admin/add-category"
          className="admin-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <span className="admin-card-icon text-3xl mb-4 text-primary">➕</span>
          <h3 className="admin-card-title text-xl font-semibold text-gray-800 mb-1">
            Add Category
          </h3>
          <p className="admin-card-subtitle text-sm uppercase text-gray-500 mb-2">
            New Category
          </p>
          <p className="admin-card-description text-gray-600 text-sm">
            Add a category to structure your blog content.
          </p>
        </Link>

        <button
          onClick={handleLogout}
          className="admin-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <span className="admin-card-icon text-3xl mb-4 text-red-600">🚪</span>
          <h3 className="admin-card-title text-xl font-semibold text-gray-800 mb-1">
            Logout
          </h3>
          <p className="admin-card-subtitle text-sm uppercase text-gray-500 mb-2">
            Sign Out
          </p>
          <p className="admin-card-description text-gray-600 text-sm">
            Securely exit the BlogVerse admin panel.
          </p>
        </button>
      </div>
      <br />

      <div className="admin-tips mt-12 max-w-2xl mx-auto p-6 bg-surface rounded-lg shadow-md">
        <h3 className="admin-tips-title text-xl font-semibold text-gray-800 mb-4">
          Admin Tip
        </h3>
        <p className="admin-tips-text text-gray-600 text-sm">
          Pro Tip: Use categories to group related blog posts, making it easier
          for readers to find content.
        </p>
      </div>

      <div className="admin-footer mt-8 text-center">
        <p className="admin-footer-text text-gray-500 text-sm">
          BlogVerse Admin Panel | Need help? Contact support@blogverse.com
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;