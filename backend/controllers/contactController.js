// blog-backend/controllers/contactController.js
import nodemailer from 'nodemailer';

export const sendContactMessage = async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: 'New Blog Contact Message',
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p>${message}</p>`,
    });

    res.json({ message: 'Message sent successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send email.' });
  }
};
