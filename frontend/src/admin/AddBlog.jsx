// File: src/components/AddBlog.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddBlog = () => {
  const API = import.meta.env.VITE_API_BASE;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  // Fetch available categories on mount
  useEffect(() => {
    const fetchCats = async () => {
      try {
        const res = await axios.get(`${API}/api/categories`);
        setCategories(res.data);
      } catch (err) {
        console.error("Failed to load categories:", err);
      }
    };
    fetchCats();
  }, [API]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category) {
      return alert("Please select a category.");
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);
    formData.append("category", category);

    try {
      await axios.post(`${API}/api/blogs`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Blog added successfully!");
      // Optionally clear form
      setTitle("");
      setContent("");
      setImage(null);
      setCategory("");
    } catch (error) {
      console.error(error);
      alert("Error adding blog");
    }
  };

  return (
    <div className="add-blog-section container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="header mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Add New Blog Post
          </h2>
          <p className="text-gray-600">
            Share your insights with the BlogVerse community.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="form-container space-y-6 bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="form-group">
            <label className="form-label">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter blog title"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="form-textarea w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Write your blog content..."
              rows="6"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-select w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="" disabled>
                -- Select a category --
              </option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="form-input w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <br />
          <button type="submit" className="btn w-full">
            Add Blog
          </button>
          <Link
            to="/admin/dashboard"
            className="text-primary hover:underline block text-center mt-4"
          >
            ← Back to Dashboard
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;