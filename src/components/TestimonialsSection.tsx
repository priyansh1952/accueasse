import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: 'Jonathan Sack',
            company: 'Staffing Company Owner',
            location: 'US',
            rating: 5,
            text: 'Very reliable, we are consistent customer and appreciate the relationship we have with this team. ProAccounting is the only way to outsource all of your book keeping needs! Very fast, reliable and attentive.',
            image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        {
            name: 'Derrick Muna-Quinata',
            company: 'US Based Car Dealer',
            location: 'US',
            rating: 5,
            text: 'We have been using them for a couple years now and we will continue to have them as part of our business.',
            image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        {
            name: 'Ally O\'Meally-Watson CIMA',
            company: 'Business Bright Accountants',
            location: 'Cardiff, UK',
            rating: 5,
            text: 'We are super impressed with ProAccounting. It\'s saving us hours each month. Bookkeeping Service Support on Xero provided by ProAccounting is superlative. They have also been turning around monthly bookkeeping work pretty quickly.',
            image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        {
            name: 'Gerard Mee',
            company: 'Finance Manager, UK Based Beverages Retail Company',
            location: 'UK',
            rating: 5,
            text: 'We are proud to use ProAccounting as our outsourcing Team. They provide a friendly, efficient and cost effective solution for our payroll and accounting functions.',
            image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        {
            name: 'Debbi Wouti',
            company: 'E-commerce Retailer',
            location: 'Australia',
            rating: 5,
            text: 'The team has been great to work with, very patient, and very thorough. They\'re proactive, and so we\'ve retained them for bookkeeping going forward.',
            image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        {
            name: 'Michael Hynes',
            company: 'Gymboree Classes, Education and Training',
            location: 'Evanston, Illinois, US',
            rating: 5,
            text: 'Work is on time and as agreed. We gave them a complex data/spreadsheet project that had a lot of unique requirements. They have done it well and have adjusted to our feedback.',
            image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
        }
    ];

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
        ));
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        What Our <span className="text-blue-700">Clients</span> Say
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Don't just take our word for it. Here's what our satisfied clients have to say about our services.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex items-center mb-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                                </div>
                            </div>

                            <div className="flex mb-4">
                                {renderStars(testimonial.rating)}
                            </div>

                            <div className="relative">
                                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-100" />
                                <p className="text-gray-600 italic pl-6">{testimonial.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Join Our Growing List of Satisfied Clients
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Experience the difference professional accounting services can make for your business
                        </p>
                        <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                            Get Started Today
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;