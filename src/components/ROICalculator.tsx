import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp } from 'lucide-react';

const ROICalculator = () => {
    const [inputs, setInputs] = useState({
        currentCost: '',
        hoursSpent: '',
        hourlyRate: '',
        employees: ''
    });

    const [results, setResults] = useState({
        monthlySavings: 0,
        annualSavings: 0,
        timeRecovered: 0,
        roi: 0
    });

    const calculateROI = () => {
        const currentCost = parseFloat(inputs.currentCost) || 0;
        const hoursSpent = parseFloat(inputs.hoursSpent) || 0;
        const hourlyRate = parseFloat(inputs.hourlyRate) || 0;
        const employees = parseFloat(inputs.employees) || 1;

        const currentMonthlyCost = currentCost + (hoursSpent * hourlyRate * employees);
        const ourServiceCost = Math.max(299, employees * 199); // Base pricing

        const monthlySavings = Math.max(0, currentMonthlyCost - ourServiceCost);
        const annualSavings = monthlySavings * 12;
        const timeRecovered = hoursSpent * employees;
        const roi = currentMonthlyCost > 0 ? ((monthlySavings / currentMonthlyCost) * 100) : 0;

        setResults({
            monthlySavings,
            annualSavings,
            timeRecovered,
            roi
        });
    };

    const handleInputChange = (field: string, value: string) => {
        setInputs(prev => ({ ...prev, [field]: value }));
    };

    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Calculate Your <span className="text-blue-700">ROI</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        See how much you could save by outsourcing your accounting
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Calculator Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <div className="flex items-center mb-6">
                            <Calculator className="h-8 w-8 text-blue-700 mr-3" />
                            <h3 className="text-2xl font-bold text-gray-900">ROI Calculator</h3>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Current Monthly Accounting Cost ($)
                                </label>
                                <input
                                    type="number"
                                    value={inputs.currentCost}
                                    onChange={(e) => handleInputChange('currentCost', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="e.g., 2000"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Hours Spent on Accounting (per month)
                                </label>
                                <input
                                    type="number"
                                    value={inputs.hoursSpent}
                                    onChange={(e) => handleInputChange('hoursSpent', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="e.g., 40"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Average Hourly Rate ($)
                                </label>
                                <input
                                    type="number"
                                    value={inputs.hourlyRate}
                                    onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="e.g., 25"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Number of Employees Involved
                                </label>
                                <input
                                    type="number"
                                    value={inputs.employees}
                                    onChange={(e) => handleInputChange('employees', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="e.g., 2"
                                />
                            </div>

                            <button
                                onClick={calculateROI}
                                className="w-full bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center"
                            >
                                <Calculator className="h-5 w-5 mr-2" />
                                Calculate Savings
                            </button>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl shadow-xl p-8 text-white">
                        <div className="flex items-center mb-6">
                            <TrendingUp className="h-8 w-8 text-blue-200 mr-3" />
                            <h3 className="text-2xl font-bold">Your Potential Savings</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white/10 rounded-lg p-6">
                                <div className="flex items-center mb-2">
                                    <DollarSign className="h-6 w-6 text-green-300 mr-2" />
                                    <span className="text-lg font-semibold">Monthly Savings</span>
                                </div>
                                <div className="text-3xl font-bold text-green-300">
                                    ${results.monthlySavings.toLocaleString()}
                                </div>
                            </div>

                            <div className="bg-white/10 rounded-lg p-6">
                                <div className="flex items-center mb-2">
                                    <TrendingUp className="h-6 w-6 text-blue-300 mr-2" />
                                    <span className="text-lg font-semibold">Annual Savings</span>
                                </div>
                                <div className="text-3xl font-bold text-blue-300">
                                    ${results.annualSavings.toLocaleString()}
                                </div>
                            </div>

                            <div className="bg-white/10 rounded-lg p-6">
                                <div className="text-lg font-semibold mb-2">Time Recovered</div>
                                <div className="text-2xl font-bold">
                                    {results.timeRecovered} hours/month
                                </div>
                            </div>

                            <div className="bg-white/10 rounded-lg p-6">
                                <div className="text-lg font-semibold mb-2">ROI Percentage</div>
                                <div className="text-2xl font-bold">
                                    {results.roi.toFixed(1)}%
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-white/10 rounded-lg">
                            <p className="text-sm text-blue-100">
                                *Calculations are estimates based on industry averages.
                                Actual savings may vary based on specific requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ROICalculator;