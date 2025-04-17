// src/components/Projects.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <div className="flex flex-col min-h-screen bg-beige">
      <section className="w-full min-h-screen flex flex-col items-center py-24 px-4 bg-beige">
        {/* Heading Caption with fade-up animation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-4xl font-semibold font-satisfy text-navy text-center mb-8"
        >
          💻 My Projects
        </motion.h2>

        {/* Project Cards with fade-up staggered animation */}
        <div className="w-full max-w-8xl mx-auto flex flex-wrap gap-8 justify-center px-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
            >
              <ProjectCard
                image={project.image}
                title={project.title}
                description={project.description}
                githubLink={project.githubLink}
                demoLink={project.demoLink}
                technologies={project.technologies}
              />
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Projects;
