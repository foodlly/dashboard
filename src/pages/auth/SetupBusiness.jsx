import React from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { Utensils, CheckCircle, Circle, Clock } from 'lucide-react';

const SetupBusiness = () => {
    const navigate = useNavigate();

    const steps = [
        {
            title: 'Add your business',
            description: 'Provide your business details',
            status: 'completed'
        },
        {
            title: 'Verify your business',
            description: 'Upload required documents',
            status: 'current'
        },
        {
            title: 'Open your business',
            description: 'Set up your menu and hours',
            status: 'pending'
        },
        {
            title: 'Open your business', // Keeping text as requested, though seemingly duplicate
            description: 'Start receiving orders',
            status: 'pending'
        }
    ];

    const handleContinue = () => {
        // Navigate to the next actionable step, likely Document Upload or Dashboard
        navigate('/step-1-start');
    };

    return (
        <div className="flex h-screen w-full bg-white overflow-hidden">
            {/* Left Side - Content (40%) */}
            <div className="w-full lg:w-[40%] flex flex-col justify-center px-8 md:px-16 lg:px-24 xl:px-32 py-10 overflow-y-auto h-screen no-scrollbar">
                <div className="w-full max-w-md mx-auto">

                    {/* Logo */}
                    <div className="flex items-center gap-2 mb-8">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                            <Utensils size={24} />
                        </div>
                        <span className="text-xl font-bold text-gray-900">Foodly</span>
                    </div>

                    {/* Success Message */}
                    <div className="mb-10">
                        <h1 className="text-3xl font-bold text-gray-900 mb-3">Thank you for signing up!</h1>
                        <div className="p-4 bg-green-50 border border-green-100 rounded-xl mb-6">
                            <p className="text-green-800 font-medium">
                                Congratulations! You have successfully registered with us.
                            </p>
                        </div>
                        <p className="text-gray-600">
                            Below you will see the required details we need from you to get your business up and running.
                        </p>
                    </div>

                    {/* Steps Timeline */}
                    <div className="space-y-6 relative mb-10">
                        {/* Vertical Line */}
                        <div className="absolute left-[19px] top-2 bottom-4 w-0.5 bg-gray-100 -z-10"></div>

                        {steps.map((step, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="flex-shrink-0 mt-0.5">
                                    {step.status === 'completed' ? (
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 ring-4 ring-white">
                                            <CheckCircle size={20} className="fill-current text-green-600" />
                                            {/* Using Lucide CheckCircle - styling tricky for fill, just using color */}
                                        </div>
                                    ) : step.status === 'current' ? (
                                        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white ring-4 ring-orange-100 z-10 relative shadow-lg shadow-orange-500/30">
                                            <span className="font-bold">{index + 1}</span>
                                        </div>
                                    ) : (
                                        <div className="w-10 h-10 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-400 ring-4 ring-white">
                                            <span className="font-medium">{index + 1}</span>
                                        </div>
                                    )}
                                </div>
                                <div className={`pt-1 ${step.status === 'pending' ? 'opacity-50' : ''}`}>
                                    <h3 className={`font-bold text-lg ${step.status === 'current' ? 'text-gray-900' : 'text-gray-700'}`}>
                                        Step {index + 1}: {step.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm mt-0.5">{step.description}</p>

                                    {step.status === 'current' && (
                                        <Button
                                            onClick={handleContinue}
                                            className="mt-4 py-2 px-6 text-sm !rounded-full"
                                        >
                                            Continue
                                        </Button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Right Side - Image (60%) */}
            <div className="hidden lg:block lg:w-[60%] p-4 bg-white h-full sticky top-0">
                <div className="w-full h-full rounded-3xl overflow-hidden relative">
                    <img
                        src="/all.jpg"
                        alt="Setup Business Visual"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
            </div>
        </div>
    );
};

export default SetupBusiness;
