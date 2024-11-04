// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Layout from './pages/layout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/about';
import ProjectsPage from './pages/projet';
import ContactPage from './pages/contact';
import PortfolioPage from './components/Portfolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="portfolio" element={<PortfolioPage/>}/>
          {/* Route 404 */}
          <Route 
            path="*" 
            element={
              <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                  <h1 className="text-6xl font-bold text-gray-900">404</h1>
                  <p className="text-xl text-gray-600 mt-4">Page non trouvée</p>
                  <a 
                    href="/" 
                    className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                  >
                    Retour à l'accueil
                  </a>
                </div>
              </div>
            } 
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;