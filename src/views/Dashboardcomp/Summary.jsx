import React, { useEffect, useState } from "react";
import axios from "axios";
import CalendarDropdown from "./CalendarDropdown"; // Import the calendar component
import './Summary.css'; // Custom styles if needed

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

  if (loading) return <p className="text-sm text-center">Loading...</p>;
  if (error) return <p className="text-sm text-center">{error}</p>;

  return (
    <div className="bg-gray-100 p-2 flex flex-col lg:flex-row items-center justify-between">
      {/* Left: Summary Data (Residents, Assets, Contractors, Work Orders) */}
      <div className="grid grid-cols-2 gap-2 lg:flex lg:gap-0 lg:w-auto">
        {/* Summary Item */}
        <div className="lg:border-r border-r-0 lg:mr-5 lg:pr-10 border-gray-300 pr-2 flex flex-col items-center lg:w-1/4 last:border-r-0">
          <h3 className="font-semibold text-center text-sm">Residents</h3>
          <p className="font-bold text-center text-lg">{summaryData.residents || 0}</p>
        </div>
        <div className="lg:border-r border-r-0 border-r lg:mr-5 lg:pr-10 border-gray-300 pr-2 flex flex-col items-center lg:w-1/4 last:border-r-0">
          <h3 className="font-semibold text-center text-sm">Assets</h3>
          <p className="font-bold text-center text-lg">{summaryData.assets || 0}</p>
        </div>
        <div className="lg:border-r border-r-0 border-r lg:mr-5 lg:pr-10 border-gray-300 pr-2 flex flex-col items-center lg:w-1/4 last:border-r-0">
          <h3 className="font-semibold text-center text-sm">Contractors</h3>
          <p className="font-bold text-center text-lg">{summaryData.contractors || 0}</p>
        </div>
        <div className="lg:mr-5 lg:pr-10 pr-2 flex flex-col items-center lg:w-1/4 last:border-r-0">
          <h3 className="font-semibold text-center text-sm">Work Orders</h3>
          <p className="font-bold text-center text-lg">{summaryData.workOrders || 0}</p>
        </div>
      </div>

      {/* Right: Calendar Dropdown */}
      <div className="mt-2 lg:mt-0 lg:ml-auto">
        <CalendarDropdown />
      </div>
    </div>
  );
}
