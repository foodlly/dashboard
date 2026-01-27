import React, { useState } from 'react';
import Button from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Utensils } from 'lucide-react';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login data:', formData);
        navigate('/dashboard'); // Redirect to dashboard
    };

    return (
        <div className="flex h-screen w-full bg-white overflow-hidden">
            {/* Left Side - Form (40%) */}
            <div className="w-full lg:w-[40%] flex flex-col justify-center px-8 md:px-16 lg:px-24 xl:px-32 py-10 overflow-y-auto">
                <div className="w-full max-w-md mx-auto">
                    {/* Logo & Header */}
                    <div className="mb-10">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                                <Utensils size={24} />
                            </div>
                            <span className="text-xl font-bold text-gray-900">Foodly</span>
                        </div>

                        <p className="text-gray-500 font-medium mb-2">Welcome to Foodly</p>
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">Sign in</h1>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full pl-4 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all placeholder:text-gray-400"
                                    placeholder="abc@email.com"
                                    onChange={handleChange}
                                />
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hidden">
                                    {/* Icon removed to match clean look of reference input, or kept? Ref shows icon inside input? 
                       Ref image shows icon inside input. 
                   */}
                                    <Mail size={20} />
                                </div>
                                {/* Re-adding icon as per ref image which HAS icon */}
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                                    <Mail size={20} />
                                </div>
                                {/* Adjust padding for icon */}
                                <style>{`input[name="email"] { padding-left: 3rem; }`}</style>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                                    <Lock size={20} />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    required
                                    className="w-full pl-12 pr-12 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all placeholder:text-gray-400"
                                    placeholder="Enter your password"
                                    onChange={handleChange}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                            <div className="flex justify-end mt-2">
                                <Link to="/forgot-password" className="text-sm font-medium text-orange-600 hover:text-orange-700 hover:underline">
                                    Forgot Password?
                                </Link>
                            </div>
                        </div>

                        <Button type="submit" className="w-full py-4 text-base font-semibold shadow-lg shadow-orange-500/20 active:scale-[0.99] transition-all">
                            Login
                        </Button>

                        <div className="pt-4 text-center">
                            <span className="text-gray-600">Don't have an account yet? </span>
                            <Link to="/signup" className="text-gray-900 font-bold hover:underline">
                                Create Your Account
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

            {/* Right Side - Image (60%) */}
            <div className="hidden lg:block lg:w-[60%] p-4 bg-white h-full">
                <div className="w-full h-full rounded-3xl overflow-hidden relative">
                    <img
                        src="/login.jpg"
                        alt="Login Visual"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
            </div>
        </div>
    );
};

export default Login;
