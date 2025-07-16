import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-20 pb-16 lg:pt-32 lg:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Professional
                            <span className="text-blue-700"> Accounting</span> &
                            <span className="text-blue-700"> Bookkeeping</span> Services
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Streamline your finances with our expert accounting solutions.
                            From bookkeeping to tax preparation, we help your business grow
                            with confidence and clarity.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                            <Link
                                to="/contact"
                                className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-all duration-300 flex items-center justify-center group"
                            >
                                Get a Free Consultation
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/services"
                                className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 hover:text-white transition-all duration-300"
                            >
                                Our Services
                            </Link>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-600">
                            <div className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                                <span>Certified Public Accountants</span>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                                <span>10+ Years Experience</span>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                                <span>500+ Satisfied Clients</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative z-10">
                            <img
                                src="https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Professional accountant working with financial documents"
                                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                            />
                        </div>
                        <div className="absolute -top-6 -right-6 w-full h-full bg-blue-200 rounded-2xl -z-10"></div>
                        <div className="absolute -bottom-6 -left-6 w-full h-full bg-blue-100 rounded-2xl -z-20"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             