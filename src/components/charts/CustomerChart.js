import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const CustomerChart = () => {
     
    const data = {
      datasets: [
        {
          label: "",
          data: [20, 45, 35],
          borderColor: 'transparent',
          backgroundColor: [
            "#f23f9e",
            "#5f37ea",
            "#f1effc",
        ],
       
        }
      ]
    },
    options = {
        maintainAspectRatio: false,
        plugins: {
            legend: false
        },
        scales: {
            y: {
                display: false
            },
            x: {
                display: false
            }
        }   
    }
    
   
    

    return (
        <>
            <div className="card border-0 p-4">
                <div className="chart-title mb-3">
                    <h4 className="card-title">Customers</h4>
                <p><small>Customers that buy products</small></p>
                </div>
                <div className="chart-lables">
                        <span className="bold-text">65%</span><br />Total New<br/>Customers
                    </div>
                <div className="chart-container">
                    
                    <Doughnut style={{height: 250}} data={data}  options={options} />
                    
                </div>
            </div>
        </>
    )
}

export default CustomerChart;