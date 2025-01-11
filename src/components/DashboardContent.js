import React, { useEffect, useState } from "react";
import axios from "axios";
import Papa from "papaparse";
import BarChart from "./BarChart";

const DashboardContent = () => {
  const [chartData, setChartData] = useState({ labels: [], data: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/vedant-patil-mapup/analytics-dashboard-assessment/refs/heads/main/data-to-visualize/Electric_Vehicle_Population_Data.csv"
        );
        Papa.parse(response.data, {
          header: true,
          complete: (results) => {
            const labels = results.data.slice(0, 10).map((row) => row.Model);
            const data = results.data.slice(0, 10).map((row) => parseInt(row.Population, 10) || 0);
            setChartData({ labels, data });
          },
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2 id="overview" className="mb-4 text-primary">EV Model Overview</h2>
      <BarChart labels={chartData.labels} data={chartData.data} />
    </div>
  );
};

export default DashboardContent;
