// src/components/Projects.js
import React from 'react';
import ProjectCard from '../components/ProjectCard'; // Ensure you're importing ProjectCard
import { projects } from '../data'; // Import the projects array from the data folder
import Footer from '../components/Footer';

function Projects() {
  return (
    <div className="flex flex-col min-h-screen bg-beige">
      <section className="w-full min-h-screen flex flex-col items-center py-24 px-4 bg-beige">
        {/* Heading Caption */}
        <h2 className="text-4xl md:text-4xl font-semibold font-satisfy text-navy text-center mb-8">
        💻 My Projects
        </h2>

        {/* Use flexbox for responsive layout */}
        <div className="w-full max-w-8xl mx-auto flex flex-wrap gap-8 justify-center px-4">
          {projects.map((project, index) => (
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4" key={index}>
              <ProjectCard
                image={project.image}
                title={project.title}
                description={project.description}
                githubLink={project.githubLink}
                demoLink={project.demoLink}
                technologies={project.technologies} // Pass the technologies array here
              />
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Projects;
