import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaDownload } from "react-icons/fa"; // Import the download icon

export default function ManagementReports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch the reports data from the API
    const fetchReports = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/reports");
        setReports(response.data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };
    fetchReports();
  }, []);

  return (
    <div className="flex-1 p-4 bg-gray-100 rounded-lg shadow-lg w-full">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Management Reports</h2>
      
      {/* Container with fixed height of 400px and scroll if needed */}
      <div className="overflow-y-auto max-h-[400px]">
        <ul className="space-y-3">
          {reports.map((report) => (
            <li
              key={report._id}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:bg-[#6E8EFF]"
            >
              {/* Use flex-col to stack title and description vertically */}
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium text-gray-700">{report.title}</p>
                <p className="text-xs text-gray-500">{report.description}</p>
              </div>
              <a
                href={report.reportFile}
                download
                className="text-violet-500 hover:text-violet-700"
                title="Download"
              >
                <FaDownload size={16} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
