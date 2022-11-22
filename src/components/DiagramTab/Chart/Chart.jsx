import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ChartLayout, ChartText } from './Chart.styled';
import CurrencyLoader from 'UI/loaders/CurrencyLoader';

ChartJS.register(ArcElement, Tooltip);

function Chart({ expenses, details, backgroundColor, isLoading = true }) {
  expenses = expenses.toLocaleString('ru-RU') + expenses.toFixed(2).slice(-3);

  const data = Object.values(details);
  const chartData = {
    datasets: [
      {
        data,
        backgroundColor,
        borderWidth: 0,
        borderJoinStyle: 'round',
        cutout: '70%',
      },
    ],
  };

  return (
    <ChartLayout>
      {isLoading ? (
        <CurrencyLoader />
      ) : (
        <>
          {' '}
          <Doughnut data={chartData} />
          <ChartText>₴ {expenses}</ChartText>
        </>
      )}
    </ChartLayout>
  );
}

export default Chart;
