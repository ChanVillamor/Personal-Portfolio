import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kcdfnxj', 'template_yx2r5gu', form.current, {
        publicKey: 'P2cbuqMWHo8eC1aNC',
      })
      .then(() => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        alert("❌ Something went wrong. Please try again.");
        console.error('FAILED...', error);
      });
  };

  return (
    <div className="flex flex-col min-h-screen bg-beige">
      <section className="w-full min-h-screen flex flex-col items-center mt-16 px-4 bg-beige py-10">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold font-satisfy text-navy text-center text-primary mb-8"
        >
          📬 Get in Touch
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center w-full mx-auto mb-8 px-4"
        >
          <p className="text-base md:text-lg text-teal mb-2">
            Feel free to reach out to me for any inquiries or collaboration opportunities!
          </p>
          <p className="text-base md:text-lg text-teal">
            Email: <a href="mailto:chanmichaelespinavillamor@gmail.com" className="text-blue-600">chanmichaelespinavillamor@gmail.com</a>
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="w-full max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg"
        >
          <div className="mb-4">
            <label htmlFor="user_name" className="block text-lg text-navy mb-2">Full Name</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              className="w-full px-4 py-2 border rounded-lg text-navy focus:outline-none focus:ring-2 focus:ring-teal"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="user_email" className="block text-lg text-navy mb-2">Email Address</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              className="w-full px-4 py-2 border rounded-lg text-navy focus:outline-none focus:ring-2 focus:ring-teal"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg text-navy mb-2">Message</label>
            <textarea
              id="message"
              name="message"
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

        {/* Social Links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="w-full max-w-lg mx-auto text-center mt-8"
        >
          <p className="text-md md:text-lg text-teal">You can also reach out to me on my social media:</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://www.linkedin.com/in/chanvillamor" className="text-black hover:text-teal" aria-label="LinkedIn"><FaLinkedin size={30} /></a>
            <a href="https://github.com/ChanVillamor" className="text-black hover:text-teal" aria-label="GitHub"><FaGithub size={30} /></a>
            <a href="https://www.instagram.com/chanvillamor" className="text-black hover:text-teal" aria-label="Instagram"><FaInstagram size={30} /></a>
            <a href="https://www.facebook.com/chanvillamor" className="text-black hover:text-teal" aria-label="Facebook"><FaFacebook size={30} /></a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
