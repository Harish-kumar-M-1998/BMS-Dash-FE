import React, { useEffect, useState } from "react";
import axios from "axios";
import { WiDaySunny } from "react-icons/wi"; // Weather icon for sunny

export default function WeatherInfo() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/weather");
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeather();
  }, []);

  if (!weather) return <div>Loading...</div>;

  return (
    <div className="flex space-x-4 p-4 w-full bg-transparent">
      {/* Weather Box */}
      <div className="flex-1 bg-[#7B81F3] p-4 rounded-lg shadow-lg">
       
        <div className="flex flex-col items-center justify-center">
          <div> <WiDaySunny size={35} className="mr-2 text-yellow-500 " />
          
            
            <p className="text-sm text-white">{weather.description}</p>
            <p className="text-sm text-white">{weather.temperature}°C</p>
          </div>
        </div>
      </div>

      {/* Important Numbers Box */}
      <div className="flex-1 bg-[#F99797] p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <h2 className="text-lg font-semibold text-gray-700 mb-2 text-white">Important Numbers</h2>
        <p className="text-sm text-white"> {weather.importantNumbers.phone}</p>
        <p className="text-sm text-white"> {weather.importantNumbers.email}</p>
      </div>
    </div>
  );
}
