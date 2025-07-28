import React, { useState } from 'react';
import { MessageCircle, FileText, X, Phone, Mail } from 'lucide-react';

const FloatingAction = () => {
    const [isQuoteOpen, setIsQuoteOpen] = useState(false);

    return (
        <>
            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-bounce-slow"
            >
                <MessageCircle className="h-6 w-6" />
            </a>

            {/* Get Quote Floating Button */}
            <button
                onClick={() => setIsQuoteOpen(true)}
                className="fixed bottom-20 right-6 z-50 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full shadow-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 flex items-center space-x-2 animate-bounce-slow"
            >
                <FileText className="h-5 w-5" />
                <span className="font-semibold">Get A Quote</span>
            </button>

            {/* Quote Modal */}
            {isQuoteOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="glassmorphism rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-8">
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-2xl font-bold gradient-text">Get A Quote</h3>
                                <button
                                    onClick={() => setIsQuoteOpen(false)}
                                    className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>

                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        placeholder="Enter your phone number"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Service Required *
                                    </label>
                                    <select
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="bookkeeping">Bookkeeping</option>
                                        <option value="bank-reconciliation">Bank Reconciliation</option>
                                        <option value="payroll-reconciliation">Payroll Reconciliation</option>
                                        <option value="payroll">Accounting Software Integration & Migration</option>
                                        <option value="tax">Accounts Payables</option>
                                        <option value="reporting">Accounts Receivables</option>
                                        <option value="consulting">Management Reporting</option>
                                        <option value="compliance">Virtual CFO Services</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Company Size
                                    </label>
                                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                                        <option value="">Select company size</option>
                                        <option value="1-10">1-10 employees</option>
                                        <option value="11-50">11-50 employees</option>
                                        <option value="51-200">51-200 employees</option>
                                        <option value="200+">200+ employees</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        rows={3}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        placeholder="Tell us about your requirements..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full btn-primary"
                                >
                                    Submit Quote Request
                                </button>
                            </form>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <p className="text-sm text-gray-600 mb-4">Or contact us directly:</p>
                                <div className="flex flex-col space-y-3">
                                    <a
                                        href="tel:+91 9785216220"
                                        className="flex items-center text-blue-700 hover:text-blue-800 transition-colors group"
                                    >
                                        <Phone className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                                        +91 9785216220
                                    </a>
                                    <a
                                        href="mailto:info@accueasee.com"
                                        className="flex items-center text-blue-700 hover:text-blue-800 transition-colors group"
                                    >
                                        <Mail className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                                        info@accueasee.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FloatingAction;
