import React, { useRef, useState, useEffect } from 'react';
import { FaDownload, FaEnvelope, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Button from '../components/Button';
import { navLinks } from '../data';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import profilePicHome from '../assets/my-img/my-img3.jpg';

function Home() {
  const navRef = useRef();
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const location = useLocation();

  const checkScroll = () => {
    if (!navRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth);
  };

  const scroll = (direction) => {
    if (navRef.current) {
      const scrollAmount = direction === 'left' ? -150 : 150;
      navRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    checkScroll();
    const currentNav = navRef.current;
    currentNav?.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    return () => {
      currentNav?.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-beige px-4">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 max-w-5xl w-full">

        {/* Text Content with animation */}
        <motion.div
          className="text-center lg:text-left w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4 font-satisfy">
            👋 Hi, I'm Chan Michael Villamor
          </h1>
          <p className="text-lg text-black mb-6">
            👨‍💻 Aspiring Software Engineer & 🎨 UI/UX Designer
          </p>


          {/* Scrollable Nav with Arrows */}
          <div className="relative w-full mb-6">
            {showLeft && (
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow text-gray-500 z-10"
                onClick={() => scroll('left')}
              >
                <FaChevronLeft size={16} />
              </button>
            )}

            <nav
              ref={navRef}
              className="flex overflow-x-auto scroll-smooth scrollbar-hide mx-8"
            >
              <ul className="flex space-x-6 min-w-max">
                {navLinks.map((link, index) => (
                  <li key={index} className="whitespace-nowrap group">
                    <Link
                      to={link.href}
                      className={`relative text-teal font-medium transition duration-300 ${
                        location.pathname === link.href ? 'text-navy' : 'hover:text-navy'
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute left-0 -bottom-0.5 w-full h-[2px] bg-navy transform transition-transform duration-300 origin-left ${
                          location.pathname === link.href
                            ? 'scale-x-100'
                            : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      ></span>
                    </Link>
                  </li>
                ))}
              </ul>


            </nav>

            {showRight && (
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow text-gray-500 z-10"
                onClick={() => scroll('right')}
              >
                <FaChevronRight size={16} />
              </button>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button
              label="Contact Me"
              href="/contact"
              icon={FaEnvelope}
              isExternal={false}
              bgColor="bg-teal"
              textColor="text-white"
              borderColor="border-teal"
              hoverColor="hover:bg-white"
            />
            <Button
              label="Download CV"
              href="/portfolio/CV.pdf"
              download={true}
              icon={FaDownload}
              bgColor="bg-white"
              textColor="text-black"
              borderColor="border-teal"
              hoverColor="hover:bg-teal"
              hoverText="hover:text-white"
            />
          </div>
        </motion.div>

        {/* Profile Picture with animation */}
        <motion.div
          className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-purple-700 to-green-900 opacity-50 rounded-full"></div>

          <div className="relative z-10 w-full h-full flex justify-center items-center border-8 border-transparent rounded-full bg-clip-border bg-gradient-to-tl from-blue-500 to-green-500">
            <img
              src={profilePicHome}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="absolute top-0 left-0 right-0 bottom-0 border-8 border-dashed border-indigo-500 z-0 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
