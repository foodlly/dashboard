import React, { useState, useRef, useEffect } from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { Utensils, ArrowLeft } from 'lucide-react';

const VerifyNumber = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handleChange = (index, value) => {
        if (isNaN(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next input if value is entered
        if (value !== '' && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const otpValue = otp.join('');
        console.log('Mobile OTP Submitted:', otpValue);
        // Navigate to next step or dashboard
        navigate('/setup-business');
    };

    return (
        <div className="flex h-screen w-full bg-white overflow-hidden">
            {/* Left Side - Form (40%) */}
            <div className="w-full lg:w-[40%] flex flex-col justify-center px-8 md:px-16 lg:px-24 xl:px-32 py-10 overflow-y-auto no-scrollbar">
                <div className="w-full max-w-md mx-auto">

                    <button onClick={() => navigate('/register-business')} className="flex items-center text-gray-400 hover:text-gray-900 mb-8 transition-colors">
                        <ArrowLeft size={20} className="mr-2" /> Back
                    </button>

                    {/* Logo & Header */}
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                                <Utensils size={24} />
                            </div>
                            <span className="text-xl font-bold text-gray-900">Foodly</span>
                        </div>

                        <h1 className="text-4xl font-bold text-gray-900 mb-3">Verify Mobile</h1>
                        <p className="text-gray-500">
                            We've sent a 6-digit code to your mobile number. Please enter it below to verify your business.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="flex justify-between gap-2">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    className="w-12 h-14 text-center text-2xl font-bold border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all placeholder-gray-300"
                                />
                            ))}
                        </div>

                        <Button type="submit" className="w-full py-4 text-base font-semibold shadow-lg shadow-orange-500/20 active:scale-[0.99] transition-all">
                            Verify Number
                        </Button>

                        <div className="text-center">
                            <p className="text-sm text-gray-600">
                                Didn't receive code?{' '}
                                <button type="button" className="text-orange-600 font-bold hover:underline">
                                    Resend
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            {/* Right Side - Image (60%) */}
            <div className="hidden lg:block lg:w-[60%] p-4 bg-white h-full sticky top-0">
                <div className="w-full h-full rounded-3xl overflow-hidden relative">
                    <img
                        src="/all.jpg"
                        alt="Verification Visual"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
            </div>
        </div>
    );
};

export default VerifyNumber;
