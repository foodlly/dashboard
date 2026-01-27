import React, { useState } from 'react';
import Card from '../../components/Card';
import { ShoppingBag, IndianRupee, Clock, Package, MoreVertical, ToggleLeft, ToggleRight } from 'lucide-react';

const DashboardOverview = () => {
    const [isStoreOpen, setIsStoreOpen] = useState(true);

    const stats = [
        { title: "Today's Orders", value: "24", icon: ShoppingBag, color: "bg-blue-100 text-blue-600" },
        { title: "Total Revenue", value: "₹12,450", icon: IndianRupee, color: "bg-green-100 text-green-600" },
        { title: "Pending Orders", value: "5", icon: Clock, color: "bg-yellow-100 text-yellow-600" },
        { title: "Active Items", value: "48", icon: Package, color: "bg-orange-100 text-orange-600" },
    ];

    const recentOrders = [
        { id: "#ORD-1001", customer: "Aarav Sharma", items: "2x Butter Chicken, 2x Naan", amount: "₹850", status: "Delivered" },
        { id: "#ORD-1002", customer: "Neha Gupta", items: "1x Veg Biryani, 1x Raita", amount: "₹350", status: "Pending" },
        { id: "#ORD-1003", customer: "Rohan Verma", items: "1x Paneer Tikka, 2x Roti", amount: "₹420", status: "Pending" },
        { id: "#ORD-1004", customer: "Priya Singh", items: "1x Masala Dosa", amount: "₹120", status: "Delivered" },
        { id: "#ORD-1005", customer: "Vikram Malhotra", items: "2x Chicken Burger, 1x Coke", amount: "₹550", status: "Delivered" },
    ];

    return (
        <div className="space-y-6">
            {/* Store Status Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Welcome back, Owner!</h1>
                    <p className="text-gray-500 text-sm mt-1">Here's what's happening in your restaurant today.</p>
                </div>
                <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                    <span className={`text-sm font-medium ${isStoreOpen ? 'text-green-600' : 'text-red-500'}`}>
                        {isStoreOpen ? 'Accepting Orders' : 'Store Closed'}
                    </span>
                    <button
                        onClick={() => setIsStoreOpen(!isStoreOpen)}
                        className={`transition-colors duration-200 ${isStoreOpen ? 'text-green-500' : 'text-gray-400'}`}
                    >
                        {isStoreOpen ? <ToggleRight size={32} /> : <ToggleLeft size={32} />}
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <Card key={index} className="flex items-center gap-4 !p-5">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.color}`}>
                            <stat.icon size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                            <h3 className="text-2xl font-bold text-gray-900 mt-0.5">{stat.value}</h3>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Recent Orders */}
            <Card className="!p-0 overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Recent Orders</h3>
                    <button className="text-sm text-orange-600 font-medium hover:text-orange-700">View All</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 text-gray-500 text-xs uppercase tracking-wider">
                                <th className="px-6 py-4 font-medium">Order ID</th>
                                <th className="px-6 py-4 font-medium">Customer</th>
                                <th className="px-6 py-4 font-medium">Items</th>
                                <th className="px-6 py-4 font-medium">Amount</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {recentOrders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                                    <td className="px-6 py-4 text-gray-700">{order.customer}</td>
                                    <td className="px-6 py-4 text-gray-500 truncate max-w-[240px]">{order.items}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900">{order.amount}</td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${order.status === 'Delivered'
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-yellow-100 text-yellow-700'
                                                }`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-400">
                                        <button className="hover:text-gray-600 p-1 rounded-md hover:bg-gray-100">
                                            <MoreVertical size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default DashboardOverview;
