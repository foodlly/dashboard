import React from 'react';
import { Bell, Search } from 'lucide-react';

const Navbar = ({ title }) => {
    return (
        <header className="h-16 bg-white border-b border-gray-200 sticky top-0 z-10 px-8 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

            <div className="flex items-center gap-6">
                <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 w-64"
                    />
                </div>

                <button className="relative p-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                </button>

                <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden cursor-pointer ring-2 ring-white shadow-sm">
                    <img src="https://ui-avatars.com/api/?name=Restaurant+Owner&background=F97316&color=fff" alt="Profile" />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
