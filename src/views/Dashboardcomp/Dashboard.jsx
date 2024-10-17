import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Summary from "./Summary";
import ActionItems from "./ActionItems";
import RecentWorkOrders from "./RecentWorkOrders";
// Import other components as needed

export default function Dashboard() {
    const { setheaderDetails } = useOutletContext();

    useEffect(() => {
        setheaderDetails({
            title: "Overview",
            subTitle: "Cebu Towers",
        });
    }, [setheaderDetails]);

    return (
        <div className="p-4 space-y-4">
        <Summary />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* First row with three components */}
                <div className="bg-white rounded-lg shadow-md">
                <ActionItems />
                </div>
                <div className="bg-white rounded-lg shadow-md">
                    <RecentWorkOrders />
                </div>
                {/* Add more components as needed */}
                <div className="bg-white rounded-lg shadow-md">
                    {/* Placeholder for Component 3 */}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Second row with three components */}
                <div className="bg-white rounded-lg shadow-md">
                <RecentWorkOrders />
                </div>
                <div className="bg-white rounded-lg shadow-md">
                    {/* Placeholder for Component 5 */}
                </div>
                <div className="bg-white rounded-lg shadow-md">
                    {/* Placeholder for Component 6 */}
                </div>
            </div>
        </div>
    );
}
