import React from 'react';
import {
    Calculator,
    RefreshCcw,
    CreditCard,
    DollarSign,
    BarChart3,
    Briefcase
} from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: Calculator,
            title: 'Bookkeeping',
            features: [
                'Chart of Accounts Preparation, Invoices & Expenses posting, Bank Reconciliation, Etc.',
                'Accurate daily transaction recording and financial record maintenance.',
                'Bookkeeping Automation: Full-Service AI Accounting Workflows.',
                'Catch-Up Bookkeeping Services'
            ]
        },
        {
            icon: RefreshCcw,
            title: 'Accounting Software Integration & Migration',
            features: [
                'Customization aligned with the distinct workflows of consulting practices.',
                'Migration and setup of: QuickBooks, Xero, Zoho, Sage, Etc.'
            ]
        },
        {
            icon: CreditCard,
            title: 'Accounts Payables',
            features: [
                'Bill.com, Dext.com & Maintaining and reviewing payment spreadsheets.',
                'Vendor and contractor payment management.'
            ]
        },
        {
            icon: DollarSign,
            title: 'Accounts Receivables',
            features: [
                'Improved receivables management for better cash flow performance.',
                'Invoice Processing, Account Reconciliations & Aging analysis, Etc.'
            ]
        },
        {
            icon: BarChart3,
            title: 'Management Reporting',
            features: [
                'Comprehensive MIS reporting to track, analyze, and optimize business performance.',
                'Profit & Loss, Income Statement, Balance Sheet, Cash Flow reports, Etc.',
                'Customized reports that drive performance and accountability.'
            ]
        },
        {
            icon: Briefcase,
            title: 'Virtual CFO Services',
            features: [
                'Comprehensive budgeting, forward-looking forecasts, and financial performance improvement.',
                'Strategic Financial Leadership – Virtually Delivered.'
            ]
        }
    ];

    return (
        <section id="services" className="py-20 bg-section-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our <span className="gradient-text">Services</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive accounting and bookkeeping solutions tailored to your business needs
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="glassmorphism rounded-2xl p-8 group card-hover animate-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="bg-gradient-to-br from-blue-100 to-sky-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                                    <Icon className="h-8 w-8 text-blue-700 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                                    {service.title}
                                </h3>
                                {service.features.length > 0 && (
                                    <ul className="space-y-2 list-disc list-inside text-gray-600 text-sm">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
