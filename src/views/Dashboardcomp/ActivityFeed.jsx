import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ActivityFeed() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get("https://bms-dash-be.onrender.com/api/activities");
        setActivities(response.data);
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };
    fetchActivities();
  }, []);

  // Group activities by user and date
  const groupedActivities = activities.reduce((acc, activity) => {
    const date = new Date(activity.date).toLocaleDateString();
    const user = activity.user;
    if (!acc[date]) {
      acc[date] = {};
    }
    if (!acc[date][user]) {
      acc[date][user] = [];
    }
    acc[date][user].push(activity);
    return acc;
  }, {});

  return (
    <div className="flex-1 p-4 bg-gray-100 rounded-lg shadow-lg w-full overflow-y-auto" style={{ maxHeight: '400px' }}>
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Activity Feed</h2>
      <div className="space-y-4">
        {Object.keys(groupedActivities).map((date) => (
          <div key={date} className="border-b pb-2 mb-2">
           
            {Object.keys(groupedActivities[date]).map((user) => (
              <div key={user} className="mt-2">
                {/* Display date and user name on the same line */}
                <h4 className="font-semibold text-gray-500 flex justify-between">
                  <span>{date}</span>
                  <span>{user}</span>
                </h4>
                {groupedActivities[date][user].map((activity) => (
                  <div key={activity._id} className="flex flex-col p-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 mb-1">
                    <p className="text-xs text-gray-500">
                      {new Date(activity.date).toLocaleTimeString()} - {activity.description}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
