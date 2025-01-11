import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register necessary ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ labels, data }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Electric Vehicles by Model",
        data,
        backgroundColor: ["#48CAE4", "#2D9CDB", "#56CCF2", "#4F9F98", "#7ED321"],
        borderColor: ["#48CAE4", "#2D9CDB", "#56CCF2", "#4F9F98", "#7ED321"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
        },
      },
    },
  };

  return (
    <div className="chart-container p-3 bg-white shadow-sm rounded">
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
