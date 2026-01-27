import React from 'react';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, List, Monitor } from 'lucide-react';

const Step1Start = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-screen w-full bg-white relative">

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col md:flex-row items-center justify-center p-8 md:px-20 lg:px-32 gap-12 overflow-y-auto no-scrollbar pb-24">

                {/* Text Content */}
                <div className="w-full md:w-1/2 space-y-6">
                    <div>
                        <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">Step 1</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Add your business</h1>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Add your business information so we can create your contract and you can start earning more.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-900">What do we need from you</h3>
                        <ul className="space-y-3">
                            {[
                                'Details of your business',
                                'Location of your business',
                                'Legal and Sales Tax details',
                                'Banking Details',
                                'Choose the best plan for your business'
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Illustration Placeholder */}
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gray-50 rounded-full flex items-center justify-center">
                        {/* Placeholder for the vector illustration */}
                        <Monitor size={120} className="text-orange-200" strokeWidth={1} />
                        <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                            <div className="w-12 h-2 bg-gray-200 rounded-full mb-2"></div>
                            <div className="w-8 h-2 bg-gray-200 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:px-12 flex items-center justify-between z-10">
                <button
                    onClick={() => navigate('/setup-business')}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                    Back
                </button>

                <button className="flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700">
                    <List size={20} />
                    See Progress
                </button>

                <Button
                    onClick={() => navigate('/step-2-location')}
                    className="px-8 py-3 text-base shadow-lg shadow-orange-500/20"
                >
                    Continue
                </Button>
            </div>
        </div>
    );
};

export default Step1Start;
