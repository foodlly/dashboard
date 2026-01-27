import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const location = useLocation();

    // Determine page title based on path
    const getPageTitle = () => {
        const path = location.pathname;
        if (path === '/') return 'Dashboard Overview';
        if (path === '/orders') return 'Orders';
        if (path === '/menu') return 'Menu Management';
        if (path === '/profile') return 'Profile';
        if (path === '/admin') return 'Admin Approval';
        if (path === '/register') return 'Restaurant Registration';
        return 'Dashboard';
    };

    // Check for auth pages (login, signup, register) to hide sidebar
    const isAuthPage = ['/', '/login', '/signup', '/register', '/verify-otp', '/register-business', '/verify-number', '/setup-business', '/step-1-start', '/step-2-location', '/step-3-documents', '/step-4-legal', '/step-5-bank', '/step-6-bank-documents', '/step-7-partnership', '/step-8-confirmation', '/step-2-menu', '/step-2-bank-owner-id'].includes(location.pathname) || location.pathname.startsWith('/auth');

    if (isAuthPage) {
        return <main className="min-h-screen bg-gray-50">{children}</main>;
    }

    return (
        <div className="flex min-h-screen bg-gray-50 font-sans text-gray-900">
            <Sidebar />
            <div className="flex-1 ml-[260px] flex flex-col min-h-screen">
                <Navbar title={getPageTitle()} />
                <main className="p-8 flex-1 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
