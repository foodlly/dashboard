import React, { useState } from 'react';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { List, Info, Search, ChevronDown } from 'lucide-react';

const Step5BankDetails = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        accountTitle: '',
        bankName: '',
        iban: '',
        sameAddress: false,
        billingAddress: '',
        buildingName: '',
        street: '',
        houseNumber: ''
    });

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Bank Data:', formData);
        // Navigate to next step or dashboard
        navigate('/dashboard'); // Final step or placeholder
    };

    return (
        <div className="flex flex-col h-screen w-full bg-white relative">

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col items-center justify-start p-6 md:p-10 overflow-y-auto no-scrollbar pb-24">
                <div className="w-full max-w-2xl">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Where do you want to get paid?</h1>
                    <p className="text-gray-600 text-sm mb-8">
                        Your bank details are encrypted and secure so no one can access them, not even us.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Account Owner/Title */}
                        <div>
                            <label className="block text-xs font-medium text-orange-600 mb-1">Bank Account Owner/Title <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="accountTitle"
                                value={formData.accountTitle}
                                onChange={handleChange}
                                className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-900"
                                placeholder="Bank Account Owner/Title"
                            />
                        </div>

                        {/* Note Box */}
                        <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg text-sm text-gray-700">
                            <Info className="flex-shrink-0 text-gray-500 mt-0.5" size={18} />
                            <div className="space-y-2">
                                <p className="font-bold text-gray-800">Note: You have to upload a bank proof later in this process and the proof must matches with the details here. Please consider the following.</p>
                                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                    <li>The bank account holder's name exactly as it appears on the bank statement.</li>
                                    <li>If the bank account is under your business name, add the business name rather than the personal name.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Bank Name */}
                        <div className="relative">
                            <label className="block text-xs font-medium text-orange-600 mb-1">Bank name <span className="text-red-500">*</span></label>
                            <select
                                name="bankName"
                                value={formData.bankName}
                                onChange={handleChange}
                                className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-900 appearance-none"
                            >
                                <option value="" disabled>Select Bank</option>
                                <option value="hbl">HBL</option>
                                <option value="mcb">MCB</option>
                                <option value="meezan">Meezan Bank</option>
                                <option value="alfalah">Bank Alfalah</option>
                            </select>
                            <ChevronDown className="absolute right-4 bottom-4 text-gray-400 pointer-events-none" size={18} />
                        </div>

                        {/* IBAN */}
                        <div className="relative">
                            <label className="block text-xs font-medium text-orange-600 mb-1">IBAN <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="iban"
                                value={formData.iban}
                                onChange={handleChange}
                                className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-900"
                                placeholder="IBAN"
                            />
                            <Info className="absolute right-4 bottom-4 text-orange-600 cursor-pointer" size={18} />
                        </div>

                        {/* Billing Address Section */}
                        <div className="pt-4">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Billing Address</h3>
                            <p className="text-gray-600 text-sm mb-4">Please provide your billing address. Select the checkbox if your business address is same as billing address</p>

                            <label className="flex items-center gap-2 cursor-pointer mb-6">
                                <div className="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        name="sameAddress"
                                        checked={formData.sameAddress}
                                        onChange={handleChange}
                                        className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 shadow-sm transition-all checked:border-orange-600 checked:bg-orange-600 hover:shadow-md"
                                    />
                                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" viewBox="0 0 14 14" fill="none">
                                        <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="text-gray-900 font-medium">My billing & business address are same</span>
                            </label>

                            {!formData.sameAddress && (
                                <div className="space-y-4">
                                    {/* Enter Address Search */}
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="billingAddress"
                                            value={formData.billingAddress}
                                            onChange={handleChange}
                                            className="w-full pl-4 pr-10 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-900"
                                            placeholder="Enter address"
                                        />
                                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    </div>

                                    {/* Building Name */}
                                    <input
                                        type="text"
                                        name="buildingName"
                                        value={formData.buildingName}
                                        onChange={handleChange}
                                        className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-900"
                                        placeholder="Building or Place Name"
                                    />

                                    {/* Street */}
                                    <div>
                                        <label className="block text-xs font-medium text-orange-600 mb-1">Street <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            name="street"
                                            value={formData.street}
                                            onChange={handleChange}
                                            className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-900"
                                        />
                                    </div>

                                    {/* House Number */}
                                    <div>
                                        <label className="block text-xs font-medium text-orange-600 mb-1">House Number <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            name="houseNumber"
                                            value={formData.houseNumber}
                                            onChange={handleChange}
                                            className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-900"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                    </form>
                </div>
            </div>

            {/* Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:px-12 flex items-center justify-between z-10">
                <button
                    onClick={() => navigate('/step-4-legal')}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                    Back
                </button>

                <button className="flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700">
                    <List size={20} />
                    See Progress
                </button>

                <Button
                    onClick={() => navigate('/step-6-bank-documents')}
                    className="px-8 py-3 text-base shadow-lg shadow-orange-500/20 bg-orange-600 hover:bg-orange-700 border-transparent text-white"
                >
                    Continue
                </Button>
            </div>
        </div>
    );
};

export default Step5BankDetails;
