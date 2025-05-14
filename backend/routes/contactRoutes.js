// blog-backend/routes/contactRoutes.js
import express from 'express';
import { sendContactMessage } from '../controllers/contactController.js';

const router = express.Router();

router.post('/', sendContactMessage);

export default router;
