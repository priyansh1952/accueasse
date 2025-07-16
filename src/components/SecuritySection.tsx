import React from 'react';
import { Shield, Lock, Server, FileCheck, Eye, Zap } from 'lucide-react';

const SecuritySection = () => {
    const securityFeatures = [
        {
            icon: Shield,
            title: 'Data Protection',
            description: 'Bank-level encryption and secure data handling protocols to protect your sensitive financial information.'
        },
        {
            icon: Lock,
            title: 'Secure Access',
            description: 'Multi-factor authentication and biometric entry systems ensure only authorized personnel access your data.'
        },
        {
            icon: Server,
            title: 'Infrastructure Security',
            description: 'State-of-the-art servers with redundant backups and 99.9% uptime guarantee for continuous service.'
        },
        {
            icon: FileCheck,
            title: 'Compliance Standards',
            description: 'Full compliance with GDPR, SOX, and other international data protection regulations.'
        },
        {
            icon: Eye,
            title: 'Audit Trails',
            description: 'Complete audit trails and monitoring systems to track all data access and modifications.'
        },
        {
            icon: Zap,
            title: 'Real-time Monitoring',
            description: '24/7 security monitoring with instant alerts for any suspicious activities or breaches.'
        }
    ];

    const certifications = [
        'ISO 27001 Certified',
        'SOC 2 Type II Compliant',
        'GDPR Compliant',
        'PCI DSS Certified',
        'HIPAA Compliant',
        'SSL/TLS Encrypted'
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Security & <span className="text-blue-700">Infrastructure</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Your data security is our top priority. We employ industry-leading security measures
                        to ensure your financial information remains safe and confidential.
                    </p>
                </div>

                {/* Security Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {securityFeatures.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-2"
                            >
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                                    <Icon className="h-8 w-8 text-blue-700 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Certifications */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Certifications & Compliance
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="bg-blue-50 text-blue-700 px-4 py-3 rounded-lg text-center font-semibold text-sm hover:bg-blue-100 transition-colors"
                            >
                                {cert}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Security Process */}
                <div className="mt-16 bg-blue-700 rounded-2xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-8 text-center">Our Security Process</h3>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                1
                            </div>
                            <h4 className="font-semibold mb-2">Secure Upload</h4>
                            <p className="text-blue-100 text-sm">Encrypted file transfer with secure portals</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                2
                            </div>
                            <h4 className="font-semibold mb-2">Protected Processing</h4>
                            <p className="text-blue-100 text-sm">Data processed in secure, isolated environments</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                3
                            </div>
                            <h4 className="font-semibold mb-2">Secure Storage</h4>
                            <p className="text-blue-100 text-sm">Encrypted storage with multiple backup locations</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                4
                            </div>
                            <h4 className="font-semibold mb-2">Safe Delivery</h4>
                            <p className="text-blue-100 text-sm">Secure delivery through encrypted channels</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecuritySection;