// File: src/components/BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';

// Function to truncate text to a specified number of words
const truncateText = (text, wordLimit) => {
  const words = text.split(/\s+/);
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '…';
  }
  return text;
};

const BlogCard = ({ blog }) => {
  const API = import.meta.env.VITE_API_BASE;
  const revealRef = useReveal();

  // Inline styles for the image wrapper to enforce a 16:9 aspect ratio
  const imageWrapperStyle = {
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%', // 9/16 = 56.25% for 16:9 aspect ratio
    marginBottom: '1rem',
  };

  // Inline styles for the image to ensure it covers the container
  const imageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderTopLeftRadius: '0.375rem',
    borderTopRightRadius: '0.375rem',
  };

  return (
    <>
      {/* Internal CSS for category badge */}
      <style>{`
        :root {
          --color-champagne: #E6C28B;
          --color-champagne-dark: #B38F5A;
        }

        .category-badge {
          display: inline-block;
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: var(--color-secondary);
          background: var(--color-champagne);
          padding: var(--space-xs) var(--space-sm);
          border-radius: var(--radius-lg);
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
          margin-bottom: var(--space-sm);
        }

        .category-badge:hover {
          background: var(--color-champagne-dark);
          color: var(--color-text);
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }

        .category-badge::before {
          content: "🏷️ ";
          display: inline-block;
          margin-right: var(--space-xs);
        }

        /* Example variants: match lower-case category names */
        .category-badge.tech    { background: #6C5DD3; color: var(--color-text); }
        .category-badge.life    { background: #50C878; color: var(--color-text); }
        .category-badge.travel  { background: #FF7F50; color: var(--color-text); }
        .category-badge.culture { background: #FFD700; color: var(--color-text); }
      `}</style>

      <div
        ref={revealRef}
        className="reveal border bg-var(--color-surface) p-6 rounded-md shadow-soft hover:shadow-hover transition-transform"
      >
        {blog.image && (
          <div style={imageWrapperStyle}>
            <img
              src={`${API}${blog.image}`}
              alt={blog.title}
              style={imageStyle}
            />
          </div>
        )}

        {/* Category badge */}
        {blog.category && (
          <span className={`category-badge ${blog.category.toLowerCase()}`}>
            {blog.category}
          </span>
        )}

        <h3 className="font-heading text-xl mb-2">{blog.title}</h3>
        <p className="text-gray-600 mb-4">
          {truncateText(blog.content, 20)}
        </p>
        <Link to={`/blog/${blog._id}`} className="font-semibold text-champagne">
          Read more →
        </Link>
      </div>
    </>
  );
};

export default BlogCard;
