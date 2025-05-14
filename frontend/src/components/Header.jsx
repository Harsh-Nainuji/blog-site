import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header-section bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="logo">
          <Link to="/" className="text-2xl font-bold text-blue-600">BlogVerse</Link>
        </div>
        <div className="nav-links flex gap-6">
          <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link to="/blogs" className="text-gray-700 hover:text-blue-500">Blogs</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;