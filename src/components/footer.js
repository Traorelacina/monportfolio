// Footer.js
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: traorelac01@gmail.com</li>
              <li>Tél: +225 0584656447</li>
              <li>Abidjan, côte d'ivoire</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Accueil</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white">Projets</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white">À propos</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Réseaux Sociaux</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                GitHub
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} TRAORE LACINA. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;