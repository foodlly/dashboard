import React, { useState } from 'react';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { List, Paperclip } from 'lucide-react';

const Step2Menu = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Navigate to next page in Step 2
        navigate('/dashboard');
    };

    return (
        <div className="flex flex-col h-screen w-full bg-white relative">

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col items-center justify-start p-6 md:p-10 overflow-y-auto no-scrollbar pb-24">
                <div className="w-full max-w-2xl">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Add your Dine-in Menu</h1>
                    <p className="text-gray-600 text-sm mb-8">
                        Upload a menu image or file, and we'll extract the items and prices for you — no manual typing needed! Just make sure it's clear and readable with visible prices. <span className="text-orange-600 cursor-pointer hover:underline">See sample</span>
                    </p>

                    {/* File Upload Area */}
                    <div className="mt-4 border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer">
                        <div className="mb-4 text-gray-400">
                            <Paperclip size={24} className="transform -rotate-45" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Drag your file</h3>
                        <p className="text-xs text-gray-500 max-w-xs mb-6">
                            accepted formats .jpg, .png, .jpeg, .pdf, with a maximum size of 4MB
                        </p>
                        <button className="text-orange-600 font-bold hover:text-orange-700 hover:underline">
                            Upload from your device
                        </button>
                        <input type="file" className="hidden" />
                    </div>

                </div>
            </div>

            {/* Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:px-12 flex items-center justify-between z-10">
                {/* Back button logic might need to be adjusted if this is a fresh start of Step 2 */}
                <button
                    onClick={() => navigate('/step-8-confirmation')}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                    Back
                </button>

                <button className="flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700">
                    <List size={20} />
                    See Progress
                </button>

                <Button
                    onClick={() => navigate('/step-2-bank-owner-id')}
                    className="px-8 py-3 text-base shadow-lg shadow-orange-500/20 bg-orange-600 hover:bg-orange-700 border-transparent text-white"
                >
                    Continue
                </Button>
            </div>
        </div>
    );
};

export default Step2Menu;
