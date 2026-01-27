import React from 'react';

const Button = ({ children, onClick, className = '', type = 'button', variant = 'primary' }) => {
    const baseStyles = "px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-orange-500 hover:bg-orange-600 text-white focus:ring-orange-500",
        outline: "border border-red-500 text-red-500 hover:bg-red-50 focus:ring-red-500", // For 'Reject' button
        secondary: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-gray-500"
    };

    return (
        <button
            type={type}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
