// blog-frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import BlogDetail from './pages/BlogDetail';
import BlogList from './pages/BlogList';
import Contact from './pages/Contact';

import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import AddBlog from './admin/AddBlog';
import BlogListAdmin from './admin/BlogListAdmin';
import AddCategory from './admin/AddCategory';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/add-blog" element={<AddBlog />} />
          <Route path="/admin/blogs" element={<BlogListAdmin />} />
          <Route path="/admin/add-category" element={<AddCategory />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;  