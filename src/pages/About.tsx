import React from 'react';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

const About = () => {
    const stats = [
        { icon: Users, value: '500+', label: 'Clients Served' },
        { icon: Target, value: '45+', label: 'Years Experience' },
        { icon: Award, value: '98%', label: 'Client Satisfaction' },
        { icon: TrendingUp, value: '24/7', label: 'Support Available' },
    ];

    return (
        <section id="about" className="py-20 bg-section-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        About <span className="gradient-text">AccuEasee</span>
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
                        We are a team of certified Chartered Accountants dedicated to providing
                        comprehensive financial solutions for businesses of all sizes.
                    </p>
                    <div className="my-8 flex justify-center">
                        <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full shadow-md"></div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                    <div className="animate-slide-up">
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">
                            Your Trusted Financial Partner
                        </h3>

                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            We are a dedicated Accounting & Bookkeeping Vertical of a leading firm that has been delivering excellence in Taxation, Audit, and Accounting Services for over 45 years. Now, expanding with full force into that legacy with overseas/international Accounting.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            Our strategic expansion underscores our commitment to delivering complete financial solutions under one roof. We offer deep expertise across US, UK, Australian GAAP, and a wide range of global accounting frameworks.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            Our team is led by Chartered Accountants with over 5 years of hands-on experience at Big Four firms and top-tier fund accounting organizations, ensuring international standards are met with precision and local insight.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            Backed by years of industry experience, regulatory knowledge, and client trust, and further strengthened by our network of partnered CPAs across key global jurisdictions, we are fully equipped to support businesses with end-to-end financial transparency and control.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            No matter your size, our seasoned professionals deliver reliable accounting services with a focus on accuracy, compliance, and transparency.
                        </p>
                        <p className="text-blue-700 font-semibold italic text-lg">
                            Where legacy meets innovation, we evolve as your business grows.
                        </p>
                    </div>

                    <div className="relative animate-slide-up -mt-10">
                        <div className="relative z-10">
                            <img
                                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Professional accounting team"
                                className="rounded-2xl shadow-2xl w-full h-[420px] object-cover"
                            />
                        </div>
                        <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-blue-200 to-sky-200 rounded-2xl -z-10"></div>
                        <div className="absolute -bottom-6 -left-6 w-full h-full bg-gradient-to-br from-blue-100 to-sky-100 rounded-2xl -z-20"></div>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="text-center group">
                                <div className="glassmorphism w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                                    <Icon className="h-10 w-10 text-blue-700" />
                                </div>
                                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default About;
