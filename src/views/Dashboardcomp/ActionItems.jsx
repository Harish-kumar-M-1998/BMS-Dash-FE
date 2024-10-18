import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdAssignment, MdCheckCircle } from 'react-icons/md'; // Import icons

const ActionItems = () => {
    const [actionItems, setActionItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchActionItems = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/action-items');
                setActionItems(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchActionItems();
    }, []);

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    return (
        <div className="bg-[#6E8EFF] rounded-lg bg-violet-50 shadow-md p-4 h-full flex flex-col justify-between">
            <h2 className="text-xl font-semibold mb-4">Action Items</h2>
            <div className="flex-1 overflow-auto"> {/* This ensures the list grows and fits */}
                {actionItems.length > 0 ? (
                    <div className="bg-[#6E8EFF] grid grid-cols-1 gap-4">
                        {actionItems.map((item) => (
                            <div key={item._id} className="flex justify-between items-center bg-[#6E8EFF] p-4 rounded-md shadow transition duration-300">
                                <div className="flex items-center">
                                    <MdAssignment className="text-white mr-2" />
                                    <span className="font-medium text-white">{item.title}</span>
                                </div>
                                <div className={`flex items-center ${item.status === 'Pending' ? 'text-white' : 'text-white-500'}`}>
                                    <MdCheckCircle className="mr-2" />
                                    <span>{item.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No action items found.</p>
                )}
            </div>
        </div>
    );
};

export default ActionItems;
