import React from 'react';
import {Line} from 'react-chartjs-2';
// import {CategoryScale} from 'chart.js'; 
// Chart.register(CategoryScale);
import Chart from 'chart.js/auto';



const state = {
  labels: ['Jan', 'Feb', 'Mar',
           'Apr', 'May', 'Jun', 'Jul', 'Aug',
            'Sep', 'Oct', 'Nov', 'Dec'
        ],
  datasets: [
    {
      label: 'Fees',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'red',
      borderColor: 'red',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56, 34, 43, 76, 45, 43, 101, 75]
    },
    {
      label: 'Others',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'blue',
      borderColor: 'blue',
      borderWidth: 2,
      data: [10, 54, 87, 41, 12, 102, 85, 24, 36, 85, 19, 22]
    }
  ]
}

export default function LineChart() {

    return (
      <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );

}