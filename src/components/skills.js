// Skills.js
import React from 'react';

const SkillBar = ({ skill, percentage }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-gray-700">{skill}</span>
      <span className="text-sm font-medium text-gray-500">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-indigo-600 h-2.5 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const Skills = () => {
  const technicalSkills = [
    
    { skill: 'JavaScript', percentage: 85 },
    { skill: 'HTML/CSS', percentage: 95 },
    { skill: 'Node.js', percentage: 80 },
    { skill: 'TypeScript', percentage: 75 },
    { skill: 'MongoDB', percentage: 70 },
    { skill: 'Mysql' , percentage: 80},
    { skill: 'PHP' , percentage: 80},
    { skill: 'C/C++' , percentage: 50},
  ];

  const softSkills = [
    'Travail d\'équipe',
    'Communication',
    'Résolution de problèmes',
    'Gestion de projet',
    'Agilité',
    'Adaptabilité'
  ];

  return (
    <div className="bg-gray-50 py-16" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Compétences
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Mes compétences techniques et interpersonnelles
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Compétences Techniques
            </h3>
            <div>
              {technicalSkills.map((skill, index) => (
                <SkillBar
                  key={index}
                  skill={skill.skill}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
                >
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;