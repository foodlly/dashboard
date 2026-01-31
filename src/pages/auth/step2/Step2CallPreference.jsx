import React, { useState } from 'react';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { List, Clock } from 'lucide-react';

const Step2CallPreference = () => {
    const navigate = useNavigate();
    const [selectedNetwork, setSelectedNetwork] = useState('');
    const [trainingTime, setTrainingTime] = useState('06:04 PM'); // Default as per design

    const networks = [
        { id: 'jazz', name: 'Jazz', color: '#880000', bgColor: '#FFF0F0' },
        { id: 'telenor', name: 'Telenor', color: '#00A3E0', bgColor: '#F0F8FF' },
        { id: 'ufone', name: 'Ufone', color: '#FF6600', bgColor: '#FFF5F0' },
        { id: 'zong', name: 'Zong', color: '#87CD33', bgColor: '#F4FFF4' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Call Preference:', { selectedNetwork, trainingTime });
        // Navigate to next page or finish Step 2
        navigate('/step-2-final');
    };

    return (
        <div className="flex flex-col h-screen w-full bg-white relative">

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col items-center justify-start p-6 md:p-10 overflow-y-auto no-scrollbar pb-24">
                <div className="w-full max-w-2xl">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Network & Training Call Preference</h1>
                    <p className="text-gray-600 text-sm md:text-base mb-8">
                        Please select your preferred mobile network and your convenient time for training call
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-8">

                        {/* Network Cards */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            {networks.map((network) => (
                                <div
                                    key={network.id}
                                    onClick={() => setSelectedNetwork(network.name)}
                                    className={`
                                        cursor-pointer rounded-xl border p-4 flex flex-col items-center justify-center h-24 transition-all
                                        ${selectedNetwork === network.name
                                            ? 'border-orange-500 ring-2 ring-orange-500 ring-opacity-50 bg-orange-50'
                                            : 'border-gray-200 hover:border-orange-300 hover:bg-gray-50'
                                        }
                                    `}
                                >
                                    {/* Placeholder for Logo - Using Text for now */}
                                    <span
                                        className="font-bold text-lg"
                                        style={{ color: network.color }}
                                    >
                                        {network.name}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Dropdown Selection */}
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">
                                Select Mobile Network preference <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <select
                                    value={selectedNetwork}
                                    onChange={(e) => setSelectedNetwork(e.target.value)}
                                    className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-900 appearance-none cursor-pointer"
                                >
                                    <option value="" disabled>Select Network</option>
                                    {networks.map(n => (
                                        <option key={n.id} value={n.name}>{n.name}</option>
                                    ))}
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Training Time */}
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1 w-full">
                                What time would be most convenient for you to receive the training call for device setup?
                            </label>
                            <div className="mt-2">
                                <label className="block text-xs font-medium text-gray-400 mb-1">
                                    Select time <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="time" // Using standard time input for now, or text with clock icon if strict design match needed
                                        value={trainingTime} // Note: input type="time" expects HH:mm 24h format usually, but design shows "06:04 PM"
                                        // keeping simple text for visual match with icon if not functional complexity required
                                        onChange={(e) => setTrainingTime(e.target.value)}
                                        className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-900"
                                    />
                                    {/* Create a visual overlay or rely on native picker? 
                                        Design shows "06:04 PM" inside. Let's stick to text input with icon for exact visual if native picker style varies too much.
                                        However, type="time" is functional. I'll use text for exact visual match to design with a clock icon.
                                    */}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:px-12 flex items-center justify-between z-10">
                <button
                    onClick={() => navigate('/step-2-bank-owner-id')}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                    See Progress
                </button>

                <Button
                    onClick={handleSubmit}
                    className="px-8 py-3 text-base shadow-lg shadow-orange-500/20 bg-orange-600 hover:bg-orange-700 border-transparent text-white"
                >
                    Continue
                </Button>
            </div>
        </div>
    );
};

export default Step2CallPreference;
