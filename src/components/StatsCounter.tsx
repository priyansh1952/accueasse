import React, { useState, useEffect, useRef } from 'react';
import { Users, Clock, FileText, Award } from 'lucide-react';

const StatsCounter = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [counts, setCounts] = useState({
        experience: 0,
        hours: 0,
        projects: 0,
        clients: 0
    });

    const sectionRef = useRef<HTMLDivElement>(null);

    const stats = [
        {
            icon: Clock,
            label: 'Years Of Work Experience',
            value: 15,
            suffix: '+',
            color: 'text-blue-600'
        },
        {
            icon: FileText,
            label: 'Hours of Processing',
            value: 50000,
            suffix: '+',
            color: 'text-green-600'
        },
        {
            icon: Award,
            label: 'Client Projects',
            value: 2500,
            suffix: '+',
            color: 'text-purple-600'
        },
        {
            icon: Users,
            label: 'Happy Clients',
            value: 500,
            suffix: '+',
            color: 'text-orange-600'
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    animateCounters();
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    const animateCounters = () => {
        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;

        stats.forEach((stat, index) => {
            let currentCount = 0;
            const increment = stat.value / steps;

            const timer = setInterval(() => {
                currentCount += increment;

                setCounts(prev => ({
                    ...prev,
                    [index === 0 ? 'experience' : index === 1 ? 'hours' : index === 2 ? 'projects' : 'clients']: Math.floor(currentCount)
                }));

                if (currentCount >= stat.value) {
                    setCounts(prev => ({
                        ...prev,
                        [index === 0 ? 'experience' : index === 1 ? 'hours' : index === 2 ? 'projects' : 'clients']: stat.value
                    }));
                    clearInterval(timer);
                }
            }, stepDuration);
        });
    };

    const getCountValue = (index: number) => {
        switch (index) {
            case 0: return counts.experience;
            case 1: return counts.hours;
            case 2: return counts.projects;
            case 3: return counts.clients;
            default: return 0;
        }
    };

    return (
        <section ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Our Track Record
                    </h2>
                    <p className="text-xl text-blue-100">
                        Numbers that speak for our expertise and reliability
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        const countValue = getCountValue(index);

                        return (
                            <div
                                key={index}
                                className="text-center group"
                            >
                                <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                                    <Icon className="h-10 w-10 text-white" />
                                </div>
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    {countValue.toLocaleString()}{stat.suffix}
                                </div>
                                <div className="text-blue-100 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default StatsCounter;