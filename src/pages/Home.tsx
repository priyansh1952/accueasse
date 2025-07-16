import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import About from '../components/About';
import StatsCounter from '../components/StatsCounter';;
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import SecuritySection from '../components/SecuritySection';
import TestimonialsSection from '../components/TestimonialsSection';
import ROICalculator from '../components/ROICalculator';
import BlogSection from '../components/BlogSection';
import FAQ from '../components/FAQ';
import ContactSection from '../components/ContactSection';

const Home = () => {
    return (
        <div className="pt-12">
            <HeroCarousel />
            <About />
            <StatsCounter />
            <Services />
            <WhyChooseUs />
            <SecuritySection />
            <TestimonialsSection />
            <ROICalculator />
            <BlogSection />
            <FAQ />
            <ContactSection />
        </div>
    );
};

export default Home;