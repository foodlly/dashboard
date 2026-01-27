import React from 'react';
import { LayoutDashboard, ShoppingBag, UtensilsCrossed, User, Settings } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const navItems = [
        { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
        { name: 'Orders', icon: ShoppingBag, path: '/orders' },
        { name: 'Menu', icon: UtensilsCrossed, path: '/menu' },
        { name: 'Profile', icon: User, path: '/profile' },
        { name: 'Settings', icon: Settings, path: '/settings' },
    ];

    return (
        <aside className="w-[260px] bg-white h-screen fixed left-0 top-0 border-r border-gray-200 flex flex-col z-20">
            <div className="h-16 flex items-center px-6 border-b border-gray-100">
                <h1 className="text-2xl font-bold text-orange-500">Foodly</h1>
            </div>

            <nav className="flex-1 overflow-y-auto py-6">
                <div className="px-4 space-y-1">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive
                                    ? 'bg-orange-50 text-orange-600'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`
                            }
                        >
                            <item.icon size={20} />
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </nav>

            <div className="p-4 border-t border-gray-100">
                <div className="flex items-center gap-3 px-4 py-2">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xs">
                        RO
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">Rest. Owner</p>
                        <p className="text-xs text-gray-500 truncate">owner@foodly.com</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
