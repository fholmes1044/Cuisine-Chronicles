import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function CategoryBarGraph({ allReviews }) {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  let costTotal = 0;

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const categories = ["Breakfast", "Lunch", "Dinner", "Dessert"];
      const categoryCounts = categories.map(
        (category) =>
          allReviews.filter((review) => review.category === category).length
      );

      chartInstance.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: categories,
          datasets: [
            {
              label: "Frequency",
              data: categoryCounts,
              backgroundColor: ["#dd7e5b", "#947a82", "#7c3d2f", "#4f5565"],
              borderColor: ["#dd7e5b", "#947a82", "#7c3d2f", "#4f5565"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Frequency",
              },
              ticks: {
                font: {
                  size: 15,
                },
              },
            },
          },
        },
      });
    }
  }, [allReviews]);

  for (let i = 0; i < allReviews.length; i++) {
    costTotal += parseInt(allReviews[i].total);
  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <h2>Your Food Category Breakdown</h2>
        <div
          ref={chartContainerRef}
          style={{ width: "800px", height: "600px" }}
        >
          <canvas ref={chartRef} />
        </div>
      </div>
      <div style={{ flex: 1, marginTop: "220px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>
            Total Food Spending:
          </div>
          <div style={{ fontSize: "36px", fontWeight: "bold" }}>
            ${costTotal}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBarGraph;
