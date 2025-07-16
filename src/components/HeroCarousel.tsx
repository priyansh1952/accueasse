import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Building2, Users } from 'lucide-react';

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=1920',
            title: 'Accounting Services to Build Your Business',
            subtitle: 'Trusted by 500+ businesses worldwide for accurate financial management and strategic growth',
            businessCTA: 'For Businesses',
            firmCTA: 'For Accounting Firms'
        },
        {
            id: 2,
            image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
            title: 'Professional Bookkeeping & Tax Solutions',
            subtitle: 'Streamline your finances with our expert team of certified accountants and advanced technology',
            businessCTA: 'Get Started Today',
            firmCTA: 'Partner With Us'
        },
        {
            id: 3,
            image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920',
            title: 'Global Financial Expertise at Your Service',
            subtitle: 'Serving clients across USA, UK, and India with 24/7 support and secure data management',
            businessCTA: 'Free Consultation',
            firmCTA: 'Learn More'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="relative h-screen overflow-hidden">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                        }`}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-10"></div>
                    <img
                        src={slide.image}
                        alt={`Slide ${slide.id}`}
                        className="w-full h-full object-cover"
                    />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                            <div className="animate-fade-in">
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                                    <span className="block">{slide.title}</span>
                                </h1>
                                <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
                                    {slide.subtitle}
                                </p>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <Link
                                        to="/contact"
                                        className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-blue-500/25 hover:scale-105 hover:-translate-y-1"
                                    >
                                        <Building2 className="mr-3 h-6 w-6" />
                                        {slide.businessCTA}
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                        to="/services"
                                        className="group bg-white/20 backdrop-blur-sm text-white border-2 border-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:scale-105 hover:-translate-y-1"
                                    >
                                        <Users className="mr-3 h-6 w-6" />
                                        {slide.firmCTA}
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'bg-white scale-125'
                                : 'bg-white/50 hover:bg-white/75'
                            }`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 right-8 z-30 text-white animate-bounce">
                <div className="flex flex-col items-center">
                    <span className="text-sm mb-2 opacity-75">Scroll Down</span>
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroCarousel;