import React from 'react';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { FaDownload } from 'react-icons/fa';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

function Resume() {
  return (
    <div className="flex flex-col min-h-screen bg-beige">
      {/* Resume Content */}
      <section className="flex-grow w-full flex flex-col items-center px-4 bg-beige text-navy py-24">
        <motion.div
          className="w-full max-w-3xl border-x-4 border-white px-6 py-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Name */}
          <motion.h2
            className="text-2xl font-semibold text-center text-primary mb-8"
            variants={itemVariants}
          >
            Chan Michael E. Villamor
          </motion.h2>

          {/* Contact Info and Button */}
          <motion.div className="text-center mb-8 text-teal" variants={itemVariants}>
            <p className="text-lg">Bacoor, Cavite, Philippines 4102</p>
            <p className="text-lg ">
              Email: <span>chanmichaelespinavillamor@gmail.com </span>| Phone: +639617792463
            </p>
            <p className="text-lg mb-4">
              <a
                href="https://www.linkedin.com/in/chan-villamor/"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>{' '}
              |{' '}
              <a
                href="https://chanvillamor-portfolio.netlify.app"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website-Portfolio
              </a>
            </p>
            <div className="flex justify-center">
              <Button
                label="Download CV"
                href="/portfolio/CV.pdf"
                download={true}
                icon={FaDownload}
                bgColor="bg-white"
                textColor="text-black"
                borderColor="border-teal"
                hoverColor="hover:bg-teal"
                fullWidth={false}
              />
            </div>
          </motion.div>

          {/* Objective */}
          <motion.div className="mb-8" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-2">Objective</h3>
            <p className="text-md text-teal text-justify">
              Enthusiastic computer science student eager to secure an internship in software development
              to apply programming expertise, develop innovative solutions, and gain hands-on industry experience.
            </p>
          </motion.div>

          {/* Career Interests */}
          <motion.div className="mb-8" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-2">Career Interests</h3>
            <p className="text-md text-teal text-justify">
              Software engineering, Web development, UI/UX design, and system analysis—areas where creativity meets logic and innovation.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div className="mb-8" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-md text-teal text-justify">
              <strong>BS Computer Science</strong> - Cavite State University - Bacoor Campus, Cavite, Philippines
            </p>
            <p className="text-md text-teal">- 2022 - Present</p>
            <br />
            <p className="text-md text-teal text-justify">
              <strong>Science, Technology, Engineering, Mathematics</strong> - Bacoor Elementary School SHS
            </p>
            <p className="text-md text-teal">- 2020 - 2022</p>
          </motion.div>

          {/* Projects */}
          <motion.div className="mb-8" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-2">Projects</h3>
            <p className="text-md text-teal mb-1 text-justify">
              <strong>Restaurant Web Reservation — Frontend Developer</strong>
            </p>
            <p className="text-md text-teal mb-1 text-justify">
              We created a restaurant website reservation where people can book their tables ahead of time.
            </p>
            <p className="text-md text-teal mb-1 text-justify">
              <span className='font-medium'>Technologies used:</span> HTML, CSS, JavaScript, PHP, MySQL
            </p>
            <p className="text-md text-teal font-medium">
              Project Site:{' '}
              <a
                href="https://chanvillamor.github.io/Restaurant-web-page/"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Restaurant Web Page
              </a>
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div className="mb-8" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-2">Skills</h3>
            <p className="text-md text-teal mb-1 text-justify">
              <strong>Technical Skills:</strong> Basic HTML, CSS, JavaScript, Php, MySQL, Tailwind | Figma, Canva
            </p>
            <p className="text-md text-teal mb-1 text-justify">
              <strong>Soft Skills:</strong> Communication, Teamwork, Problem-Solving, Adaptability, Organization
            </p>
            <p className="text-md text-teal text-justify">
              <strong>Language Skills:</strong> English, Filipino, Cebuano
            </p>
          </motion.div>

          {/* Interests */}
          <motion.div className="mb-8" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-2">Interests</h3>
            <ul className="text-md text-teal list-disc list-inside">
              <li>Volleyball</li>
              <li>Music</li>
              <li>Reading Articles/Manga</li>
              <li>Anime</li>
              <li>Tech</li>
              <li>Travel</li>
            </ul>
          </motion.div>

          {/* Reference */}
          <motion.div className="mb-8" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-2">Reference</h3>
            <p className="text-md text-teal text-justify">
              <strong>Charles E. Villamor</strong><br />
              Contact: +6309384904559 | Email: charlesvillamor32@gmail.com
            </p>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default Resume;
