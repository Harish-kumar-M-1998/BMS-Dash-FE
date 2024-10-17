import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { dashboardMenuDataList } from "../utils/constants";
import { FaBuilding, FaUsers, FaCommentDots, FaChartBar, FaBars } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";

export default function HomeLayout() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [headerDetails, setheaderDetails] = useState({
        title: "",
        subTitle: "",
    });
    const [isSidebarOpen, setSidebarOpen] = useState(false); // State for sidebar toggle

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 transform bg-white shadow-md transition-transform duration-300 w-64 ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0 lg:w-64 lg:static z-20`}
            >
                <div className="p-4">
                    <img
                        src={dashboardMenuDataList.image}
                        alt="Building"
                        className="rounded-lg shadow-lg"
                    />
                    <h2 className="text-lg font-bold mt-4">
                        {dashboardMenuDataList.buildingName}
                    </h2>
                    <p className="text-sm text-gray-600">{dashboardMenuDataList.address}</p>
                </div>
                <nav className="mt-4">
                    {dashboardMenuDataList.menu.map((item, index) => (
                        <p
                            key={index}
                            className={`flex cursor-pointer items-center p-3 text-gray-600 transition-all duration-200 ${
                                pathname.includes(item.navigate)
                                    ? "border-l-4 border-violet-500 bg-gray-100 text-violet-500"
                                    : "hover:bg-gray-100 hover:text-violet-500"
                            }`}
                            onClick={() => {
                                navigate(item.navigate);
                            }}
                        >
                            <span className="mr-3">{item.icon}</span>
                            <span>{item.name}</span>
                        </p>
                    ))}
                </nav>
            </div>

            {/* Main content area */}
            <div className={`flex-1 flex flex-col transition-margin duration-300 ${isSidebarOpen ? "ml-64" : ""}`}>
                {/* Header */}
                <Header headerDetails={headerDetails} setSidebarOpen={setSidebarOpen} isSidebarOpen={isSidebarOpen} />
                
                {/* Content Wrapper */}
                <div className="flex-1 p-4 overflow-y-auto">
                    <Outlet context={{ setheaderDetails }} />
                </div>
            </div>

            {/* Overlay for sidebar on mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}
        </div>
    );
}

const Header = ({ headerDetails, setSidebarOpen, isSidebarOpen }) => {
    return (
        <div className="flex justify-between items-center bg-gray-50 shadow-sm p-4 h-20 lg:h-20 lg:sticky lg:top-0 z-10">
            <div className="flex items-center">
                {/* Hamburger Icon for mobile */}
                <button
                    className="lg:hidden p-2 rounded-md focus:outline-none hover:bg-gray-100 mr-2"
                    onClick={() => setSidebarOpen(!isSidebarOpen)}
                    aria-label="Toggle Sidebar"
                >
                    <FaBars size={24} />
                </button>
                <div>
                    <h1 className="text-2xl font-semibold">{headerDetails?.title ?? ""}</h1>
                    <p className="text-gray-500">{headerDetails?.subTitle ?? ""}</p>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <div className="group cursor-pointer p-2 rounded-full hover:bg-violet-500">
                    <FaBuilding
                        className="text-gray-400 group-hover:text-white"
                        size={24}
                        title="Building"
                    />
                </div>
                <div className="group cursor-pointer p-2 rounded-full hover:bg-violet-500">
                    <FaUsers
                        className="text-gray-400 group-hover:text-white"
                        size={24}
                        title="Community"
                    />
                </div>
                <div className="group cursor-pointer p-2 rounded-full hover:bg-violet-500">
                    <FaCommentDots
                        className="text-gray-400 group-hover:text-white"
                        size={24}
                        title="Messages"
                    />
                </div>
                <div className="group cursor-pointer p-2 rounded-full hover:bg-violet-500">
                    <FaChartBar
                        className="text-gray-400 group-hover:text-white"
                        size={24}
                        title="Reports"
                    />
                </div>

                <div className="flex items-center space-x-2">
                    <div className="group cursor-pointer p-2 rounded-full hover:bg-violet-500">
                        <HiOutlineUserCircle
                            size={32}
                            className="text-gray-400 group-hover:text-white"
                        />
                    </div>
                    <div>
                        <select className="bg-transparent text-gray-700 text-sm font-semibold">
                            <option>User</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};
