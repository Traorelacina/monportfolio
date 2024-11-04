import React from 'react';

const ServiceCard = ({ title, description, icon }) => (
  <div className="p-6 bg-white rounded-lg shadow-lg transition-transform hover:scale-105 ">
    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full">
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-bold text-gray-800">{title}</h3>
    <p className="text-gray-900">{description}</p>
  </div>
);

export default ServiceCard;
