import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Shield, DollarSign, Users, CheckCircle, Star } from 'lucide-react';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: Clock,
            title: 'Time-Saving Solutions',
            description: 'Focus on your core business while we handle your financial needs efficiently and professionally.'
        },
        {
            icon: Shield,
            title: 'Secure & Confidential',
            description: 'Your financial data is protected with bank-level security and strict confidentiality protocols.'
        },
        {
            icon: DollarSign,
            title: 'Cost-Effective Services',
            description: 'Professional services at competitive rates, saving you money compared to in-house staff.'
        },
        {
            icon: Users,
            title: 'Expert Team',
            description: 'Certified professionals with extensive experience in accounting and bookkeeping excellence.'
        },
        {
            icon: CheckCircle,
            title: 'Accurate Results',
            description: 'Precise financial records and reports you can trust for important business decisions.'
        },
        {
            icon: Star,
            title: 'Personalized Service',
            description: 'Proficient in QuickBooks, Zoho Books, Xero, Sage, and other leading platforms—enhanced by the use of AI tools for smarter, faster accounting.'
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Why Choose <span className="text-blue-700">AccuEasee</span>?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We're committed to delivering exceptional accounting services that help your business thrive
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;
                        return (
                            <div
                                key={index}
                                className="glassmorphism rounded-2xl p-8 group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            >
                                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                                    <Icon className="h-8 w-8 text-blue-700 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                                    {reason.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
                                    {reason.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="bg-blue-700 rounded-2xl p-12 max-w-4xl mx-auto text-white shadow-xl">
                        <h3 className="text-3xl font-bold mb-6">
                            Ready to streamline and elevate your accounting processes?
                        </h3>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Join hundreds of satisfied clients who trust us with their accounting needs
                        </p>

                        <div className="flex justify-center">
                            <Link
                                to="/contact"
                                className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
                            >
                                Schedule Consultation
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-8 flex flex-wrap justify-center items-center gap-8 text-sm text-blue-100">
                            <div className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-blue-200 mr-2" />
                                <span>500+ Happy Clients</span>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-blue-200 mr-2" />
                                <span>98% Satisfaction Rate</span>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-blue-200 mr-2" />
                                <span>24/7 Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
