import React from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { Eye, Check, X, FileText } from 'lucide-react';

const AdminApproval = () => {
    const pendingApprovals = [
        { id: 1, restaurant: "Spice Garden", owner: "Rajesh Kumar", date: "Jan 24, 2026", type: "North Indian" },
        { id: 2, restaurant: "Pizza Paradise", owner: "Amit Patel", date: "Jan 25, 2026", type: "Italian" },
        { id: 3, restaurant: "Sushi House", owner: "Kenji Sato", date: "Jan 26, 2026", type: "Japanese" },
        { id: 4, restaurant: "Burger joint", owner: "Sarah Wilson", date: "Jan 27, 2026", type: "American" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Restaurant Approvals</h1>
                    <p className="text-gray-500 text-sm mt-1">Review and approve new restaurant applications.</p>
                </div>
            </div>

            <Card className="!p-0 overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                        <h3 className="font-semibold text-gray-900">Pending Requests</h3>
                        <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs font-bold ml-2">
                            {pendingApprovals.length}
                        </span>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 text-gray-500 text-xs uppercase tracking-wider">
                                <th className="px-6 py-4 font-medium">Restaurant</th>
                                <th className="px-6 py-4 font-medium">Owner Name</th>
                                <th className="px-6 py-4 font-medium">Date Applied</th>
                                <th className="px-6 py-4 font-medium">Documents</th>
                                <th className="px-6 py-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {pendingApprovals.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="font-medium text-gray-900">{item.restaurant}</p>
                                            <p className="text-xs text-gray-500">{item.type}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-700">{item.owner}</td>
                                    <td className="px-6 py-4 text-gray-500">{item.date}</td>
                                    <td className="px-6 py-4">
                                        <button className="flex items-center gap-1.5 text-sm text-orange-600 font-medium hover:underline">
                                            <FileText size={16} />
                                            View
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-3">
                                            <Button variant="outline" className="!py-1.5 !px-3 !text-sm flex items-center gap-1.5">
                                                <X size={14} /> Reject
                                            </Button>
                                            <Button className="!py-1.5 !px-3 !text-sm flex items-center gap-1.5">
                                                <Check size={14} /> Approve
                                            </Button>
                                        </div>
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

export default AdminApproval;
