import React, { useState } from 'react';
import ServiceCard from './serviceCart'; 
import { Briefcase } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Développement Web",
      description: "Création de sites web modernes et responsifs",
      icon: <Briefcase className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Design UX/UI",
      description: "Conception d'interfaces utilisateur intuitives",
      icon: <Briefcase className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Marketing Digital",
      description: "Stratégies marketing pour votre croissance",
      icon: <Briefcase className="w-6 h-6 text-blue-600" />
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const servicesToShow = 3; // Nombre de services à afficher

  const nextService = () => {
    if (currentIndex < services.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevService = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
        <div className="flex overflow-hidden ">
          {services.slice(currentIndex, currentIndex + servicesToShow).map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <button
          onClick={prevService}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
          disabled={currentIndex === 0}
        >
          ◀
        </button>
        <button
          onClick={nextService}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
          disabled={currentIndex >= services.length - 1}
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
