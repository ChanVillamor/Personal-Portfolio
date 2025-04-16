import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiFramer } from 'react-icons/si';
import Button from './Button'; // Assuming Button is a separate component

const ProjectCard = ({ image, title, description, githubLink, demoLink, technologies }) => {
  // Map technology names to React Icons
  
   const techIcons = {
      html5: <FaHtml5 size={20} color="orange" />,
      css3: <FaCss3Alt size={20} color="#264de4" />,
      js: <FaJs size={20} color="#f7df1e" />,
      'react js': <FaReact size={20} color="#61DBFB" />,
      tailwind: <SiTailwindcss size={20} color="#38BDF8" />,
      'framer motion': <SiFramer size={20} color="#7F56D9" />,
   };

  return (
    <div className="max-w-[330px] rounded overflow-hidden shadow-lg bg-white border border-gray-200 p-5">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700 text-base mb-4 text-justify">{description}</p>
        {/* Render Technology Icons */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="flex items-center">
              {techIcons[tech]} {/* Render the icon */}
              <span className="ml-1 text-sm text-gray-600">{tech.toUpperCase()}</span> {/* Display technology name */}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <Button
            label="Code"
            href={githubLink}
            bgColor="bg-navy"
            textColor="text-white"
            textSize="text-sm"
            borderColor="border-teal"
            hoverColor='hover:bg-teal'
          />
          <Button
            label="Demo"
            href={demoLink}
            bgColor="bg-white"
            textColor="text-black"
            textSize="text-sm"
            borderColor="border-red-700"
            hoverColor='hover:bg-beige'
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
