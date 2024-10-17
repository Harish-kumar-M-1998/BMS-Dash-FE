import React, { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai"; // Optional: calendar icon

const CalendarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle calendar open/close
  const toggleCalendar = () => setIsOpen(!isOpen);

  // Close the calendar if clicking outside (optional)
  const closeCalendar = () => setIsOpen(false);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthDays = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="relative">
      {/* Calendar Icon or Button */}
      <button
        onClick={toggleCalendar}
        className="flex items-center text-sm font-semibold p-2 bg-gray-200 rounded-md"
      >
        <AiOutlineCalendar className="mr-2" /> Select Date
      </button>

      {/* Dropdown Calendar */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 p-4 bg-white shadow-lg rounded-md">
          <h2 className="text-lg font-semibold mb-2">October 2024</h2>
          <div className="grid grid-cols-7 gap-1 text-center text-xs">
            {days.map((day) => (
              <div key={day} className="font-bold">
                {day}
              </div>
            ))}
            {monthDays.map((day) => (
              <div
                key={day}
                className="border border-gray-200 p-1 hover:bg-blue-100 transition duration-150 cursor-pointer"
                onClick={closeCalendar}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarDropdown;
