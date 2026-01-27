import React, { useState } from 'react';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { List, ChevronDown, Package, Check } from 'lucide-react';

const PlanCard = ({ title, features, onSelect, isSelected }) => {
    return (
        <div
            className={`border rounded-xl p-6 flex flex-col items-center bg-white transition-all duration-300 relative ${isSelected ? 'border-orange-600 ring-2 ring-orange-100 shadow-xl' : 'border-gray-200 hover:shadow-lg'}`}
        >
            {/* Icon Placeholder */}
            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4 text-orange-500">
                <Package size={32} />
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">{title}</h3>

            <div className="w-full space-y-4 mb-8">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <Check size={16} className="text-green-500" />
                    Delivery by foodpanda
                </div>

                {/* Details List */}
                <div className="space-y-3">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center justify-between text-sm py-1 border-b border-gray-50 last:border-0">
                            <span className="text-gray-500">{feature.label}</span>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-900 font-bold">{feature.value}</span>
                                <ChevronDown size={14} className="text-orange-600" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={onSelect}
                className={`w-full py-3 rounded-lg font-bold transition-colors ${isSelected ? 'bg-orange-600 text-white' : 'border border-orange-200 text-orange-600 hover:bg-orange-50'}`}
            >
                {isSelected ? 'Selected' : 'Select'}
            </button>
        </div>
    );
};

const Step7Partnership = () => {
    const navigate = useNavigate();
    const [selectedPlan, setSelectedPlan] = useState(null);

    const plans = [
        {
            id: 'tablet',
            title: 'Homechefs Phone Tablet',
            features: [
                { label: 'Commission Rate', value: '28%' },
                { label: 'Onboarding Fee', value: '16000 PKR' },
                { label: 'Subscription Fee', value: '800 PKR' },
                { label: 'Online Payment Fee (%)', value: '1.60%' },
                { label: 'Wastage', value: '50%' },
                { label: 'Tablet + GoDroid App', value: 'Included' },
                { label: 'SIM Card', value: 'Included' },
            ]
        },
        {
            id: 'own_device',
            title: 'Your Own Phone (Godroid App)',
            features: [
                { label: 'Commission Rate', value: '28%' },
                { label: 'Onboarding Fee', value: '10000 PKR' },
                { label: 'Subscription Fee', value: '800 PKR' },
                { label: 'Online Payment Fee (%)', value: '1.60%' },
                { label: 'Wastage', value: '50%' },
                { label: 'Godroid App', value: 'Included' },
            ]
        }
    ];

    const handleSubmit = (e) => {
        // Navigate to final dashboard or success page
        navigate('/dashboard');
    };

    return (
        <div className="flex flex-col h-screen w-full bg-white relative">

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col items-center justify-start p-6 md:p-10 overflow-y-auto no-scrollbar pb-24">
                <div className="w-full max-w-5xl">
                    <div className="text-center mb-10">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Partnership Package</h1>
                        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                            Our plans help increase your customer base, boost your revenue and grow your business. Choose the one that works best for you!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {plans.map((plan) => (
                            <PlanCard
                                key={plan.id}
                                title={plan.title}
                                features={plan.features}
                                isSelected={selectedPlan === plan.id}
                                onSelect={() => setSelectedPlan(plan.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:px-12 flex items-center justify-between z-10">
                <button
                    onClick={() => navigate('/step-6-bank-documents')}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                    Back
                </button>

                <button className="flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700">
                    <List size={20} />
                    See Progress
                </button>

                <Button
                    onClick={() => navigate('/step-8-confirmation')}
                    className="px-8 py-3 text-base shadow-lg shadow-orange-500/20 bg-orange-600 hover:bg-orange-700 border-transparent text-white"
                >
                    Continue
                </Button>
            </div>
        </div>
    );
};

export default Step7Partnership;
