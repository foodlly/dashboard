import React, { useState } from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { Utensils, Mail, Phone, ChevronDown, Check } from 'lucide-react';

const RegisterBusiness = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        businessName: '',
        firstName: '',
        lastName: '',
        businessType: '',
        cuisine: '',
        businessEmail: '',
        mobileNumber: '',
        acceptTerms: false
    });

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Business Registration data:', formData);
        // Navigate to next step or dashboard
        navigate('/verify-number');
    };

    return (
        <div className="flex h-screen w-full bg-white overflow-hidden">
            {/* Left Side - Form (40%) */}
            <div className="w-full lg:w-[40%] flex flex-col justify-center px-8 md:px-16 lg:px-24 xl:px-32 py-10 overflow-y-auto h-screen no-scrollbar">
                <div className="w-full max-w-md mx-auto">

                    {/* Logo & Header */}
                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                                <Utensils size={18} />
                            </div>
                            <span className="text-lg font-bold text-gray-900">Foodly</span>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900">Business Details</h1>
                        <p className="text-gray-500 text-sm mt-1">Fill in your business information to get started.</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Business Name */}
                        <div>
                            <input
                                type="text"
                                name="businessName"
                                required
                                className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all placeholder:text-gray-400 text-sm"
                                placeholder="Your Business Name *"
                                onChange={handleChange}
                            />
                        </div>

                        {/* CNIC Names */}
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="firstName"
                                required
                                className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all placeholder:text-gray-400 text-sm"
                                placeholder="First & Middle Name per CNIC *"
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="lastName"
                                required
                                className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all placeholder:text-gray-400 text-sm"
                                placeholder="Last Name per CNIC *"
                                onChange={handleChange}
                            />
                        </div>

                        {/* Business Type */}
                        <div className="relative">
                            <select
                                name="businessType"
                                required
                                className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-500 text-sm appearance-none cursor-pointer"
                                onChange={handleChange}
                                defaultValue=""
                            >
                                <option value="" disabled>Business type *</option>
                                <option value="restaurant">Restaurant</option>
                                <option value="cloud_kitchen">Cloud Kitchen</option>
                                <option value="home_chef">Home Chef</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                        </div>

                        {/* Cuisine Type */}
                        <div className="relative">
                            <select
                                name="cuisine"
                                required
                                className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-500 text-sm appearance-none cursor-pointer"
                                onChange={handleChange}
                                defaultValue=""
                            >
                                <option value="" disabled>Cuisine *</option>
                                <option value="pakistani">Pakistani</option>
                                <option value="desi">Desi</option>
                                <option value="bbq">BBQ</option>
                                <option value="fast_food">Fast Food</option>
                                <option value="chinese">Chinese</option>
                                <option value="italian">Italian</option>
                                <option value="continental">Continental</option>
                                <option value="thai">Thai</option>
                                <option value="japanese">Japanese</option>
                                <option value="arabic">Arabic / Middle Eastern</option>
                                <option value="turkish">Turkish</option>
                                <option value="seafood">Seafood</option>
                                <option value="burgers">Burgers</option>
                                <option value="pizza">Pizza</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="cafe">Cafe / Coffee</option>
                                <option value="bakery">Bakery</option>
                                <option value="desserts">Desserts</option>
                                <option value="ice_cream">Ice Cream</option>
                                <option value="healthy">Healthy / Diet</option>
                                <option value="beverages">Beverages / Juices</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                        </div>

                        {/* Business Email */}
                        <div className="relative">
                            <input
                                type="email"
                                name="businessEmail"
                                required
                                className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all placeholder:text-gray-400 text-sm"
                                placeholder="Business Email *"
                                onChange={handleChange}
                            />
                            <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-teal-500" size={18} />
                        </div>

                        {/* Mobile Number */}
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium pointer-events-none text-sm">
                                +92
                            </div>
                            <input
                                type="tel"
                                name="mobileNumber"
                                required
                                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all placeholder:text-gray-400 text-sm"
                                placeholder="Mobile Number *"
                                onChange={handleChange}
                            />
                        </div>

                        {/* Terms Checkbox */}
                        <div className="pt-1">
                            <label className="flex items-start gap-2 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        name="acceptTerms"
                                        checked={formData.acceptTerms}
                                        onChange={handleChange}
                                        className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-gray-300 shadow-sm transition-all checked:border-orange-500 checked:bg-orange-500 hover:shadow-md"
                                    />
                                    <Check className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" size={12} strokeWidth={3} />
                                </div>
                                <span className="text-xs font-medium text-gray-600 pt-0.5">
                                    I accept the <span className="text-orange-600 font-semibold cursor-pointer hover:underline">Terms & Conditions</span> and <span className="text-orange-600 font-semibold cursor-pointer hover:underline">Privacy Policy</span>
                                </span>
                            </label>
                        </div>

                        <Button type="submit" className="w-full py-3.5 text-sm font-bold shadow-lg shadow-orange-500/20 active:scale-[0.99] transition-all">
                            Get started
                        </Button>

                    </form>
                </div>
            </div>

            {/* Right Side - Image (60%) */}
            <div className="hidden lg:block lg:w-[60%] p-4 bg-white h-full sticky top-0">
                <div className="w-full h-full rounded-3xl overflow-hidden relative">
                    <img
                        src="/all.jpg"
                        alt="Register Visual"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
            </div>
        </div>
    );
};

export default RegisterBusiness;
