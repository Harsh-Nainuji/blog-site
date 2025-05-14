// File: backend/controllers/blogController.js
// =========================
import Blog from '../models/Blog.js';

// Create a new blog post
export const addBlog = async (req, res) => {
  try {
    const { title, content, category } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : '';

    const blog = new Blog({ title, content, category, image });
    await blog.save();
    res.json(blog);
  } catch (error) {
    console.error('Add blog error:', error);
    res.status(500).json({ error: 'Failed to add blog.' });
  }
};

// Get all blogs (filtered by category or search)
export const getAllBlogs = async (req, res) => {
  const { category, q } = req.query;
  const filter = {};

  if (category) filter.category = category;
  if (q)        filter.title = { $regex: q, $options: 'i' };

  try {
    const blogs = await Blog.find(filter).sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    console.error('Fetch blogs error:', err);
    res.status(500).json({ error: 'Failed to fetch blogs.' });
  }
};

// Get a single blog by ID
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    blog ? res.json(blog) : res.status(404).json({ error: 'Not found' });
  } catch (err) {
    console.error('Get blog by ID error:', err);
    res.status(500).json({ error: 'Failed to fetch blog.' });
  }
};

// Delete a blog by ID
export const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (error) {
    console.error('Delete blog error:', error);
    res.status(500).json({ error: 'Failed to delete blog.' });
  }
};

