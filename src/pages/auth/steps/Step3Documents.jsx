import React, { useState } from 'react';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { List, Paperclip, ChevronDown } from 'lucide-react';

const Step3Documents = () => {
    const navigate = useNavigate();
    const [hasSNTN, setHasSNTN] = useState('yes'); // Default to yes based on screenshot 2? Or no? Let's default to null or handle change. 
    // Screenshot 2 shows 'Yes' selected. Screenshot 3 shows 'No' selected. Let's default to 'yes' as per typical flow or empty.
    // Let's default to 'yes' to match the "more complex state" first.

    const [idType, setIdType] = useState('');

    const handleSNTNChange = (value) => {
        setHasSNTN(value);
    };

    return (
        <div className="flex flex-col h-screen w-full bg-white relative">

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col items-center justify-start p-6 md:p-10 overflow-y-auto no-scrollbar pb-24">
                <div className="w-full max-w-2xl">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Upload Business Owner ID (Front and Back)</h1>
                    <p className="text-gray-600 text-sm mb-8">
                        We need to verify your identity. Please upload front and back of your ID card. <span className="text-orange-600 cursor-pointer hover:underline">See example</span>
                    </p>

                    <div className="space-y-6">
                        {/* SNTN Question */}
                        <div>
                            <p className="text-sm font-bold text-gray-800 mb-3">
                                Does your restaurant have Sales Tax Registration Number (SNTN)? <span className="text-red-500">*</span>
                            </p>
                            <div className="flex items-center gap-6">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <div className="relative flex items-center">
                                        <input
                                            type="radio"
                                            name="sntn"
                                            value="yes"
                                            checked={hasSNTN === 'yes'}
                                            onChange={() => handleSNTNChange('yes')}
                                            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-300 transition-all checked:border-orange-600 checked:border-[6px]"
                                        />
                                    </div>
                                    <span className="text-gray-700">Yes</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <div className="relative flex items-center">
                                        <input
                                            type="radio"
                                            name="sntn"
                                            value="no"
                                            checked={hasSNTN === 'no'}
                                            onChange={() => handleSNTNChange('no')}
                                            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-300 transition-all checked:border-orange-600 checked:border-[6px]"
                                        />
                                    </div>
                                    <span className="text-gray-700">No</span>
                                </label>
                            </div>
                        </div>

                        {/* ID Type Dropdown - Only if Yes (Based on Screenshot 2 vs 3 logic) */}
                        {hasSNTN === 'yes' && (
                            <div className="relative">
                                <select
                                    className="w-full p-4 bg-white border border-gray-300 rounded-lg text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    value={idType}
                                    onChange={(e) => setIdType(e.target.value)}
                                >
                                    <option value="" disabled selected>Select the ID proof type *</option>
                                    <option value="passport">Passport</option>
                                    <option value="cnic">CNIC</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                            </div>
                        )}

                        {/* File Upload Area */}
                        <div className="mt-4 border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer">
                            <div className="mb-4 text-gray-400">
                                <Paperclip size={24} className="transform -rotate-45" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Drag your file</h3>
                            <p className="text-xs text-gray-500 max-w-xs mb-6">
                                accepted formats .jpg, .png, .jpeg, .pdf, .tiff, .docx, .xlsx with a maximum size of 4MB
                            </p>
                            <button className="text-orange-600 font-bold hover:text-orange-700 hover:underline">
                                Upload from your device
                            </button>
                            <input type="file" className="hidden" />
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:px-12 flex items-center justify-between z-10">
                <button
                    onClick={() => navigate('/step-2-location')}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                    Back
                </button>

                <button className="flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700">
                    <List size={20} />
                    See Progress
                </button>

                <Button
                    onClick={() => navigate('/step-4-legal')} // Navigate to Step 4
                    className="px-8 py-3 text-base shadow-lg shadow-orange-500/20 bg-orange-600 hover:bg-orange-700 border-transparent text-white"
                >
                    Continue
                </Button>
            </div>
        </div>
    );
};

export default Step3Documents;
