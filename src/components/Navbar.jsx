import React, { useRef, useState, useEffect } from "react";
import { navLinks } from "../data";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = () => {
    if (!navRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    checkScroll();
    const currentNav = navRef.current;
    currentNav?.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      currentNav?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  useEffect(() => {
    // Trigger fade-in animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scroll = (direction) => {
    if (navRef.current) {
      const scrollAmount = direction === "left" ? -150 : 150;
      navRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`w-full max-w-3xl fixed top-2 left-1/2 transform -translate-x-1/2 bg-navy/30 backdrop-blur-sm border border-beige/20 shadow-md z-50 rounded-xl transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
      }`}
    >
      <div className="px-2 py-3 flex items-center relative overflow-hidden">
        {showLeft && (
          <button
            className="absolute left-2 bg-white p-2 rounded-full shadow-md text-gray-500 hover:text-blue-600 transition-colors duration-300 z-10"
            onClick={() => scroll("left")}
          >
            <FaChevronLeft size={16} />
          </button>
        )}

        <nav ref={navRef} className="flex-1 overflow-x-auto scroll-smooth scrollbar-hide">
          <ul className="flex space-x-6 min-w-max px-6 justify-center">
            {navLinks.map((link, index) => (
              <li key={index} className="whitespace-nowrap group">
                <Link
                  to={link.href}
                  className="relative text-teal font-medium transition duration-300 group-hover:text-navy"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-navy transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {showRight && (
          <button
            className="absolute right-2 bg-white p-2 rounded-full shadow-md text-gray-500 hover:text-blue-600 transition-colors duration-300 z-10"
            onClick={() => scroll("right")}
          >
            <FaChevronRight size={16} />
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
