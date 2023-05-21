import React, { useEffect, useState, useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { UserData } from '../Data';
import { Data } from '../PriceData';
import { TD } from '../TransactionData';
import GlobalContext from '../context/globalContext';


const Charts = () => {

  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );


  // check dark mode

  const context = useContext(GlobalContext);
  const { graph, getGraph } = context;
  const [userData, setUserData] = useState(null); // Initialize as null

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: isDarkMode?'white':'gray',
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: isDarkMode?'white':'gray',
        },
      },
    },
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (event) => {
      setIsDarkMode(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);


    // console.log("data changing")
    getGraph();
    // Update userData whenever data changes
    setUserData({
      labels: graph.map((data) => data.date.split('-')[1] + '-' + data.date.split('-')[2]),
      datasets: [
        {
          label: 'Stocks Bought',
          data: graph.map((data) => {
            if (data.type !== 'buy') return null;
            else return data.price;
          }),
          borderColor: 'white',
          borderWidth: 3,
          backgroundColor: 'green',
          pointBorderColor: 'green',
          pointRadius: 5,
          pointBackgroundColor: 'white',
          pointHoverRadius: 5,
        },
        {
          label: 'Stocks Sold',
          data: graph.map((data) => {
            if (data.type !== 'sell') return null;
            else return data.price;
          }),
          borderColor: 'white',
          borderWidth: 3,
          backgroundColor: '#f26c6d',
          pointBorderColor: 'red',
          pointRadius: 5,
          pointBackgroundColor: 'white',
          pointHoverRadius: 5,
        },
        {
          label: 'Nifty50 Price',
          data: graph.map((data) => data.price),
          fill: true,
          borderColor: isDarkMode?'#152238':'#2dd4bf',
          borderWidth: 2,
          backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#2dd4bf',
          pointBorderColor: '#f26c6d',
          pointBorderWidth: 3,
          pointRadius: 0,
          pointBackgroundColor: '#fff',
        },
      ],
    });


    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [graph]);

  return (
    <>
      <div className='m-3 mx-12'></div>
      <div className='bg-gray-50 dark:bg-dark4 dark:shadow-dark1 opacity-75 rounded-3xl p-4 text-gray-700 shadow-lg'>
        {userData && <Line data={userData} options={options} />} {/* Render the chart only when userData is not null */}
      </div>
    </>
  );
};

export default Charts;
