// navLinks
export const navLinks = [
   { href: "/", label: "Home" },
   { href: "/about", label: "About Me" },
   { href: "/skill", label: "Skill" },
   { href: "/projects", label: "Project" },
   { href: "/learning", label: "Learning" },
   { href: "/plan", label: "Future Plan" },  // Changed href for future plan
   { href: "/resume", label: "Resume" },    // Changed href for resume section
   { href: "/contact", label: "Contact" },
];

// data/index.js or data.js
import volleyball from '../assets/interest-icon/volleyball.jpg';
import music from '../assets/interest-icon/listening.jpg';
import podcast from '../assets/interest-icon/podcast.jpg';
import anime from '../assets/interest-icon/anime.jpg';
import tech from '../assets/interest-icon/tech.jpg';
import travel from '../assets/interest-icon/travel.jpg';

export const interest = [
  { interestImg: volleyball, label: 'Volleyball' },
  { interestImg: music, label: 'Music' },
  { interestImg: podcast, label: 'Podcast' },
  { interestImg: anime, label: 'Anime' },
  { interestImg: tech, label: 'Tech' },
  { interestImg: travel, label: 'Travel' },
];

// certificates
import cert1 from '../assets/certificates/1.jpg';
import cert2 from '../assets/certificates/2.jpg';
import cert3 from '../assets/certificates/3.jpg';
import cert4 from '../assets/certificates/4.jpg';

export const certificates = [
  {
    certImg: cert1,
    description: 'Completed 300+ hours of coursework covering HTML, CSS, Flexbox, and responsive layouts at freeCodeCamp.',
  },
  {
    certImg: cert2,
    description: 'Mastered HTML basics including tags, forms, and semantic structure through an interactive course at SoloLearn.',
  },
  {
    certImg: cert3,
    description: 'Learned styling techniques, layout systems, and responsive design principles at SoloLearn.',
  },
  {
    certImg: cert4,
    description: 'Focused on media queries, mobile-first design, and best practices for responsiveness at SoloLearn.',
  },
];

// src/data/projects.js
import calculator from '../assets/project-img/calculator.png';
import pizza from '../assets/project-img/pizza.png';
import restaurant from '../assets/project-img/restaurant.png';
import quote from '../assets/project-img/quote.png';
import myportfolio from '../assets/project-img/myportfolio.png';

// Import React Icons
import { FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa'; // Import specific icons

// Projects Data
export const projects = [
  {
    image: myportfolio,
    title: 'Personal Portfolio',
    description: 'A modern and responsive personal portfolio website built using React.js, Tailwind CSS, and Framer Motion.',
    githubLink: 'https://github.com/ChanVillamor/Chan-Portfolio',
    demoLink: 'https://chanvillamor-portfolio.netlify.app',
    technologies: ['react js', 'js', 'tailwind', 'framer motion'],
  },
  {
    image: restaurant,
    title: 'Restaurant Web Page',
    description: 'A sleek, restaurant reservation webpage built on the front end using HTML, CSS, and JavaScript.',
    githubLink: 'https://github.com/chanvillamor/Restaurant-web-page',
    demoLink: 'https://jumawid-ampuan.netlify.app/',
    technologies: ['html5', 'css3', 'js'], // Using icon names for technologies
  },
  {
    image: pizza,
    title: 'Pizza Store Web Page',
    description: 'A simple, pizza store webpage built on the front end using HTML, CSS, and JavaScript.',
    githubLink: 'https://github.com/ChanVillamor/pizzalicious-website',
    demoLink: 'https://chanvillamor.github.io/Restaurant-web-page/',
    technologies: ['html5', 'css3', 'js'], // Using icon names for technologies
  },
  {
    image: calculator,
    title: 'Simple Calculator',
    description: 'A straightforward calculator built with JavaScript, offering essential functions for basic arithmetic operations.',
    githubLink: 'https://github.com/ChanVillamor/Simple-Calculator',
    demoLink: 'https://chanvillamor.github.io/Simple-Calculator/',
    technologies: ['js'], // Icon names for technologies
  },
  {
    image: quote,
    title: 'Quote Generator',
    description: 'A JavaScript-powered web-based quote generator that uses an array to display inspiring quotes.',
    githubLink: 'https://github.com/ChanVillamor/learning-DOM---JS/tree/main/PR1%20Quote%20generator%20js',
    demoLink: 'https://chanvillamor.github.io/learning-DOM---JS/PR1%20Quote%20generator%20js/',
    technologies: ['js'], // Icon names for technologies
  },
];

