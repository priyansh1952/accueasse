    import React from 'react';
    import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

    const TopBar = () => {
        const contacts = [
            { country: 'USA', flag: '🇺🇸', phone: '+1 (555) 123-4567' },
            { country: 'UK', flag: '🇬🇧', phone: '+44 20 7123 4567' },
            { country: 'India', flag: '🇮🇳', phone: '+91 98765 43210' }
        ];

        return (
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-2 text-sm border-b border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                        {/* Contact Info */}
                        <div className="flex flex-wrap items-center space-x-6">
                            {contacts.map((contact, index) => (
                                <div key={index} className="flex items-center space-x-2 group">
                                    <span className="text-lg">{contact.flag}</span>
                                    <span className="font-medium text-slate-300">{contact.country}:</span>
                                    <a
                                        href={`tel:${contact.phone}`}
                                        className="hover:text-blue-300 transition-colors flex items-center group-hover:scale-105 transform duration-200"
                                    >
                                        <Phone className="h-3 w-3 mr-1" />
                                        {contact.phone}
                                    </a>
                                </div>
                            ))}
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex items-center space-x-4">
                            <a
                                href="mailto:info@proaccounting.com"
                                className="hover:text-blue-300 transition-all duration-200 hover:scale-110 transform"
                                title="Email Us"
                            >
                                <Mail className="h-4 w-4" />
                            </a>
                            <a
                                href="#"
                                className="hover:text-blue-300 transition-all duration-200 hover:scale-110 transform"
                                title="Facebook"
                            >
                                <Facebook className="h-4 w-4" />
                            </a>
                            <a
                                href="#"
                                className="hover:text-blue-300 transition-all duration-200 hover:scale-110 transform"
                                title="Twitter"
                            >
                                <Twitter className="h-4 w-4" />
                            </a>
                            <a
                                href="#"
                                className="hover:text-blue-300 transition-all duration-200 hover:scale-110 transform"
                                title="LinkedIn"
                            >
                                <Linkedin className="h-4 w-4" />
                            </a>
                            <a
                                href="#"
                                className="hover:text-blue-300 transition-all duration-200 hover:scale-110 transform"
                                title="Instagram"
                            >
                                <Instagram className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default TopBar;