// src/components/LineChart.jsx
import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ data }) => {
  const chartData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Revenue Data",
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        data: data,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: "category", // Ensure 'category' type is used for x-axis if using labels
        labels: ["Label 1", "Label 2", "Label 3"], // Example labels
      },
      y: {
        beginAtZero: true, // Example configuration for y-axis
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return "$" + context.raw.toLocaleString();
          },
        },
      },
    },
  };

  return (
    <div className="chart">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default LineChart;
