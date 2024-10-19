import React, { useEffect, useState } from "react";
import axios from "axios";

const RecentWorkOrders = () => {
    const [workOrders, setWorkOrders] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchWorkOrders = async () => {
            try {
                const response = await axios.get("https://bms-dash-be.onrender.com/api/work-orders");
                setWorkOrders(response.data);
            } catch (error) {
                console.error("Error fetching work orders:", error);
            }
        };

        fetchWorkOrders();
    }, []);

    const filteredWorkOrders = workOrders.filter(order =>
        order.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-3 bg-gray-50 rounded-lg shadow-md max-w-3xl mx-auto" style={{ height: '400px' }}>
            {/* Heading */}
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Recent Work Orders</h2>
            
            {/* Search Input */}
            <input
                type="text"
                placeholder="Search work orders..."
                className="border border-gray-300 p-1 rounded w-full mb-3 text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            
            {/* Work Orders List with Scroll */}
            <ul className="space-y-2 overflow-y-auto" style={{ maxHeight: '300px' }}>
                {filteredWorkOrders.length > 0 ? (
                    filteredWorkOrders.map((order) => (
                        <li
                            key={order._id}
                            className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex justify-between items-center text-sm"
                        >
                            <div className="flex-1">
                                <h3 className="font-semibold text-base">{order.title}</h3>
                                <p className="text-gray-600">{order.description}</p>
                            </div>
                            <span className="text-gray-500 ml-4 text-xs">
                                {new Date(order.dueDate).toLocaleDateString()}
                            </span>
                        </li>
                    ))
                ) : (
                    <li className="text-center text-gray-500 text-sm">No work orders found.</li>
                )}
            </ul>
        </div>
    );
};

export default RecentWorkOrders;
