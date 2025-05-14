// File: src/admin/BlogListAdmin.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogListAdmin = () => {
  const [blogs, setBlogs] = useState([]);
  const API = import.meta.env.VITE_API_BASE;

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${API}/api/blogs`);
      setBlogs(res.data);
    } catch (err) {
      console.error("Error fetching admin blogs:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this blog?")) return;
    try {
      await axios.delete(`${API}/api/blogs/${id}`);
      fetchBlogs();
    } catch (err) {
      console.error("Error deleting blog:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Blogs</h2>
      {blogs.map(blog => (
        <div key={blog._id} className="mb-4 p-4 border rounded">
          <h3 className="font-semibold">{blog.title}</h3>
          <button
            onClick={() => handleDelete(blog._id)}
            className="mt-2 bg-red-600 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogListAdmin;