// src/components/BarChart.jsx
import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data }) => {
  const chartData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales Data",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
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
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
