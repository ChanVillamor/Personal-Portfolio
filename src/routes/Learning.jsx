import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';

const sections = [
  {
    title: '🧩 Challenges I Faced',
    content: [
      {
        heading: '1. Back-End Fundamentals & Logic',
        description:
          "One of the toughest parts was grasping the logic side of back-end development. Understanding how routes, controllers, and database queries connect felt confusing at first. It wasn’t just syntax—I struggled more with the “why” behind the code."
      },
      {
        heading: '2. Layout and Responsiveness Across Breakpoints',
        description:
          "Making layouts work smoothly across all screen sizes took trial and error. While Tailwind CSS made things easier, aligning elements and maintaining visual consistency across breakpoints wasn’t as simple as it looked. It took repeated testing and restructuring to make everything responsive and accessible."
      },
      {
        heading: '3. Time & Task Management (Self-Study)',
        description:
          "Managing time efficiently while juggling academic requirements and self-study was a real challenge. There were days where I’d feel productive, and others where motivation was low or I had no clear direction—especially when switching between coding, design, and documentation tasks."
      },
      {
        heading: '4. Impostor Syndrome',
        description:
          "Seeing others’ polished work online often made me second-guess myself. I’d ask if I was doing enough or learning fast enough. Even when I was progressing, it was hard not to feel like I was falling behind."
      },
      {
        heading: '5. Information Overload',
        description:
          "There are so many resources online that I didn’t always know where to start. I’d jump from one tutorial to the next, trying to find the “best” way to learn, which only made things more overwhelming and slowed down my momentum."
      }
    ]
  },
  {
    title: '📘 Learnings Along the Way',
    content: [
      {
        heading: 'Breaking Down the Backend',
        description:
          "I stopped trying to learn everything at once. I focused on small projects and real-world examples to understand Laravel logic and database interactions better. Step-by-step, it started making more sense."
      },
      {
        heading: 'Responsive Design',
        description:
          "Cloning websites and testing layouts on different devices helped me master Tailwind’s breakpoint system. I learned to design mobile-first and prioritize user experience on all screen sizes."
      },
      {
        heading: 'Structured Self-Study',
        description:
          "I started planning weekly goals and using tools like notes or google tasks to track what I was working on. Even on slow days, seeing a checklist helped me stay consistent and focused."
      },
      {
        heading: 'Managing Self-Doubt',
        description:
          "I learned to compare less and reflect more. Instead of measuring progress against others, I began looking at how far I’d come. Small wins—like fixing bugs or completing a new section—became proof of growth."
      },
      {
        heading: 'Filtering Resources',
        description:
          "I began curating and sticking to specific learning paths. Instead of bouncing between tutorials, I have a personal reference library of tools, cheat sheets, and resources that actually helped me move forward."
      }
    ]
  },
  {
    title: '✨ Self-Reflection',
    content: [
      {
        heading: '',
        description:
          "This experience reminded me that growth isn’t about perfection—it’s about persistence. Every challenge became a stepping stone toward understanding, confidence, and resilience. I’ve learned to trust my process, take breaks when needed, and always come back with curiosity. The journey hasn’t been perfect, but it’s been real—and I’m proud of how much I’ve grown, not just as a developer, but as a learner."
      }
    ]
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

function Learning() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-beige">
      <section className="w-full min-h-screen flex flex-col items-center pt-24 px-4 bg-beige">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="max-w-3xl w-full"
        >
          <h1 className="text-4xl md:text-4xl font-semibold font-satisfy text-navy mb-6 text-center">
            🧗‍♂️ Challenges & Learnings
          </h1>

          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeUp}
              className="mb-4 border border-gray-300 rounded-md bg-white shadow-sm"
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full text-left px-4 py-3 flex justify-between items-center font-medium text-gray-800 hover:bg-gray-100 transition"
              >
                {section.title}
                <span className="text-lg">{activeIndex === index ? '-' : '+'}</span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden px-4 pb-4 text-gray-700 space-y-4"
                  >
                    {section.content.map((item, idx) => (
                      <div key={idx}>
                        {item.heading && <h3 className="font-semibold">{item.heading}</h3>}
                        <p className='text-justify text-teal'>{item.description}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}

export default Learning;
