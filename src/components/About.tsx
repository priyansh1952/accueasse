import React from 'react';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

const About = () => {
    const stats = [
        { icon: Users, value: '500+', label: 'Clients Served' },
        { icon: Target, value: '10+', label: 'Years Experience' },
        { icon: Award, value: '98%', label: 'Client Satisfaction' },
        { icon: TrendingUp, value: '24/7', label: 'Support Available' },
    ];

    return (
        <section id="about" className="py-20 bg-section-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        About <span className="gradient-text">AccuEasee</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We are a team of certified public accountants dedicated to providing
                        comprehensive financial solutions for businesses of all sizes.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                    <div className="animate-slide-up">
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">
                            Your Trusted Financial Partner
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            With over a decade of experience in accounting and bookkeeping,
                            we understand the unique challenges businesses face in managing
                            their finances. Our team of certified professionals is committed
                            to delivering accurate, timely, and cost-effective solutions.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            We believe that every business deserves access to professional
                            financial services that help them make informed decisions,
                            maintain compliance, and achieve sustainable growth.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="glassmorphism px-6 py-3 rounded-full">
                                <span className="text-blue-700 font-semibold">CPA Certified</span>
                            </div>
                            <div className="glassmorphism px-6 py-3 rounded-full">
                                <span className="text-blue-700 font-semibold">QuickBooks ProAdvisor</span>
                            </div>
                            <div className="glassmorphism px-6 py-3 rounded-full">
                                <span className="text-blue-700 font-semibold">Tax Specialist</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative animate-slide-up">
                        <div className="relative z-10">
                            <img
                                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Professional accounting team"
                                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
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