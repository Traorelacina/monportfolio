import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import homme from '../assets/homm.jpeg'
import homm from '../assets/home.jpeg'
import femme from '../assets/femme.jpeg'


const TeamSection = () => {
  const team = [
    {
      name: "Sarah Martin",
      role: "Développeuse Frontend",
      image: homme
    },
    {
      name: "Jean Dupont",
      role: "Designer UI/UX",
      image: homm
    },
    {
      name: "Marie Claire",
      role: "Marketing Manager",
      image: femme
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Notre Équipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
