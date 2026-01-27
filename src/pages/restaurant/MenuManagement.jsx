import React, { useState } from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { Plus, Search, Edit2, Trash2, CircleDot } from 'lucide-react';

const MenuManagement = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Starters", "Main Course", "Beverages", "Desserts"];

    const menuItems = [
        {
            id: 1,
            name: "Paneer Butter Masala",
            price: "₹280",
            category: "Main Course",
            isVeg: true,
            inStock: true,
            image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=600&h=400",
        },
        {
            id: 2,
            name: "Chicken Biryani",
            price: "₹350",
            category: "Main Course",
            isVeg: false,
            inStock: true,
            image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=600&h=400",
        },
        {
            id: 3,
            name: "Veg Crispy Starter",
            price: "₹180",
            category: "Starters",
            isVeg: true,
            inStock: false,
            image: "https://images.unsplash.com/photo-1626082927389-d52b83721d37?auto=format&fit=crop&q=80&w=600&h=400",
        },
        {
            id: 4,
            name: "Chocolate Brownie",
            price: "₹150",
            category: "Desserts",
            isVeg: false, // contains egg typically, or marked as non-veg depending on region. Let's say contains egg.
            inStock: true,
            image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476d?auto=format&fit=crop&q=80&w=600&h=400"
        },
        {
            id: 5,
            name: "Mango Lassi",
            price: "₹90",
            category: "Beverages",
            isVeg: true,
            inStock: true,
            image: "https://images.unsplash.com/photo-1543362906-ac1b4526d1d0?auto=format&fit=crop&q=80&w=600&h=400"
        }
    ];

    const filteredItems = selectedCategory === "All"
        ? menuItems
        : menuItems.filter(item => item.category === selectedCategory);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Menu Management</h1>
                    <p className="text-gray-500 text-sm mt-1">Manage your food items and categories.</p>
                </div>
                <Button className="flex items-center gap-2">
                    <Plus size={18} />
                    Add New Item
                </Button>
            </div>

            <Card className="!p-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === cat
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search food items..."
                            className="pl-10 pr-4 py-2 w-full bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                        />
                    </div>
                </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item) => (
                    <Card key={item.id} className="!p-0 overflow-hidden group">
                        <div className="relative h-48 w-full overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold shadow-sm">
                                {item.category}
                            </div>
                            <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-2 bg-white rounded-full shadow-md text-gray-700 hover:text-orange-600 transition-colors">
                                    <Edit2 size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="p-5">
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="font-bold text-gray-900 leading-tight">{item.name}</h3>
                                <div className={`mt-1 w-4 h-4 border-2 flex items-center justify-center p-0.5 ${item.isVeg ? 'border-green-600' : 'border-red-600'}`}>
                                    <div className={`w-full h-full rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <span className="text-lg font-bold text-gray-900">{item.price}</span>

                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-medium text-gray-500">{item.inStock ? 'In Stock' : 'Out of Stock'}</span>
                                    <button
                                        className={`w-10 h-5 rounded-full relative transition-colors ${item.inStock ? 'bg-green-500' : 'bg-gray-300'}`}
                                    >
                                        <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all shadow-sm ${item.inStock ? 'left-5.5' : 'left-0.5'}`}></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default MenuManagement;
