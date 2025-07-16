import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const BlogSection = () => {
    const blogPosts = [
        {
            id: 1,
            title: '2024 Tax Changes Every Business Owner Should Know',
            excerpt: 'Stay ahead of the latest tax regulations and changes that could impact your business this year.',
            author: 'David Johnson',
            date: '2024-01-15',
            readTime: '5 min read',
            category: 'Tax Planning',
            image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
            id: 2,
            title: 'The Complete Guide to Bookkeeping for Small Businesses',
            excerpt: 'Essential bookkeeping practices that every small business owner needs to implement for financial success.',
            author: 'Sarah Williams',
            date: '2024-01-12',
            readTime: '8 min read',
            category: 'Bookkeeping',
            image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
            id: 3,
            title: 'How to Optimize Your Payroll Process for Maximum Efficiency',
            excerpt: 'Streamline your payroll operations with these proven strategies and best practices.',
            author: 'Michael Chen',
            date: '2024-01-10',
            readTime: '6 min read',
            category: 'Payroll',
            image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
            id: 4,
            title: 'Financial Reporting Best Practices for Growing Companies',
            excerpt: 'Learn how to create meaningful financial reports that drive business decisions and growth.',
            author: 'Emily Rodriguez',
            date: '2024-01-08',
            readTime: '7 min read',
            category: 'Financial Reporting',
            image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
            id: 5,
            title: 'Understanding Cash Flow Management in Uncertain Times',
            excerpt: 'Master cash flow management techniques to keep your business resilient during economic challenges.',
            author: 'Robert Kim',
            date: '2024-01-05',
            readTime: '9 min read',
            category: 'Business Finance',
            image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
            id: 6,
            title: 'Digital Transformation in Accounting: What You Need to Know',
            excerpt: 'Explore how technology is revolutionizing accounting practices and what it means for your business.',
            author: 'Lisa Parker',
            date: '2024-01-03',
            readTime: '6 min read',
            category: 'Technology',
            image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
    ];

    const categories = ['All', 'Tax Planning', 'Bookkeeping', 'Payroll', 'Financial Reporting', 'Business Finance', 'Technology'];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Latest <span className="text-blue-700">Insights</span> & Articles
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Stay informed with our latest articles on accounting, tax planning, and business finance
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className="px-6 py-2 rounded-full border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-colors font-medium"
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Blog Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-blue-700 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center">
                                            <User className="h-4 w-4 mr-1" />
                                            {post.author}
                                        </div>
                                        <div className="flex items-center">
                                            <Calendar className="h-4 w-4 mr-1" />
                                            {new Date(post.date).toLocaleDateString()}
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="h-4 w-4 mr-1" />
                                        {post.readTime}
                                    </div>
                                </div>

                                <button className="flex items-center text-blue-700 hover:text-blue-800 font-semibold transition-colors group">
                                    Read More
                                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="text-center">
                    <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                        Load More Articles
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;