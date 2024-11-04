// About.js
import React from 'react';
import profil from '../assets/linkld.jpg'
// pages/AboutPage.js

const About = () => {
  return (
    <div className="bg-white py-16" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-64 lg:h-96">
            <img
              src={profil}
              alt="Profile"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              À Propos de Moi
            </h2>
            <p className="text-lg text-gray-500 mb-6">
              Développeur passionné avec plus de 2 années d'expérience dans la création
              d'applications web modernes. Spécialisé dans les technologies JavaScript, Python, PHP
              et particulièrement dans l'écosystème React et Laravel.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Formation
                </h3>
                <p className="text-gray-600">
                  Licence en Développement d'application  - Université virtuelle de côte d'ivoire (2021-2024)
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Expérience
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Développeur Frontend - Entreprise A (20XX-Présent)</li>
                  <li>Développeur Full Stack - Entreprise B (20XX-20XX)</li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Me Contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;