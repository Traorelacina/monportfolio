// Projects.js
import React from 'react';
import image from '../assets/E.jpg';
import imag from '../assets/B.webp'

const ProjectCard = ({ title, description, image, tags, link }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full h-48 object-cover" src={image} alt={title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">
        {description}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      {tags.map((tag, index) => (
        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{tag}
        </span>
      ))}
    </div>
    <div className="px-6 pb-4">
      <a
        href={link}
        className="text-indigo-600 hover:text-indigo-800 font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        Voir le projet →
      </a>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "E-commerce App",
      description: "Une application de commerce électronique complète avec panier et paiement",
      image: image,
      tags: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Portfolio",
      description: "Un portfolio personnel moderne et réactif",
      image: imag,
      tags: ["React", "Tailwind", "Responsive"],
      link: "#"
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Mes Projets
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Découvrez quelques-uns de mes travaux récents
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;