import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Pierre Dubois",
      role: "CEO, Tech Solutions",
      content: "Une équipe exceptionnelle qui a parfaitement compris nos besoins."
    },
    {
      name: "Sophie Laurent",
      role: "Marketing Director",
      content: "Des résultats impressionnants et un support client remarquable."
    },
    {
      name: "Marc Antoine",
      role: "Startup Founder",
      content: "Je recommande vivement leurs services de développement web."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Témoignages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
