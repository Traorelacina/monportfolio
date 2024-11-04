import React from 'react';
import ServicesSection from './service';
import TeamSection from './TeamSection';
import TestimonialsSection from './Temoignages';


const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white">
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
     
    </div>
  );
};

export default Portfolio;
