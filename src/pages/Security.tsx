import React from 'react';
import { LockKeyhole, ShieldCheck, Server, FileCheck } from 'lucide-react';

const SecuritySection = () => {
    const securityPoints = [
        {
            icon: LockKeyhole,
            title: 'End-to-End Encryption',
            description: 'All accounting data is encrypted from upload to access—ensuring safety at every step.',
        },
        {
            icon: ShieldCheck,
            title: 'Multi-layered Data Protection',
            description: 'Robust firewalls, intrusion detection, and access controls to prevent unauthorized entry.',
        },
        {
            icon: Server,
            title: 'Secure Cloud Storage',
            description: 'We use AWS servers with strict access protocols to ensure only authorized personnel access data.',
        },
        {
            icon: FileCheck,
            title: 'Security Audits & Compliance',
            description: 'Regular vulnerability testing and full compliance with international standards.',
        },
    ];

    const certifications = [
        'ISO 27001 Certified',
        'SOC 2 Type II Compliant',
        'GDPR Compliant',
        'PCI DSS Certified',
        'HIPAA Compliant',
        'SSL/TLS Encrypted',
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Security & <span className="text-blue-700">Infrastructure</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        At Accueasee Services, protecting client data is our top priority and we employ industry-leading security measures to ensure your financial information remains safe and confidential. That’s why we leverage Amazon Web Services (AWS) security infrastructure — the same trusted platform used by Fortune 500 companies and leading global institutions.
                    </p>
                </div>

                {/* Security Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {securityPoints.map((point, index) => {
                        const Icon = point.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-2"
                            >
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                                    <Icon className="h-8 w-8 text-blue-700 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{point.title}</h3>
                                <p className="text-gray-600">{point.description}</p>
                            </div>
                        );
                    })}
                </div>

           

                {/* Final Statement */}
                <div className="mt-8 bg-blue-50 border-l-4 border-blue-700 p-6 rounded-xl text-blue-900 text-base font-medium shadow-sm">
                    Our systems are designed to ensure your data remains confidential, secure, and accessible only to authorized personnel — no compromises.
                </div>
            </div>
        </section>
    );
};

export default SecuritySection;
