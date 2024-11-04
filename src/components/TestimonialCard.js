import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, role, content }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="flex items-center mb-4">
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} className="w-5 h-5 text-yellow-400" />
      ))}
    </div>
    <p className="text-gray-600 mb-4">"{content}"</p>
    <div className="flex items-center">
      <div>
        <h4 className="font-bold">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
