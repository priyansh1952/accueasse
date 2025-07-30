import React from 'react';
import { Mail, MapPin, Linkedin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Security', href: '/security' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy & Usage Policy', href: '/privacy' } // ✅ Already included
  ];

  const services = [
    { name: 'Bookkeeping ', href: '/services' },
    { name: 'Accounting Software Integration & Migration', href: '/services' },
    { name: 'Accounts Payables', href: '/services' },
    { name: 'Accounts Receivables', href: '/services' },
    { name: 'Management Reporting', href: '/services' },
    { name: 'Virtual CFO Services', href: '/services' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div>
                <span className="text-2xl font-bold">AccuEasee</span>
                <div className="text-xs text-blue-400 font-medium">
                  Accounting Solutions
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional accounting and bookkeeping services trusted by businesses.
              We provide comprehensive accounting solutions to help your business thrive.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@accueasee.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@accueasee.com
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <a
                  href="https://www.linkedin.com/in/accueasee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  linkedin.com/in/accueasee
                </a>
              </div>

              {/* Phone (India) */}
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <a
                  href="tel:+919785216220"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +91 9785216220
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  A-25 1st floor 103, Sunshine Residency, Shastri Nagar, Jaipur 302016
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} AccuEasee. All rights reserved.
            </div>
            <div className="flex flex-col md:flex-row items-center text-sm text-gray-400 space-y-2 md:space-y-0 md:space-x-4">
              <span>Serving clients Globally</span>
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
