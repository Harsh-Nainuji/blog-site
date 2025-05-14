import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from '../components/BlogCard';

export default function Home() {
  const API = import.meta.env.VITE_API_BASE;
  const [blogs, setBlogs] = useState([]);
  const [cats, setCats] = useState([]);
  const [filter, setFilter] = useState({ category: '', q: '' });

  // Load categories
  useEffect(() => {
    axios.get(`${API}/api/categories`)
      .then(r => setCats(r.data))
      .catch(e => console.error(e));
  }, [API]);

  // Load blogs on filter change
  useEffect(() => {
    const params = new URLSearchParams();
    if (filter.category) params.append('category', filter.category);
    if (filter.q)        params.append('q', filter.q);

    axios.get(`${API}/api/blogs?${params.toString()}`)
      .then(r => setBlogs(r.data))
      .catch(e => console.error(e));
  }, [API, filter]);

  return (
    <section className="home-section container mx-auto px-4 py-12">
      <div className="hero mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to BlogVerse</h1>
        <p className="text-lg text-gray-600">Discover stories, insights, and ideas from passionate writers.</p>
      </div>

      <div className="section-title mb-8">
        <h2 className="text-3xl font-semibold text-gray-700">Explore Our Blogs</h2>
        <p className="text-gray-500 mt-2">Find articles that inspire, inform, and entertain.</p>
      </div>

      {/* Search & Filter */}
      <div className="search-filter flex flex-col sm:flex-row gap-4 mb-10">
        <input
          type="text"
          placeholder="Search by title…"
          className="search-input w-full sm:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filter.q}
          onChange={e => setFilter(f => ({ ...f, q: e.target.value }))}
        />

        

        <select
          className="category-select w-full sm:w-1/4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filter.category}
          onChange={e => setFilter(f => ({ ...f, category: e.target.value }))}
        >
          <option value="">All Categories</option>
          {cats.map(c => (
            <option key={c._id} value={c.name}>{c.name}</option>
          ))}
        </select>
      </div>

      {/* Blog Grid */}
      <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map(blog => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  );
}