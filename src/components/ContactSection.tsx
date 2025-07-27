import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
    });

    const [state, handleSubmit] = useForm("movldgyp");


    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    if (state.succeeded) {
        return (
            <section className="py-20 bg-white text-center">
                <h2 className="text-3xl font-bold text-blue-700 mb-4">Thank you for your message!</h2>
                <p className="text-lg text-gray-600">We will get back to you shortly.</p>
            </section>
        );
    }

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Get Your Free <span className="text-blue-700">Consultation</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Ready to take control of your finances? Contact us today for a personalized consultation.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                    <Phone className="h-6 w-6 text-blue-700" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Phone</h4>
                                    <p className="text-gray-600">+91 9785216220</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                    <Mail className="h-6 w-6 text-blue-700" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Email</h4>
                                    <p className="text-gray-600">info@accueasee.com</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                    <MapPin className="h-6 w-6 text-blue-700" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Address</h4>
                                    <p className="text-gray-600">
                                        A-25 1st floor 103, Sunshine Residency<br />
                                        Shastri Nagar, Jaipur 302016
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                    <Clock className="h-6 w-6 text-blue-700" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Business Hours</h4>
                                    <p className="text-gray-600">Available 24/7</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:outline-none"
                                    />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:outline-none"
                                >
                                    <option value="">Select a service</option>
                                    <option value="bookkeeping">Bookkeeping</option>
                                    <option value="payroll">Accounting Software Integration & Migration</option>
                                    <option value="tax">Accounts Payables</option>
                                    <option value="reporting">Accounts Receivables</option>
                                    <option value="consulting">Management Reporting</option>
                                    <option value="compliance">Virtual CFO Services</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:outline-none"
                                    placeholder="Tell us about your needs..."
                                ></textarea>
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                            </div>

                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
