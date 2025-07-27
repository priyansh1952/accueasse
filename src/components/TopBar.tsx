import React from 'react';
import { Phone, Mail, Linkedin } from 'lucide-react';

const TopBar = () => {
    const contacts = [
        { country: 'USA', flag: '🇺🇸', phone: '+1 (555) 123-4567' },
        { country: 'India', flag: '🇮🇳', phone: '+91 9785216220' }
    ];

    return (
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-2 text-sm border-b border-slate-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-y-2">
                    {/* Contact Info */}
                    <div className="flex flex-wrap items-center gap-x-6">
                        {contacts.map((contact, index) => (
                            <div key={index} className="flex items-center gap-x-2 group">
                                <span className="text-lg">{contact.flag}</span>
                                <span className="font-medium text-slate-300">{contact.country}:</span>
                                <a
                                    href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`}
                                    className="hover:text-blue-300 transition-colors flex items-center group-hover:scale-105 transform duration-200"
                                    aria-label={`Call ${contact.country}`}
                                >
                                    <Phone className="h-3 w-3 mr-1" />
                                    {contact.phone}
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Email and LinkedIn */}
                    <div className="flex items-center space-x-4">
                        <a
                            href="https://mail.google.com/mail/?view=cm&to=info@accueasee.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-300 transition-all duration-200 hover:scale-110 transform"
                            title="Compose email to info@accueasee.com"
                            aria-label="Compose email in Gmail"
                        >
                            <Mail className="h-4 w-4" />
                        </a>
                        <a
                            href="http://www.linkedin.com/in/accueasee"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-300 transition-all duration-200 hover:scale-110 transform"
                            title="Visit our LinkedIn"
                            aria-label="Accueasee LinkedIn Profile"
                        >
                            <Linkedin className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
