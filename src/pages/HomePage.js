// pages/HomePage.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, BriefcaseIcon, CodeIcon, UserIcon } from 'lucide-react';
import image from '../assets/B.png'
import imag from '../assets/D.jpg'
import imge from '../assets/C.jpeg'
import comment from '../assets/F.jpeg'
import commen from '../assets/G.jpeg'
import comm from '../assets/I.jpeg'
import SoftSkills from '../components/skills'

const HomePage = () => {
  // Animation variants pour Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen">
      {/* Section Hero avec Animation */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
         
        </div>
        
        <motion.div 
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Développeur Full Stack
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Création d'applications web modernes et performantes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            >
              Voir mes projets
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition duration-300"
            >
              Me contacter
            </Link>
          </div>
        </motion.div>
      </section>
      
      {/*omptn */}

      
        
      
      {/* Section Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <h2 className="text-4xl font-bold mb-4">Mes Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Je propose une gamme complète de services en développement web
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <div>< SoftSkills /></div>
      {/* Section Projets Récents */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <h2 className="text-4xl font-bold mb-4">Projets Récents</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez mes dernières réalisations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} 
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                  >
                    Voir plus <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300"
            >
              Voir tous les projets <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <h2 className="text-4xl font-bold mb-4">Témoignages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ce que mes clients disent de mon travail
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-lg"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <h2 className="text-4xl font-bold mb-4">Commençons un projet ensemble</h2>
            <p className="mb-8 text-indigo-100 max-w-2xl mx-auto">
              Vous avez un projet en tête ? Je serais ravi d'en discuter avec vous
              et de voir comment je peux vous aider à le réaliser.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            >
              Me contacter
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Données mockées pour les sections
const services = [
  {
    title: "Développement Frontend",
    description: "Création d'interfaces utilisateur modernes et responsives avec React et Vue.js",
    icon: <CodeIcon className="w-8 h-8 text-indigo-600" />
  },
  {
    title: "Développement Backend",
    description: "APIs robustes et évolutives avec Node.js et PHP",
    icon: <BriefcaseIcon className="w-8 h-8 text-indigo-600" />
  },
  {
    title: "UI/UX Design",
    description: "Design d'interfaces intuitives et expériences utilisateur optimisées",
    icon: <UserIcon className="w-8 h-8 text-indigo-600" />
  }
];

const projects = [
  {
    id: 1,
    title: "E-commerce Modern",
    description: "Une plateforme e-commerce complète avec panier et paiement",
    image: image,
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Application de Gestion",
    description: "Système de gestion interne pour entreprise",
    image: imag,
    technologies: ["Vue.js", "Laravel", "MySQL"],
  },
  {
    id: 3,
    title: "Application Mobile",
    description: "Application mobile de livraison de repas",
    image: imge,
    technologies: ["React Native", "Firebase"],
  }
];

const testimonials = [
  {
    name: "Marie Dubois",
    role: "CEO, TechStart",
    avatar: comm,
    text: "Un développeur exceptionnel qui a su transformer notre vision en réalité."
  },
  {
    name: "Jean Martin",
    role: "Manager, DigitalCorp",
    avatar: comment,
    text: "Travail de qualité, respect des délais et excellente communication."
  },
  {
    name: "Sophie Bernard",
    role: "Designer, CreativeStudio",
    avatar: commen,
    text: "Une collaboration agréable et des résultats qui dépassent nos attentes."
  }
];

export default HomePage;