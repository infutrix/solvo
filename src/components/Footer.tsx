import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Phone, Mail, MapPin, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Solvo */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Package className="h-8 w-8 text-orange-400" />
              <span className="text-2xl font-bold">Solvo</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional delivery partner solutions for businesses across the UAE. 
              We recruit, train, and manage delivery fleets so you can focus on growing your business.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-orange-400 text-sm transition-colors duration-200">
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-orange-400 text-sm transition-colors duration-200">
                About Us
              </Link>
              <Link to="/for-businesses" className="block text-gray-300 hover:text-orange-400 text-sm transition-colors duration-200">
                For Businesses
              </Link>
              <Link to="/become-partner" className="block text-gray-300 hover:text-orange-400 text-sm transition-colors duration-200">
                Become a Partner
              </Link>
              <a href="#contact" className="block text-gray-300 hover:text-orange-400 text-sm transition-colors duration-200">
                Contact Us
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Business Bay, Dubai,<br />United Arab Emirates
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+971 4 XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">contact@solvo.ae</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-orange-400 p-3 rounded-full transition-all duration-200 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-orange-400 p-3 rounded-full transition-all duration-200 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Solvo. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;