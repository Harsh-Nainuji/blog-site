import React from 'react';

const Contact = () => {
  return (
    <div className="contact-section container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-600">Ready to collaborate? Reach out to discuss your project needs!</p>
      </div>
      <div className="contact-info max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <p className="text-gray-700 mb-4">You can reach me at: <strong className="text-green-600">your@email.com</strong></p>
        <p className="text-gray-600">I'll respond within 24 hours to discuss how I can help you succeed on Fiverr.</p>
      </div>
    </div>
  );
};

export default Contact;