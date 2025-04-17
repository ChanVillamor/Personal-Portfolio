import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/my-img/my-img2.jpg';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { interest } from '../data';
import Footer from '../components/Footer';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

function About() {
  return (
    <div className="flex flex-col min-h-screen bg-beige">
      <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-beige">
        <div className="max-w-6xl w-full">
          <motion.h1
            className="text-4xl md:text-4xl font-bold font-satisfy text-navy text-center mb-10"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            👤 About Me
          </motion.h1>

          {/* The Real Me */}
          <motion.div
            className="space-y-4 mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-xl font-bold text-navy">🧍‍♂️ The Real Me</h2>
            <p className="text-base md:text-lg leading-relaxed text-justify">
              Beyond what I study and the projects I create, I’m someone who finds meaning in quiet progress. I enjoy working behind the scenes — organizing ideas, mapping out interfaces, or I focus on refining details that often go unnoticed.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-justify">
              I thrive in thoughtful environments and often take my time to process, observe, and improve. Whether I’m on a team project or working solo, I always aim to contribute something purposeful and well-crafted.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-justify">
              I believe in staying consistent, embracing challenges, and remaining open to learning — not just in code, but in how I connect with people and navigate life.
            </p>
          </motion.div>

          {/* Profile and Info */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex-1 flex justify-center">
              <motion.div
                className="w-[280px] h-[360px] rounded-full border-4 border-green-900 p-2 shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
            </div>
            <div className="flex-1 space-y-4 text-base md:text-lg">
              <h2 className="text-lg font-semibold text-navy">📌 Basic Information</h2>
              <ul className="space-y-2">
                <li><strong>Full Name:</strong> Chan Michael Espina Villamor</li>
                <li><strong>Nickname:</strong> Chan/Boo</li>
                <li><strong>Age:</strong> 21</li>
                <li><strong>Date of Birth:</strong> November 16, 2003</li>
                <li><strong>Place of Birth:</strong> Villaba, Leyte, Philippines</li>
                <li><strong>Current Location:</strong> Bacoor, Cavite</li>
                <li><strong>Nationality:</strong> Filipino</li>
              </ul>
            </div>
          </motion.div>

          {/* Family Background */}
          <motion.div
            className="mt-14 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-xl font-bold text-navy">👨‍👩‍👦 Family Background</h2>
            <p className="text-base md:text-lg leading-relaxed text-justify">
              Originally from Leyte, I am the middle child of three in the family, which has taught me to balance both support and responsibility. At an early age, I moved away to live independently, marking the beginning of my journey toward personal growth and self-reliance. Growing up, I was inspired by my father’s dedication and my mother’s love, both of which continue to guide me. Their influence motivates me to aim high, yet always remain grounded and true to my values.
            </p>
          </motion.div>

          {/* Career Interests */}
          <motion.div
            className="mt-14 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-xl font-bold text-navy">💻 Career Interests</h2>
            <ul className="list-disc ml-6 text-base md:text-lg">
              <li>Software Development</li>
              <li>Web Development (React, Tailwind)</li>
              <li>UI/UX Design</li>
              <li>Front-End Projects</li>
              <li>Internship in Tech Industry (2025)</li>
            </ul>
          </motion.div>

          {/* Interests & Hobbies */}
          <motion.div
            className="mt-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-xl font-bold mb-6 text-navy">🎮 Interests & Hobbies</h2>
            <div className="infinite-scroll-container">
              <div className="infinite-scroll-items">
                {interest.concat(interest).map((item, index) => (
                  <motion.div
                    key={index}
                    className="infinite-scroll-item flex items-center gap-4 px-6 py-3 min-w-[200px] bg-white border rounded-xl shadow hover:shadow-md transition"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={item.interestImg}
                      alt={item.label}
                      className="w-10 h-10 object-contain"
                    />
                    <span className="text-sm font-medium text-gray-800">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="mt-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-xl font-semibold mb-3">🌐 Social Links</h2>
            <div className="flex flex-wrap justify-start gap-4">
              {[
                {
                  icon: <FaFacebookF className="text-black text-xl" />,
                  label: 'Facebook',
                  href: 'https://web.facebook.com/chan.villamor.378/',
                },
                {
                  icon: <FaInstagram className="text-black text-xl" />,
                  label: 'Instagram',
                  href: 'https://instagram.com/booshaider',
                },
                {
                  icon: <FaLinkedinIn className="text-black text-xl" />,
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/chan-villamor/',
                },
                {
                  icon: <FaGithub className="text-black text-xl" />,
                  label: 'GitHub',
                  href: 'https://github.com/ChanVillamor',
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2 w-40 bg-white rounded-lg border-teal border-2 hover:bg-teal transition shadow-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.icon}
                  <span className="font-medium text-black">{item.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
