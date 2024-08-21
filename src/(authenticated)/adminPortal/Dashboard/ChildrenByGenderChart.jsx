// File path: src/components/ChildrenByGenderChart.js
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { fetchChildren } from "../../api/Children/children.api.js";

const ChildrenByGenderChart = () => {
  const chartRef = useRef(null);
  const [childrenData, setChildrenData] = useState({ boys: 0, girls: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchChildren(1, 1000); // fetch all children
      const boys = data.children.filter(
        child => child.gender === "Masculin"
      ).length;
      const girls = data.children.filter(
        child => child.gender === "Femenin"
      ).length;
      setChildrenData({ boys, girls });
    };

    fetchData();
  }, []);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const genderChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Filles", "Garçons"],
        datasets: [
          {
            label: "Enfants par sexe",
            data: [childrenData.girls, childrenData.boys],
            backgroundColor: ["#E56D4B", "#75B9BE"],
            hoverBackgroundColor: ["#FF8000", "#67D0E9"],
          },
        ],
      },
    });

    return () => {
      genderChart.destroy();
    };
  }, [childrenData]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-250 h-auto">
      <h2 className="text-md lg:text-xl font-semibold mb-4">
        Enfants par genre
      </h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ChildrenByGenderChart;
