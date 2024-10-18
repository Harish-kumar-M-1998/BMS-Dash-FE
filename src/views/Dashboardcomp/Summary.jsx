import React, { useEffect, useState } from "react";
import axios from "axios";
import CalendarDropdown from "./CalendarDropdown"; // Import the calendar component

export default function Summary() {
  const [summaryData, setSummaryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSummaryData = async () => {
      try {
        const response = await axios.get("https://bms-dash-be.onrender.com/api/summary");
        setSummaryData(response.data);
      } catch (err) {
        setError("Error fetching summary data");
      } finally {
        setLoading(false);
      }
    };

    fetchSummaryData();
  }, []);

  if (loading) return <p className="text-sm">Loading...</p>;
  if (error) return <p className="text-sm">{error}</p>;

  return (
    <div className="bg-gray-100 p-4 flex items-center justify-between">
      {/* Left: Summary Data (Residents, Assets, Contractors, Work Orders) */}
      <div className="flex space-x-8 text-m">
        <div className="border-r border-gray-300 pr-10">
          <h3 className="font-semibold">Residents</h3>
          <p className="font-bold">{summaryData.residents || 0}</p>
        </div>
        <div className="border-r border-gray-300 pr-10">
          <h3 className="font-semibold">Assets</h3>
          <p className="font-bold">{summaryData.assets || 0}</p>
        </div>
        <div className="border-r border-gray-300 pr-10">
          <h3 className="font-semibold">Contractors</h3>
          <p className="font-bold">{summaryData.contractors || 0}</p>
        </div>
        <div className="border-r border-gray-300 pr-10">
          <h3 className="font-semibold">Work Orders</h3>
          <p className="font-bold">{summaryData.workOrders || 0}</p>
        </div>
      </div>

      {/* Right: Calendar Dropdown */}
      <div className="ml-auto">
        <CalendarDropdown />
      </div>
    </div>
  );
}
