import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const API = import.meta.env.VITE_API_BASE;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${API}/api/blogs/${id}`);
        setBlog(res.data);
      } catch (err) {
        console.error('Error fetching blog detail:', err);
      }
    };
    fetchBlog();
  }, [API, id]);

  if (!blog) return <div className="text-center py-12 text-gray-600">Loading...</div>;

  return (
    <div className="blog-detail-section container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{blog.title}</h1>
        {blog.image && (
          <img
            src={`${API}${blog.image}`}
            alt={blog.title}
            className="mb-8 w-full h-auto rounded-lg shadow-md object-cover"
          />
        )}
        <article className="prose prose-lg text-gray-700 mb-8">{blog.content}</article>
        <Link to="/blogs" className="text-green-600 hover:underline">← Back to Portfolio</Link>
      </div>
    </div>
  );
};

export default BlogDetail;