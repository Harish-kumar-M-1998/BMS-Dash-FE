import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "react-apexcharts";

const CasesGraph = () => {
  const [data, setData] = useState({
    series: [],
    labels: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cases");
        const caseData = response.data;

        // Prepare data for the chart
        setData({
          series: caseData.map(item => item.count),
          labels: caseData.map(item => item.category),
        });
      } catch (error) {
        console.error("Error fetching case data:", error);
      }
    };

    fetchData();
  }, []);

  const chartOptions = {
    chart: {
      type: "donut",
      width: "100%",
      height: "100%",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 400,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    colors: ["#FF4560", "#008FFB", "#00E396", "#775DD0"], // Define your colors
    labels: data.labels,
    stroke: {
      show: true,
      width: 4,
      colors: ["#fff"], // White stroke for a 3D effect
    },
    dataLabels: {
      enabled: false,
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        opacity: 0.45,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontSize: "14px",
        color: "#fff",
      },
    },
  };

  return (
    <div className="bg-white rounded-lg p-4" style={{ width: '300px', height: '300px' }}>
      <h3 className="mb-2 text-center">Cases Graph</h3>
      <Chart
        options={chartOptions}
        series={data.series}
        type="donut"
        width="100%"
      />
    </div>
  );
};

export default CasesGraph;
