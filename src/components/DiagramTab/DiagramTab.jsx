import React from 'react';
import Chart from './Chart/Chart';
import { H2Stat } from './DiagramTab.styled';

function DiagramTab() {
  const data = {
    income: 25000,
    expenses: 24000,
    details: {
      basic: 8700,
      products: 3800.74,
      car: 1500,
      selfCare: 800,
      child: 2208.5,
      household: 300,
      education: 3400,
      leisure: 1230,
      other: 610,
    },
  };

  const backgroundColor = [
    'rgba(254, 208, 87, 1)',
    'rgba(255, 216, 208, 1)',
    'rgba(253, 148, 152, 1)',
    'rgba(197, 186, 255, 1)',
    'rgba(110, 120, 232, 1)',
    'rgba(74, 86, 226, 1)',
    'rgba(129, 225, 255, 1)',
    'rgba(36, 204, 167, 1)',
    'rgba(0, 173, 132, 1)',
  ];

  const { expenses, details } = data;

  return (
    <div>
      <H2Stat>Statistics</H2Stat>
      <Chart
        expenses={expenses}
        details={details}
        backgroundColor={backgroundColor}
      />
      <div>Table</div>
    </div>
  );
}

export default DiagramTab;
