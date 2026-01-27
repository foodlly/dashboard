import React, { useState } from 'react';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { List, Info } from 'lucide-react';

const Step4Legal = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        cnicNumber: '12345-6789876-5', // Default from screenshot
        firstName: 'fist name', // Default from screenshot
        lastName: 'last name' // Default from screenshot
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Legal Data:', formData);
        // Navigate to next step or dashboard
        navigate('/dashboard'); // Placeholder for next step
    };

    return (
        <div className="flex flex-col h-screen w-full bg-white relative">

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col items-center justify-start p-6 md:p-10 overflow-y-auto no-scrollbar pb-24">
                <div className="w-full max-w-2xl">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Add your legal and tax details</h1>
                    <p className="text-gray-600 text-sm mb-8">
                        We need your tax and company information to create your foodpa... contract.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* CNIC Number */}
                        <div>
                            <label className="block text-xs font-medium text-orange-600 mb-1">CNIC Number <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="cnicNumber"
                                value={formData.cnicNumber}
                                onChange={handleChange}
                                className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-900"
                                placeholder="CNIC Number"
                            />
                        </div>

                        {/* First Name */}
                        <div>
                            <label className="block text-xs font-medium text-orange-600 mb-1">First & Middle Name Per CNIC <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-900"
                                placeholder="First & Middle Name"
                            />
                        </div>

                        {/* Last Name */}
                        <div>
                            <label className="block text-xs font-medium text-orange-600 mb-1">Last Name Per CNIC <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-900"
                                placeholder="Last Name"
                            />
                        </div>

                        {/* Info Box */}
                        <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg text-sm text-gray-700">
                            <Info className="flex-shrink-0 text-gray-500 mt-0.5" size={18} />
                            <p>
                                Please ensure your full name matches your NIC. Do not include your father's name. <span className="text-orange-600 cursor-pointer hover:underline">See Sample</span>
                            </p>
                        </div>

                    </form>
                </div>
            </div>

            {/* Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:px-12 flex items-center justify-between z-10">
                <button
                    onClick={() => navigate('/step-3-documents')}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                    Back
                </button>

                <button className="flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700">
                    <List size={20} />
                    See Progress
                </button>

                <Button
                    onClick={() => navigate('/step-5-bank')}
                    className="px-8 py-3 text-base shadow-lg shadow-orange-500/20 bg-orange-600 hover:bg-orange-700 border-transparent text-white"
                >
                    Continue
                </Button>
            </div>
        </div>
    );
};

export default Step4Legal;
