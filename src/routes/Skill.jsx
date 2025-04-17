import React, { useState } from 'react';
import { certificates } from '../data'; // Assuming you have this data elsewhere
import Footer from '../components/Footer'; // Assuming this is your footer component
import { motion } from 'framer-motion';

const tabs = ['Skills', 'Trainings', 'Certificates'];

function Skill() {
  const [activeTab, setActiveTab] = useState('Skills');
  const [modalImg, setModalImg] = useState(null);

  const openModal = (imgSrc) => setModalImg(imgSrc);
  const closeModal = () => setModalImg(null);

  return (
    <div className="flex flex-col min-h-screen bg-beige">
      <section className="w-full min-h-screen flex flex-col items-center py-24 px-4 bg-beige">
        <div className="max-w-6xl w-full md:px-4 sm:px-4">
          <motion.h1
            className="text-4xl md:text-4xl font-bold font-satisfy text-navy text-justify mb-4"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            🧠 My Skill Set
          </motion.h1>

          {/* Tabs */}
          <motion.nav
            className="flex justify-start gap-1 mb-6"
            aria-label="Skill Tabs"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1 rounded-full font-medium transition-all duration-200 
                  ${activeTab === tab ? 'bg-teal text-white shadow' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab}
              </motion.button>
            ))}
          </motion.nav>

          {/* Tab Content */}
          <motion.div
            className="bg-white shadow-md rounded-xl p-6 border text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {activeTab === 'Skills' && (
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Web Development */}
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-xl font-semibold text-navy mb-2">Web Development</h3>
                  <p className="text-teal mb-2 text-justify">
                    Knowledgeable in the basics of web development, including HTML, CSS, and JavaScript. Currently learning to build responsive and user-friendly web pages while focusing on improving skills in front-end technologies.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-teal">
                    <li>HTML, CSS, JavaScript</li>
                    <li>React, Tailwind CSS</li>
                    <li>Php, MySQL</li>
                  </ul>
                </motion.div>

                {/* UI/UX Design */}
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-navy mb-2">UI/UX Design</h3>
                  <p className="text-teal mb-2 text-justify">
                    Passionate about designing intuitive and user-centered interfaces. Currently learning the basics of wireframing, prototyping, and visual design to create user-friendly experiences.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-teal">
                    <li>Figma</li>
                    <li>Canva</li>
                    <li>Miro</li>
                  </ul>
                </motion.div>

                {/* Soft Skills */}
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-xl font-semibold text-navy mb-2">Soft Skills</h3>
                  <p className="text-teal mb-2 text-justify">
                    Strong interpersonal and professional qualities that enhance collaboration, problem-solving, and adaptability in a tech-driven environment.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-teal">
                    <li>Communication</li>
                    <li>Teamwork</li>
                    <li>Problem-solving</li>
                    <li>Adaptability</li>
                    <li>Time Management</li>
                    <li>Organization</li>
                  </ul>
                </motion.div>
              </motion.div>
            )}

            {activeTab === 'Trainings' && (
              <motion.div
                className="relative border-l-4 border-teal pl-8 space-y-10"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* 1st Training */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="absolute -left-4 top-1 w-3 h-3 bg-teal rounded-full"></div>
                  <h4 className="text-lg font-semibold text-navy">1st: Responsive Web Design</h4>
                  <p className="text-teal text-justify">
                    Completed a free online training course at <span className="font-medium">freeCodeCamp</span>, focused on Responsive Web Design. Learned the fundamentals of HTML, CSS, and JavaScript while building responsive web pages from scratch. This course covered layout techniques, media queries, and how to create adaptive designs for different screen sizes.
                  </p>
                </motion.div>

                {/* 2nd Training */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="absolute -left-4 top-1 w-3 h-3 bg-teal rounded-full"></div>
                  <h4 className="text-lg font-semibold text-navy">2nd: HTML Fundamentals</h4>
                  <p className="text-teal text-justify">
                    Completed a free training course at <span className="font-medium">SoloLearn</span>, diving deep into the use of semantic HTML elements, forms, and tables. Gained proficiency in organizing content in a clear, structured way and learned to write clean, accessible code.
                  </p>
                </motion.div>

                {/* 3rd Training */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="absolute -left-4 top-1 w-3 h-3 bg-teal rounded-full"></div>
                  <h4 className="text-lg font-semibold text-navy">3rd: Advanced CSS</h4>
                  <p className="text-teal text-justify">
                    Took a free training course at <span className="font-medium">SoloLearn</span>, learning advanced CSS techniques such as Flexbox, Grid, and CSS animations. Gained hands-on experience with building responsive layouts and creating interactive elements using CSS.
                  </p>
                </motion.div>

                {/* 4th Training */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="absolute -left-4 top-1 w-3 h-3 bg-teal rounded-full"></div>
                  <h4 className="text-lg font-semibold text-navy">4th: Responsive Design Principles</h4>
                  <p className="text-teal text-justify">
                    Completed another <span className="font-medium">SoloLearn</span> course focused specifically on responsive design. Learned advanced CSS techniques, including CSS Grid and Flexbox, as well as how to ensure a smooth user experience across devices of all screen sizes.
                  </p>
                </motion.div>
              </motion.div>
            )}

            {activeTab === 'Certificates' && (
              <motion.div
                className="flex flex-col justify-center"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div>
                  <p className="text-gray text-base font-normal tracking-wider mt-1">Certificates I've earned online.</p>
                </div>
                <ul className="flex flex-wrap gap-6 mt-8 justify-start max-w-8xl mx-auto">
                  {certificates.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <div className="bg-white rounded shadow-md p-4 hover:shadow-lg transition-all">
                        <img
                          src={item.certImg}
                          alt={`Certificate ${index + 1}`}
                          className="object-cover cursor-pointer rounded-md mb-3 w-full"
                          onClick={() => openModal(item.certImg)}
                        />
                        <p className="text-sm text-teal text-justify">{item.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Modal */}
        {modalImg && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white p-4 rounded shadow-lg max-w-3xl w-full relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-navy hover:text-red-700"
                aria-label="Close"
              >
                ✕
              </button>
              <img
                src={modalImg}
                alt="Certificate Full View"
                className="w-full h-auto rounded"
              />
            </div>
          </motion.div>
        )}
      </section>
      <Footer />
    </div>
  );
}

export default Skill;
