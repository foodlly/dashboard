import React from 'react';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { List, Check, ShoppingBag, Info } from 'lucide-react';

const Step2FinalStep = () => {
    const navigate = useNavigate();

    const benefits = [
        "We look after order deliveries and handle the customer care too",
        "Access thousands of new customers using foodpanda and increase sales",
        "Accept and manage orders easily on your dedicated foodpanda device",
        "Track sales and performance to get insight into what your customers like"
    ];

    const handleSubmit = () => {
        // Navigate to dashboard or next main flow
        navigate('/dashboard');
    };

    return (
        <div className="flex flex-col h-screen w-full bg-white relative">

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col items-center justify-start p-6 md:p-10 overflow-y-auto no-scrollbar pb-24">
                <div className="w-full max-w-3xl flex flex-col items-center text-center">

                    {/* Hero Illustration Placeholder */}
                    <div className="mb-6 relative">
                        {/* Using a placeholder visual since exact asset isn't available */}
                        <div className="w-48 h-32 bg-pink-50 rounded-full flex items-center justify-center relative overflow-visible">
                            <div className="absolute -top-4 -right-4 bg-pink-600 text-white text-xs py-1 px-3 rounded-lg shadow-md animate-bounce">
                                New order received
                            </div>
                            <ShoppingBag size={64} className="text-pink-500" />
                        </div>
                    </div>

                    <h2 className="text-pink-600 font-bold mb-2">Your final step</h2>
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">
                        foodpanda helps your restaurant grow!
                    </h1>

                    {/* Benefits List */}
                    <div className="w-full max-w-2xl text-left space-y-4 mb-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className="mt-1 flex-shrink-0">
                                    <Check size={20} className="text-green-500" />
                                </div>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    {benefit}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Info Box */}
                    <div className="w-full max-w-2xl bg-blue-50 rounded-xl p-4 flex items-start gap-3 text-left mb-6">
                        <Info size={24} className="text-gray-600 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700 text-sm">
                            Join the 500+ restaurants who signed up to foodpanda yesterday!
                        </p>
                    </div>

                    <p className="text-gray-900 font-bold text-lg">
                        All for a one-time onboarding fee of 10000 PKR
                    </p>

                </div>
            </div>

            {/* Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:px-12 flex items-center justify-between z-10">
                <button
                    onClick={() => navigate('/step-2-call-preference')}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                    <List size={20} />
                    See Progress
                </button>

                <Button
                    onClick={handleSubmit}
                    className="px-8 py-3 text-base shadow-lg shadow-pink-500/20 bg-pink-600 hover:bg-pink-700 border-transparent text-white"
                >
                    Continue
                </Button>
            </div>
        </div>
    );
};

export default Step2FinalStep;
