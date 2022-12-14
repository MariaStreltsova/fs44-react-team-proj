import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ChartLayout, ChartText } from './Chart.styled';
import CurrencyLoader from 'UI/loaders/CurrencyLoader';
import numberToMoney from 'util/numberToMoney';

ChartJS.register(ArcElement, Tooltip);

function Chart({ totalExpense, expenses, backgroundColor, isLoading }) {
  const totalInChart = numberToMoney(totalExpense);
  const data = Object.values(expenses);

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
          <Doughnut data={chartData} />
          <ChartText>₴ {totalInChart}</ChartText>
        </>
      )}
    </ChartLayout>
  );
}

export default Chart;
