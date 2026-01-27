import React, { useState } from 'react';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { List } from 'lucide-react';

const SummarySection = ({ title, onChange, children }) => (
    <div className="mb-8 border-b border-gray-100 pb-8 last:border-0 last:mb-0 last:pb-0">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            <button onClick={onChange} className="text-orange-600 font-bold hover:underline text-sm">Change</button>
        </div>
        <div className="space-y-3">
            {children}
        </div>
    </div>
);

const SummaryRow = ({ label, value }) => (
    <div className="flex justify-between text-sm md:text-base">
        <span className="text-gray-500 w-1/2">{label}</span>
        <span className="text-gray-900 font-bold w-1/2 text-right">{value}</span>
    </div>
);

const Step8Confirmation = () => {
    const navigate = useNavigate();
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = (e) => {
        if (!agreed) {
            alert('Please accept the terms and conditions');
            return;
        }
        // Final submission - Verify or Go to Dashboard
        navigate('/dashboard');
    };

    return (
        <div className="flex flex-col h-screen w-full bg-white relative">

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col items-center justify-start p-6 md:p-10 overflow-y-auto no-scrollbar pb-24">
                <div className="w-full max-w-2xl">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Make sure everything is correct</h1>
                    <p className="text-gray-600 text-sm mb-10">
                        Check all your business information is correct before we add it to our partner portal and create your contract.
                    </p>

                    {/* Summary Sections */}
                    <SummarySection title="What does your business do?" onChange={() => navigate('/step-1-start')}>
                        <SummaryRow label="Business name" value="devowll" />
                        <SummaryRow label="Business type" value="Restaurant" />
                        <SummaryRow label="Business category" value="Home Based Kitchen" />
                        <SummaryRow label="Business cuisine" value="Pakistani" />
                        <SummaryRow label="Mobile phone number" value="+923251600479" />
                        <SummaryRow label="Business phone number" value="+923251600479" />
                    </SummarySection>

                    <SummarySection title="Where is your business located?" onChange={() => navigate('/step-2-location')}>
                        <SummaryRow label="Restaurant Address" value="2nd, 48, 40100, Sargodha, Punjab" />
                    </SummarySection>

                    <SummarySection title="Upload Business Owner ID (Front and Back)" onChange={() => navigate('/step-3-documents')}>
                        <SummaryRow label="Does your restaurant have Sales Tax Registration Number (SNTN)?" value="No" />
                    </SummarySection>

                    <SummarySection title="Add your legal and tax details" onChange={() => navigate('/step-4-legal')}>
                        <SummaryRow label="CNIC Number" value="38402-5552882-1" />
                        <SummaryRow label="First & Middle Name Per CNIC" value="Mohammad" />
                        <SummaryRow label="Last Name Per CNIC" value="Haroon" />
                    </SummarySection>

                    <SummarySection title="Where do you want to get paid?" onChange={() => navigate('/step-5-bank')}>
                        <SummaryRow label="Bank Account Owner/Title" value="BABAR AA" />
                        <SummaryRow label="Bank name" value="HABIB BANK LIMITED" />
                        <SummaryRow label="IBAN" value="PK41HAB0017207906039203" />
                        <SummaryRow label="Billing Address" value="2nd, 48, 40100, Sargodha, Punjab" />
                    </SummarySection>

                    <SummarySection title="Partnership Package" onChange={() => navigate('/step-7-partnership')}>
                        <SummaryRow label="Tariff" value="Your Own Phone (Godroid App)" />
                    </SummarySection>

                    {/* Terms Checkbox */}
                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <label className="flex items-start gap-3 cursor-pointer">
                            <div className="relative flex items-center mt-1">
                                <input
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 shadow-sm transition-all checked:border-orange-600 checked:bg-orange-600 hover:shadow-md"
                                />
                                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" viewBox="0 0 14 14" fill="none">
                                    <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-gray-900 text-sm font-medium">
                                By ticking this box, I confirm that I am authorised by the Vendor to accept this Registration Form and the following <span className="text-orange-600 underline">Terms and Conditions</span> <span className="text-red-500">*</span>
                            </span>
                        </label>
                    </div>

                </div>
            </div>

            {/* Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:px-12 flex items-center justify-between z-10">
                <button
                    onClick={() => navigate('/step-7-partnership')}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                    Back
                </button>

                <button className="flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700">
                    <List size={20} />
                    See Progress
                </button>

                <Button
                    onClick={() => navigate('/step-2-menu')}
                    className="px-8 py-3 text-base shadow-lg shadow-orange-500/20 bg-orange-600 hover:bg-orange-700 border-transparent text-white"
                >
                    Continue
                </Button>
            </div>
        </div>
    );
};

export default Step8Confirmation;
