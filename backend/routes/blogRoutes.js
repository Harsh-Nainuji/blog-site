// backend/routes/blogRoutes.js
import express from 'express';
import multer from 'multer';
import path from 'path';
import {
  addBlog,
  getAllBlogs,
  getBlogById,
  deleteBlog
} from '../controllers/blogController.js';

const router = express.Router();

// Multer config at route level
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename:    (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const fileFilter = (req, file, cb) => {
  const allowed = /jpeg|jpg|png|gif|webp/;
  const ext = file.mimetype.split('/')[1];
  allowed.test(ext) ? cb(null, true) : cb(new Error('Only images allowed'), false);
};

const upload = multer({ storage, fileFilter });

// public routes
router.get('/', getAllBlogs);
router.get('/:id', getBlogById);

// protected (admin) routes
router.post('/', upload.single('image'), addBlog);
router.delete('/:id', deleteBlog);

export default router;
