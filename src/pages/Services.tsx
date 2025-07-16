import React from 'react';
import { Calculator, FileText, CreditCard, BarChart3, Users, Shield } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: Calculator,
            title: 'Bookkeeping',
            description: 'Accurate daily transaction recording, account reconciliation, and financial record maintenance.',
            features: ['Daily transaction recording', 'Bank reconciliation', 'Accounts payable/receivable', 'Financial statements']
        },
        {
            icon: CreditCard,
            title: 'Payroll Management',
            description: 'Complete payroll processing, tax calculations, and compliance management.',
            features: ['Payroll processing', 'Tax calculations', 'Direct deposit setup', 'Compliance reporting']
        },
        {
            icon: FileText,
            title: 'Tax Preparation',
            description: 'Professional tax preparation and filing services for individuals and businesses.',
            features: ['Tax return preparation', 'Tax planning', 'IRS representation', 'Audit support']
        },
        {
            icon: BarChart3,
            title: 'Financial Reporting',
            description: 'Comprehensive financial analysis and reporting to guide business decisions.',
            features: ['Monthly/quarterly reports', 'Cash flow analysis', 'Budget planning', 'KPI tracking']
        },
        {
            icon: Users,
            title: 'Business Consulting',
            description: 'Strategic financial advice to help your business grow and optimize operations.',
            features: ['Financial planning', 'Business strategy', 'Process optimization', 'Growth planning']
        },
        {
            icon: Shield,
            title: 'Compliance & Audit',
            description: 'Ensure your business meets all regulatory requirements and audit support.',
            features: ['Compliance monitoring', 'Audit preparation', 'Risk assessment', 'Documentation']
        }
    ];

    return (
        <section id="services" className="py-20 bg-section-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our <span className="gradient-text">Services</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive accounting and bookkeeping solutions tailored to your business needs
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="glassmorphism rounded-2xl p-8 group card-hover animate-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="bg-gradient-to-br from-blue-100 to-sky-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                                    <Icon className="h-8 w-8 text-blue-700 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-gray-600">
                                            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mr-3"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;