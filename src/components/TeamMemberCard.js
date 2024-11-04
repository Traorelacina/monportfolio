import React from 'react';
import { User } from 'lucide-react';

const TeamMemberCard = ({ name, role, image }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
    <div className="aspect-w-1 aspect-h-1">
      <img 
        src={image || "/api/placeholder/200/200"} 
        alt={name}
        className="w-full h-64 object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600">{role}</p>
      <div className="mt-4 flex space-x-4">
        <button className="text-blue-600 hover:text-blue-800">
          <User className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
);

export default TeamMemberCard;
