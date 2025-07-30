import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        setOpenItems(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const faqData = [
        {
            question: "What are Outsourcing accounting & bookkeeping services?",
            answer: "Outsourcing accounting & bookkeeping services involves hiring a third-party firm or individual to manage some or all of a business's accounting tasks. This includes bookkeeping, payroll, preparing financial statements, and tax preparation. Companies may choose to outsource these functions to Accounting Outsourcing Companies in USA or abroad for various reasons, such as saving time and money, accessing specialized expertise, or improving efficiency and accuracy. AccuEasee is recognized among the top Bookkeeping Outsourcing Companies and is committed to delivering exceptional service."
        },
        {
            question: "Why Choose AccuEasee outsourcing Bookkeeping services?",
            answer: [
                "Cost Savings: Outsourcing bookkeeping can be more cost-effective than hiring in-house staff, especially for small businesses.",
                "Access to Expertise: AccuEasee has a team of professionals with a wide range of skills and expertise.",
                "Improved Efficiency: Businesses can free up time and resources to focus on their core competencies.",
                "Flexibility: Scale accounting services up or down as needed.",
                "Risk Management: Mitigate the risk of errors and mistakes with professional oversight."
            ]
        },
        {
            question: "What countries do you serve?",
            answer: "We actively provide services across all major countries including USA, UK, India, Canada, and Australia. Our global presence allows us to serve clients in different time zones effectively."
        },
        {
            question: "What software do you work with?",
            answer: "We work with all major accounting software including QuickBooks, Xero, Sage, and many others. Our team is trained on the latest technologies to ensure seamless integration with your existing systems."
        },
        {
            question: "How do you ensure data security?",
            answer: "Accounting data is hosted on secure AWS infrastructure, leveraging AWS’s compliance and security controls. Access to sensitive systems is protected using multi-factor authentication (MFA) to enhance identity verification and prevent unauthorized access."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked <span className="text-blue-700">Questions</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Get answers to common questions about our services
                    </p>
                </div>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 rounded-xl transition-colors"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                    {item.question}
                                </h3>
                                {openItems.includes(index) ? (
                                    <ChevronUp className="h-5 w-5 text-blue-700 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-blue-700 flex-shrink-0" />
                                )}
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ${openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="px-8 pb-6">
                                    {Array.isArray(item.answer) ? (
                                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                                            {item.answer.map((point, idx) => (
                                                <li key={idx}>{point}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-600 leading-relaxed">
                                            {item.answer}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
