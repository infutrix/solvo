import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Package } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Package className="h-8 w-8 text-blue-700 group-hover:text-orange-400 transition-colors duration-200" />
            <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
              Solvo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive('/') ? 'text-blue-700 border-b-2 border-blue-700' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive('/about') ? 'text-blue-700 border-b-2 border-blue-700' : ''
              }`}
            >
              About Us
            </Link>
            <Link
              to="/for-businesses"
              className={`text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive('/for-businesses') ? 'text-blue-700 border-b-2 border-blue-700' : ''
              }`}
            >
              For Businesses
            </Link>
            <Link
              to="/become-partner"
              className={`text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive('/become-partner') ? 'text-blue-700 border-b-2 border-blue-700' : ''
              }`}
            >
              Become a Partner
            </Link>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/for-businesses#quote"
              className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-700 p-2 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="space-y-2">
              <Link
                to="/"
                className={`block px-3 py-2 text-gray-700 hover:text-blue-700 hover:bg-gray-50 rounded transition-colors duration-200 ${
                  isActive('/') ? 'text-blue-700 bg-blue-50' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 text-gray-700 hover:text-blue-700 hover:bg-gray-50 rounded transition-colors duration-200 ${
                  isActive('/about') ? 'text-blue-700 bg-blue-50' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/for-businesses"
                className={`block px-3 py-2 text-gray-700 hover:text-blue-700 hover:bg-gray-50 rounded transition-colors duration-200 ${
                  isActive('/for-businesses') ? 'text-blue-700 bg-blue-50' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                For Businesses
              </Link>
              <Link
                to="/become-partner"
                className={`block px-3 py-2 text-gray-700 hover:text-blue-700 hover:bg-gray-50 rounded transition-colors duration-200 ${
                  isActive('/become-partner') ? 'text-blue-700 bg-blue-50' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Become a Partner
              </Link>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-700 hover:bg-gray-50 rounded transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
              <Link
                to="/for-businesses#quote"
                className="block mt-4 bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;