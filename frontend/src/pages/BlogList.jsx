import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from '../components/BlogCard';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const API = import.meta.env.VITE_API_BASE;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${API}/api/blogs`);
        setBlogs(res.data);
      } catch (err) {
        console.error('Error fetching blogs:', err);
      }
    };
    fetchBlogs();
  }, [API]);

  return (
    <div className="blog-list-section container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">My Blog Portfolio</h2>
        <p className="text-lg text-gray-600">Discover my latest projects and insights crafted for Fiverr clients.</p>
      </div>
      <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map(blog => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;