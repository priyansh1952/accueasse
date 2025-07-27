import React from 'react';
import { Mail, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Security', href: '/security' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'Bookkeeping ', href: '/services' },
    { name: 'Accounting Software Integration & Migration', href: '/services' },
    { name: 'Accounts Payables', href: '/services' },
    { name: 'Accounts Receivables', href: '/services' },
    { name: 'Management Reporting', href: '/services' },
    { name: 'Virtual CFO Services', href: '/services' }
  ];

  const countries = [
    { name: 'USA', flag: '🇺🇸', phone: '+1 (555) 123-4567' },
    { name: 'India', flag: '🇮🇳', phone: '+91 9785216220' }
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
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    {link.name}
                  </a>
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
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@accueasee.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@accueasee.com
                </a>
              </div>

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

              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  A-25 1st floor 103, Sunshine Residency, Shastri Nagar, Jaipur 302016
                </span>
              </div>

              <div className="pt-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-3">Global Offices</h4>
                {countries.map((country) => (
                  <div key={country.name} className="flex items-center mb-2">
                    <span className="text-lg mr-2">{country.flag}</span>
                    <span className="text-sm text-gray-400 mr-2">{country.name}:</span>
                    <a
                      href={`tel:${country.phone.replace(/[^+\d]/g, '')}`}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {country.phone}
                    </a>
                  </div>
                ))}
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
            <div className="text-sm text-gray-400">
              Serving clients Globally
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
