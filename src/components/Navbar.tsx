import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 20);

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const services = [
        { name: 'Bookkeeping ', href: '/services' },
        { name: 'Accounting Software Integration & Migration', href: '/services' },
        { name: 'Accounts Payables', href: '/services' },
        { name: 'Accounts Receivables', href: '/services' },
        { name: 'Management Reporting', href: '/services' },
        { name: 'Virtual CFO Services', href: '/services' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav
            className={`fixed w-full z-40 transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
                } ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
                    : 'bg-white/90 backdrop-blur-sm'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center py-1 group">
                        <img
                            src="/Accuease-logo_website.png"
                            alt="Accuease Logo"
                            className="h-20 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <Link
                            to="/about"
                            className={`relative text-gray-700 hover:text-blue-700 transition-all duration-300 font-medium group ${isActive('/about') ? 'text-blue-700' : ''
                                }`}
                        >
                            About Us
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                        </Link>

                        {/* Services Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <button
                                className={`flex items-center space-x-1 text-gray-700 hover:text-blue-700 transition-all duration-300 font-medium group ${isActive('/services') ? 'text-blue-700' : ''
                                    }`}
                            >
                                <span>Accounting & Bookkeeping Services</span>
                                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''
                                    }`} />
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                            </button>

                            <div
                                className={`absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-100 py-3 transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                                    }`}
                            >
                                {services.map((service) => (
                                    <Link
                                        key={service.name}
                                        to={service.href}
                                        className="block px-6 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 hover:translate-x-2"
                                        onClick={() => setIsServicesOpen(false)}
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link
                            to="/security"
                            className={`relative text-gray-700 hover:text-blue-700 transition-all duration-300 font-medium group ${isActive('/security') ? 'text-blue-700' : ''
                                }`}
                        >
                            Security
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            to="/contact"
                            className={`relative text-gray-700 hover:text-blue-700 transition-all duration-300 font-medium group ${isActive('/contact') ? 'text-blue-700' : ''
                                }`}
                        >
                            Contact
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                        </Link>

                        {/* Enquiry Button */}
                        <Link
                            to="/contact"
                            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-0.5"
                        >
                            Enquire Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-blue-700 transition-colors p-2"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        } overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-100`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link
                            to="/about"
                            className="block px-3 py-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            About Us
                        </Link>

                        {/* Mobile Services */}
                        <div className="px-3 py-2">
                            <button
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                                className="flex items-center space-x-1 text-gray-700 hover:text-blue-700 transition-colors w-full text-left"
                            >
                                <span>Services</span>
                                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''
                                    }`} />
                            </button>
                            <div
                                className={`transition-all duration-300 ${isServicesOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                                    } overflow-hidden`}
                            >
                                <div className="mt-2 pl-4 space-y-1">
                                    {services.map((service) => (
                                        <Link
                                            key={service.name}
                                            to={service.href}
                                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200"
                                            onClick={() => {
                                                setIsOpen(false);
                                                setIsServicesOpen(false);
                                            }}
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/security"
                            className="block px-3 py-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Security
                        </Link>
                        <Link
                            to="/contact"
                            className="block px-3 py-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                        <Link
                            to="/contact"
                            className="block mx-3 mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-center font-semibold"
                            onClick={() => setIsOpen(false)}
                        >
                            Enquire Now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
