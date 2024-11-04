// pages/Layout.js
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Toaster} from 'react-hot-toast';
import Portfolio from 'react-hot-toast';

const Layout = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Update page title based on current route
  useEffect(() => {
    const getPageTitle = () => {
      switch (location.pathname) {
        case '/':
          return 'Accueil | Mon Portfolio';
        case '/about':
          return 'À Propos | Mon Portfolio';
        case '/projects':
          return 'Projets | Mon Portfolio';
        case '/contact':
          return 'Contact | Mon Portfolio';
          case '/portfolio':
            return 'Portfolio | Mon Portfolio'; 
        default:
          return 'Mon Portfolio';
       
         
      }
    };

    document.title = getPageTitle();
  }, [location]);

  // Loading animation
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Page Transition Wrapper */}
        <div 
          className="animate-fadeIn"
          style={{
            animation: 'fadeIn 0.5s ease-in-out'
          }}
        >
          <Outlet />
        </div>
      </main>

      {/* Back to Top Button */}
      <BackToTopButton />

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <Toaster />

      {/* Progress Bar */}
      <ScrollProgress />
    </div>
  );
};

// Back to Top Button Component
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-all duration-300 z-50"
          aria-label="Retour en haut"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

// Scroll Progress Component
const ScrollProgress = () => {
  const [progress, setProgress] = React.useState(0);

  const calculateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = scrollTop / docHeight * 100;
    setProgress(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', calculateProgress);
    return () => window.removeEventListener('scroll', calculateProgress);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50"
    >
      <div 
        className="h-full bg-indigo-600 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};



export default Layout;