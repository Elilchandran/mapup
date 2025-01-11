// BarChart.js
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import axios from 'axios';

// Registering the required Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const BarChart = () => {
  const [data, setData] = useState([]);

  // Fetching data from the CSV file 
  useEffect(() => {
    axios
      .get('https://raw.githubusercontent.com/vedant-patil-mapup/analytics-dashboard-assessment/refs/heads/main/data-to-visualize/Electric_Vehicle_Population_Data.csv')
      .then((response) => {
        const rows = response.data.split('\n');
        //const headers = rows[0].split(',');
        const cities = [];
        const evCounts = [];

        // Iterate over the rows to extract relevant data
        rows.slice(1).forEach((row) => {
          const values = row.split(',');
          const city = values[2]; // City is in the 3rd column
          const vehicleType = values[8]; // Vehicle Type is in the 9th column

          // Only count BEVs for simplicity
          if (vehicleType === 'Battery Electric Vehicle (BEV)') {
            const index = cities.indexOf(city);
            if (index === -1) {
              cities.push(city);
              evCounts.push(1);
            } else {
              evCounts[index]++;
            }
          }
        });

        setData({ cities, evCounts });
      })
      .catch((error) => {
        console.error('Error fetching data', error);
      });
  }, []);

  // Preparing the chart data
  const chartData = {
    labels: data.cities,
    datasets: [
      {
        label: 'EV Population (BEV)',
        data: data.evCounts,
        backgroundColor: '#2e0954',
        borderColor: '#2e0954',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Electric Vehicle Population by City</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
