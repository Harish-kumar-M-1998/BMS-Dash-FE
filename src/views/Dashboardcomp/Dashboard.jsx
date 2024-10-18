import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Summary from "./Summary";
import ActionItems from "./ActionItems";
import RecentWorkOrders from "./RecentWorkOrders";
import ManagementReports from "./ManagementReports";
import ActivityFeed from "./ActivityFeed";
import WeatherInfo from "./WeatherInfo";
import CasesGraph from "./CasesGraph";
import LastWorkOrder from "./LastWorkOrder";

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

            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* First Row */}
                <div className="bg-white rounded-lg">
                    <ActionItems />
                </div>
                <div className="bg-white rounded-lg">
                   <LastWorkOrder />
                </div>
                <div className="bg-white rounded-lg flex flex-col gap-4 bg-transparent" style={{ height: '400px' }}>
                    {/* Two Components in the Third Column */}
                    <div className="bg-gray-100 rounded-lg bg-transparent">
                        <WeatherInfo />
                    </div>
                    <div className="bg-gray-100 rounded-lg bg-transparent">
                        <CasesGraph />
                    </div>
                </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg">
                    <RecentWorkOrders />
                </div>
                <div className="bg-white rounded-lg">
                    <ManagementReports />
                </div>
                <div className="bg-white rounded-lg">
                    <ActivityFeed />
                </div>
            </div>
        </div>
    );
}
