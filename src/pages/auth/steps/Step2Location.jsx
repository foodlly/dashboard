import React, { useState } from 'react';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { List, PlusCircle } from 'lucide-react';

const Step2Location = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        buildingName: '',
        street: '',
        houseNumber: '',
        state: 'Punjab', // Default from screenshot
        city: 'Sargodha', // Default from screenshot
        area: 'Sargodha', // Default from screenshot
        postalCode: '40100' // Default from screenshot
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Location Data:', formData);
        // Navigate to next step
        navigate('/dashboard'); // Placeholder for next step
    };

    return (
        <div className="flex flex-col h-screen w-full bg-white relative">

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col items-center justify-start p-6 md:p-10 overflow-y-auto no-scrollbar pb-24">
                <div className="w-full max-w-2xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Where is your business located?</h1>
                    <p className="text-gray-600 text-lg mb-10">Customers and riders will use this information to find your store.</p>

                    <form id="location-form" onSubmit={handleSubmit} className="space-y-6">

                        {/* Building Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">Building or Place Name</label>
                            <input
                                type="text"
                                name="buildingName"
                                value={formData.buildingName}
                                onChange={handleChange}
                                className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-900"
                                placeholder="Building Name"
                            />
                        </div>

                        {/* Street */}
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">Street <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="street"
                                required
                                value={formData.street}
                                onChange={handleChange}
                                className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-900"
                                placeholder="Street"
                            />
                        </div>

                        {/* House Number */}
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">House Number <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="houseNumber"
                                required
                                value={formData.houseNumber}
                                onChange={handleChange}
                                className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-900"
                                placeholder="House Number"
                            />
                        </div>

                        {/* State */}
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">State <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="state"
                                required
                                value={formData.state}
                                onChange={handleChange}
                                className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-900"
                                placeholder="State"
                            />
                        </div>

                        {/* City */}
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">City <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="city"
                                required
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-900"
                                placeholder="City"
                            />
                        </div>

                        {/* Area */}
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">Area <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="area"
                                required
                                value={formData.area}
                                onChange={handleChange}
                                className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-900"
                                placeholder="Area"
                            />
                        </div>

                        {/* Postal Code */}
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">Postal code <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="postalCode"
                                required
                                value={formData.postalCode}
                                onChange={handleChange}
                                className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-900"
                                placeholder="Postal Code"
                            />
                        </div>

                        {/* Add Comment Link */}
                        <button type="button" className="flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors">
                            <PlusCircle size={20} />
                            Add comment about location
                        </button>

                    </form>
                </div>
            </div>

            {/* Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:px-12 flex items-center justify-between z-10">
                <button
                    onClick={() => navigate('/step-1-start')}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                    Back
                </button>

                <button className="flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700">
                    <List size={20} />
                    See Progress
                </button>

                <Button
                    onClick={() => navigate('/step-3-documents')}
                    className="px-8 py-3 text-base shadow-lg shadow-orange-500/20"
                >
                    Continue
                </Button>
            </div>
        </div>
    );
};

export default Step2Location;
