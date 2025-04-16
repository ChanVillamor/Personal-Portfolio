import React, { useState } from 'react';
import { certificates } from '../data';
import Footer from '../components/Footer';

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

          <h1 className="text-4xl md:text-4xl font-bold font-satisfy text-navy text-justify mb-4">🧠 My Skill Set</h1>

          {/* Tabs */}
          <nav className="flex justify-start gap-1 mb-6" aria-label="Skill Tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1 rounded-full font-medium transition-all duration-200 
                  ${
                    activeTab === tab
                      ? 'bg-teal text-white shadow'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                  }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* Tab Content */}
          <div className="bg-white shadow-md rounded-xl p-6 border text-gray-800">
            {activeTab === 'Skills' && (
              <div className="space-y-8">

                {/* Web Development */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Web Development</h3>
                  <p className="text-gray-600 mb-2">
                    Experienced in building responsive and interactive web applications using modern front-end and back-end technologies. Focused on creating seamless user experiences and clean code structures.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>HTML, CSS, JavaScript</li>
                    <li>React, Tailwind CSS</li>
                    <li>Laravel, MySQL</li>
                  </ul>
                </div>
              
                {/* UI/UX Design */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">UI/UX Design</h3>
                  <p className="text-gray-600 mb-2">
                    Passionate about designing intuitive and user-centered interfaces. Skilled in creating wireframes, prototypes, and visual designs aligned with user needs and business goals.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Figma</li>
                    <li>Canva</li>
                    <li>Framer</li>
                  </ul>
                </div>  

                {/* Soft Skills */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Soft Skills</h3>
                  <p className="text-gray-600 mb-2">
                    Strong interpersonal and professional qualities that enhance collaboration, problem-solving, and adaptability in a tech-driven environment.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Communication</li>
                    <li>Teamwork</li>
                    <li>Problem-solving</li>
                    <li>Adaptability</li>
                    <li>Time Management</li>
                    <li>Organization</li>
                  </ul>
                </div>         
              </div>        
            )}

            {activeTab === 'Trainings' && (
              <div className="relative border-l-4 border-teal pl-8 space-y-10">
                {/* 1st Training */}
                <div className="relative">
                  <div className="absolute -left-4 top-1 w-3 h-3 bg-teal rounded-full"></div>
                  <h4 className="text-lg font-semibold text-green-800">1st: Responsive Web Design</h4>
                  <p className="text-gray-700">
                    Completed a free online training course at <span className="font-medium">freeCodeCamp</span>, focused on Responsive Web Design. Learned the fundamentals of HTML, CSS, and JavaScript while building responsive web pages from scratch. This course covered layout techniques, media queries, and how to create adaptive designs for different screen sizes.
                  </p>
                </div>

                {/* 2nd Training */}
                <div className="relative">
                  <div className="absolute -left-4 top-1 w-3 h-3 bg-teal rounded-full"></div>
                  <h4 className="text-lg font-semibold text-green-800">2nd: HTML Fundamentals</h4>
                  <p className="text-gray-700">
                    Completed a free training course at <span className="font-medium">SoloLearn</span>, diving deep into the use of semantic HTML elements, forms, and tables. Gained proficiency in organizing content in a clear, structured way and learned to write clean, accessible code.
                  </p>
                </div>

                {/* 3rd Training */}
                <div className="relative">
                  <div className="absolute -left-4 top-1 w-3 h-3 bg-teal rounded-full"></div>
                  <h4 className="text-lg font-semibold text-green-800">3rd: Advanced CSS</h4>
                  <p className="text-gray-700">
                    Took a free training course at <span className="font-medium">SoloLearn</span>, learning advanced CSS techniques such as Flexbox, Grid, and CSS animations. Gained hands-on experience with building responsive layouts and creating interactive elements using CSS.
                  </p>
                </div>

                {/* 4th Training */}
                <div className="relative">
                  <div className="absolute -left-4 top-1 w-3 h-3 bg-teal rounded-full"></div>
                  <h4 className="text-lg font-semibold text-green-800">4th: Responsive Design Principles</h4>
                  <p className="text-gray-700">
                    Completed another <span className="font-medium">SoloLearn</span> course focused specifically on responsive design. Learned advanced CSS techniques, including CSS Grid and Flexbox, as well as how to ensure a smooth user experience across devices of all screen sizes.
                  </p>
                </div>
              </div>
            )}


            {activeTab === 'Certificates' && (
              <div className="flex flex-col justify-center">
                <div>
                  <p className="text-gray text-base font-normal tracking-wider mt-1">Some certificates I've earned online.</p>
                </div>
                <ul className="flex flex-wrap gap-6 mt-8 justify-start max-w-8xl mx-auto">
                  {certificates.map((item, index) => (
                    <li key={index} className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                      <div className="bg-white rounded shadow-md p-4 hover:shadow-lg transition-all">
                        <img
                          src={item.certImg}
                          alt={`Certificate ${index + 1}`}
                          className="object-cover cursor-pointer rounded-md mb-3 w-full"
                          onClick={() => openModal(item.certImg)}
                        />
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>

              </div>
            )}

          </div>
        </div>

        {/* Modal */}
        {modalImg && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded shadow-lg max-w-3xl w-full relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
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
          </div>
        )}
      </section>
      <Footer/>
    </div>
  );
}

export default Skill;
