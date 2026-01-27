import React, { useState } from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { User, Store, FileText, CheckCircle, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

const RestaurantRegistration = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', password: '',
        restaurantName: '', address: '', cuisine: '', openTime: '', closeTime: '',
        fssai: '', gst: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const steps = [
        { number: 1, title: 'Personal Info', icon: User },
        { number: 2, title: 'Restaurant Info', icon: Store },
        { number: 3, title: 'Documents', icon: FileText },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-2xl mb-8">
                <div className="flex items-center justify-between relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 -z-10 rounded-full"></div>
                    <div
                        className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-orange-500 transition-all duration-300 -z-10 rounded-full"
                        style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
                    ></div>

                    {steps.map((s) => (
                        <div key={s.number} className="flex flex-col items-center bg-gray-50 px-2 transition-all">
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 font-bold transition-all duration-300 ${step >= s.number
                                    ? 'bg-orange-500 border-orange-500 text-white'
                                    : 'bg-white border-gray-300 text-gray-400'
                                    }`}
                            >
                                {step > s.number ? <CheckCircle size={20} /> : s.number}
                            </div>
                            <span className={`text-xs mt-2 font-medium ${step >= s.number ? 'text-orange-600' : 'text-gray-400'}`}>
                                {s.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <Card className="w-full max-w-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    {step === 1 && 'Create your account'}
                    {step === 2 && 'Restaurant Details'}
                    {step === 3 && 'Verification Documents'}
                </h2>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    {step === 1 && (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input type="text" name="name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition" placeholder="John Doe" onChange={handleChange} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input type="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition" placeholder="john@example.com" onChange={handleChange} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input type="tel" name="phone" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition" placeholder="+91 98765 43210" onChange={handleChange} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                    <input type="password" name="password" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition" placeholder="••••••••" onChange={handleChange} />
                                </div>
                            </div>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Restaurant Name</label>
                                    <input type="text" name="restaurantName" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition" placeholder="Tasty Bites" onChange={handleChange} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Address</label>
                                    <textarea name="address" rows="3" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition" placeholder="123 Food Street, City" onChange={handleChange}></textarea>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Cuisine Type</label>
                                        <select name="cuisine" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition" onChange={handleChange}>
                                            <option value="">Select Cuisine</option>
                                            <option value="italian">Italian</option>
                                            <option value="indian">Indian</option>
                                            <option value="chinese">Chinese</option>
                                            <option value="mexican">Mexican</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Opening Time</label>
                                        <input type="time" name="openTime" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition" onChange={handleChange} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Closing Time</label>
                                        <input type="time" name="closeTime" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition" onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">FSSAI Number</label>
                                    <input type="text" name="fssai" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition" placeholder="12345678901234" onChange={handleChange} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">GST Number</label>
                                    <input type="text" name="gst" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition" placeholder="22AAAAA0000A1Z5" onChange={handleChange} />
                                </div>

                                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center bg-gray-50 hover:bg-white hover:border-orange-400 transition cursor-pointer">
                                    <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mb-3">
                                        <Upload size={24} />
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">Click to upload FSSAI Certificate</p>
                                    <p className="text-xs text-gray-500 mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                                </div>
                            </div>
                        </>
                    )}

                    <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-100">
                        {step > 1 ? (
                            <Button variant="secondary" onClick={prevStep}>Back</Button>
                        ) : (
                            <div className="text-sm text-gray-500">
                                Already have an account? <Link to="/" className="text-orange-600 font-medium hover:underline">Login</Link>
                            </div>
                        )}

                        {step < 3 ? (
                            <Button onClick={nextStep}>Continue</Button>
                        ) : (
                            <Button onClick={() => alert("Registration Submitted!")}>Submit Registration</Button>
                        )}
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default RestaurantRegistration;
