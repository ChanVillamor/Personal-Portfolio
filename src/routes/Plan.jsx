import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

function Plan() {
  return (
    <div className="flex flex-col min-h-screen bg-beige">
      <section className="w-full min-h-screen flex flex-col items-center px-4 bg-beige0 py-24">
        <motion.div
          className="max-w-4xl w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl font-semibold font-satisfy text-navy text-center text-primary mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            🌱 My Future Plans
          </motion.h2>

          <div className="space-y-10 text-navy text-base leading-relaxed">
            {[
              {
                title: '💻 Career & Skills Growth',
                content: (
                  <>
                    <p className='text-justify text-teal'>
                      I want to become more than just someone who builds websites—I want to be someone who{' '}
                      <span className="font-medium">crafts experiences</span>. My goal is to confidently work as a{' '}
                      <span className="font-medium">full-stack developer</span>, mastering tools like React, Laravel,
                      and exploring deeper with technologies like Next.js, Node.js, and RESTful APIs.
                    </p>
                    <p className="mt-2 text-justify text-teal">
                      Design will always be close to my heart. I'm continuously exploring{' '}
                      <span className="font-medium">UI/UX design</span>, aiming to create clean, accessible, and
                      intuitive interfaces. Learning design systems, motion graphics, and improving my Figma workflow
                      are all part of this plan.
                    </p>
                    <p className="mt-2 text-justify text-teal">
                      Eventually, I want to <span className="italic">launch my own app or platform</span>—something
                      that not only works, but speaks to people.
                    </p>
                  </>
                ),
              },
              {
                title: '🌏 Community & Collaboration',
                content: (
                  <p className='text-justify text-teal'>
                    I see myself actively participating in developer communities, contributing to open source, and
                    even mentoring others. I want to collaborate on meaningful projects, especially with people who
                    share the same energy and mindset.
                  </p>
                ),
              },
              {
                title: '🌟 Personal Growth',
                content: (
                  <ul className="list-disc list-inside space-y-1">
                    <li className='text-justify text-teal'>
                      <span className="font-medium ">Confidence</span> – Learning to speak up, trust my ideas, and
                      present myself without hesitation.
                    </li>
                    <li className='text-justify text-teal'>
                      <span className="font-medium">Communication</span> – Expressing thoughts clearly, giving
                      feedback, and collaborating more effectively.
                    </li>
                    <li className='text-justify text-teal'>
                      <span className="font-medium">Mindset</span> – Building resilience and a growth-oriented
                      perspective. Mistakes = lessons.
                    </li>
                    <li className='text-justify text-teal'>
                      <span className="font-medium">Balance</span> – Making space for volleyball, music, podcasts,
                      anime, and traveling. These fuel creativity and well-being.
                    </li>
                  </ul>
                ),
              },
              {
                title: '🛤️ Long-Term Vision',
                content: (
                  <p className='text-justify text-teal'>
                    In the long run, I dream of working on projects that create impact—joining a company or startup
                    that values creativity, innovation, and collaboration. And maybe one day…{' '}
                    <span className="italic">starting something of my own</span>.
                  </p>
                ),
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                {section.content}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <Footer/>
    </div>
  );
}

export default Plan;
