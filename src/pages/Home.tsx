import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import SecuritySection from '../components/SecuritySection';
import FAQ from '../components/FAQ';
import ContactSection from '../components/ContactSection';

const Home = () => {
    return (
        <div className="pt-12">
            <HeroCarousel />
            <About />
            <Services />
            <WhyChooseUs />
            <SecuritySection />
            <FAQ />
            <ContactSection />
        </div>
    );
};

export default Home;