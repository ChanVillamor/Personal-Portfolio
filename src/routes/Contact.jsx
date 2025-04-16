import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa'; // Import React Icons
import Footer from '../components/Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (you can send data to an API or email service)
    console.log('Form submitted', formData);
  };

  return (
    <div className="flex flex-col min-h-screen bg-beige">
      <section className="w-full min-h-screen flex flex-col items-center mt-16 px-4 bg-beige py-10">
        {/* Heading Caption */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-semibold font-satisfy text-navy text-center text-primary mb-8"
        >
          📬 Get in Touch
        </motion.h2>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-center w-full mx-auto mb-8 px-4"
        >
          <p className="text-base md:text-lg lg:text-lg xl:text-lg text-teal mb-2">
            Feel free to reach out to me for any inquiries or collaboration opportunities!
          </p>
          <p className="text-base md:text-lg lg:text-lg xl:text-lg text-teal">
            Email: <a href="mailto:chanmichaelespinavillamor@gmail.com" className="text-blue-600">chanmichaelespinavillamor@gmail.com</a>
          </p>
          <p className="text-base md:text-lg lg:text-lg xl:text-lg text-teal mb-2">
            Phone: <a href="tel:+639617792463" className="text-blue-600">+639617792463</a>
          </p>
          <p className="text-base md:text-lg lg:text-lg xl:text-lg text-teal mb-2">
            LinkedIn: <a href="https://www.linkedin.com/in/chanvillamor" className="text-blue-600">LinkedIn Profile</a>
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
          onSubmit={handleSubmit}
          className="w-full max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg text-navy mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-navy focus:outline-none focus:ring-2 focus:ring-teal"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg text-navy mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-navy focus:outline-none focus:ring-2 focus:ring-teal"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg text-navy mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-navy text-white font-semibold rounded-lg shadow-md hover:bg-teal focus:outline-none focus:ring-2 focus:ring-teal"
            >
              Send Message
            </button>
          </div>
        </motion.form>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
          className="w-full max-w-lg mx-auto text-center mt-8"
        >
          <p className="text-base md:text-lg lg:text-lg xl:text-lg text-teal">You can also reach out to me on my social media:</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://www.linkedin.com/in/chanvillamor" className="text-black hover:text-teal">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/ChanVillamor" className="text-black hover:text-teal">
              <FaGithub size={30} />
            </a>
            <a href="https://www.instagram.com/chanvillamor" className="text-black hover:text-teal">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.facebook.com/chanvillamor" className="text-black hover:text-teal">
              <FaFacebook size={30} />
            </a>
          </div>
        </motion.div>
      </section>
      <Footer/>
    </div>
  );
}

export default Contact;
