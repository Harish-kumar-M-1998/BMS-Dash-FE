import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa"; // Import a trash icon from react-icons

const LastWorkOrder = () => {
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

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://bms-dash-be.onrender.com/api/work-orders/${id}`);
            setWorkOrders(workOrders.filter(order => order._id !== id)); // Update the state to remove the deleted order
        } catch (error) {
            console.error("Error deleting work order:", error);
        }
    };

    return (
        <div className="p-3 bg-gray-50 rounded-lg shadow-md max-w-3xl mx-auto" style={{ height: '400px' }}> {/* Set fixed height here */}
            {/* Heading */}
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Last Work Orders</h2>
            
            {/* Search Input */}
            <input
                type="text"
                placeholder="Search work orders..."
                className="border border-gray-300 p-1 rounded w-full mb-3 text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            
            {/* Work Orders List */}
            <ul className="space-y-2 overflow-y-auto" style={{ maxHeight: 'calc(400px - 100px)' }}> {/* Adjust height for scrolling */}
                {filteredWorkOrders.length > 0 ? (
                    filteredWorkOrders.map((order) => (
                        <li
                            key={order._id}
                            className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex justify-between items-start text-sm"
                        >
                            <div className="flex-1">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-semibold text-base">{order.title}</h3>
                                    <span className="text-gray-500 ml-2 text-xs">
                                        {new Date(order.dueDate).toLocaleDateString()}
                                    </span>
                                    <button onClick={() => handleDelete(order._id)} aria-label="Delete work order" className="ml-2">
                                        <FaTrash className="text-red-500 hover:text-red-700 transition-colors duration-200" />
                                    </button>
                                </div>
                                <p className="text-gray-600 text-sm">{order.description}</p>
                            </div>
                        </li>
                    ))
                ) : (
                    <li className="text-center text-gray-500 text-sm">No work orders found.</li>
                )}
            </ul>
        </div>
    );
};

export default LastWorkOrder;
