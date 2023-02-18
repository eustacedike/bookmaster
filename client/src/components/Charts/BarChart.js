import React from 'react';
import {Bar} from 'react-chartjs-2';
// import {CategoryScale} from 'chart.js'; 
// Chart.register(CategoryScale);
import Chart from 'chart.js/auto';



const state = {
  labels: ['Jan'
        ],
        options: {
            maintainAspectRatio: false,
            responsive: true,
        },
  datasets: [
    {
      label: 'Jan',
      fill: true,
      lineTension: 0.5,
      backgroundColor: '#3f7afc',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 0.1,
      data: [41]
    },
    {
      label: 'Feb',
      fill: true,
      lineTension: 0.5,
      backgroundColor: '#3f7afc',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 0.1,
      data: [88]
    },
    {
      label: 'Mar',
      fill: true,
      lineTension: 0.5,
      backgroundColor: '#3cb878',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 0.1,
      data: [125]
    },
    {
      label: 'Apr',
      fill: true,
      lineTension: 0.5,
      backgroundColor: '#3f7afc',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 0.1,
      data: [65]
    }
  ]
}

export default function BarChart() {

  const dataBar = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "#3f7afc",
        // borderColor: "rgba(255,99,132,1)",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 80, 81]
      }
    ]
  };

  const options = {
    plugins: {
      datalabels: {
        display: true,
        color: "black",
        formatter: Math.round,
        anchor: "end",
        offset: -20,
        align: "center"
      }
    },
    label: {display: false},
    legend: {
      display: false
    },
    maintainAspectRatio: false,
            responsive: true,
  };
  return (
    <div>
      <Bar data={dataBar} options={options} width={400} height={200} />
    </div>
  );
}

    