import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const OverviewChart = () => {
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "",
          backgroundColor: "#f2efff",
          borderColor: "transparent",
          borderRadius: "10",
          borderWidth: 0,
          data: [70, 50, 100, 80, 90, 30, 90, 100, 90, 70, 60, 70],
        },
      ],
    },
    options = {
        maintainAspectRatio: false,
        plugins: {
            legend: false
        },
        scales: {
            y: {
                display: false,
                grid: {
                    display: false,
                  },
            },
            x: {
                display: true,
                grid: {
                    display: false,
                  },
            }
        }   
    }
    

    return (
        <>
            <div className="card border-0 p-4">
                <div className="chart-title d-flex align-items-center justify-content-between mb-3">
                    <div>
                    <h4 className="card-title">Overview</h4>
                <p><small>Monthly Earning</small></p>
                    </div>
                    <div className="show-type">
                        <select>
                        <option>Yearly</option>
                        <option>Halfly</option>
                        <option>Quarterly</option>
                        </select>
                    </div>
                </div>
               
                <div className="chart-container">
                    <Bar style={{height: 250}} data={data} options={options}  />
                </div>
            </div>
        </>
    )
}

export default OverviewChart;