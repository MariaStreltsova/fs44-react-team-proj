import Table from './Table/Table';
import React, { useState, useEffect } from 'react';
import Chart from './Chart/Chart';
import { TitleStat, DiagramBlock } from './DiagramTab.styled';
import { getStatisticYearMonth } from 'api/wallet';
import theme from 'theme';
import chartDataCreating from 'util/chartDataCreating';
import statTableDataCreating from 'util/statTableDataCreating';
import CurrencyLoader from 'UI/loaders/CurrencyLoader';

function DiagramTab() {
  const monthsNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const [statData, setStatData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  async function fetchData() {
    // let data = null;
    // if (month !== 12) {
    const data = await getStatisticYearMonth(year, month);
    // } else {
    // data = await getStatisticYear(year);
    // }
    setStatData(data.data);
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (Object.keys(statData).length > 0) {
      setIsLoading(false);
    }
  }, [statData]);

  const onMonthHandle = e => {
    setMonth(monthsNames.indexOf(e));
  };
  const onYearHandle = e => {
    setYear(e);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year, month]);

  return isLoading ? (
    <CurrencyLoader />
  ) : (
    <DiagramBlock>
      <div>
        <TitleStat>Statistics</TitleStat>
        <Chart
          totalExpense={statData.totalExpense}
          expenses={chartDataCreating(statData.expenses)}
          backgroundColor={theme.chartColors}
          isLoading={isLoading}
        />
      </div>
      <Table
        totalIncome={statData.totalIncome}
        totalExpense={statData.totalExpense}
        expenses={statTableDataCreating(statData.expenses)}
        onMonthHandle={onMonthHandle}
        onYearHandle={onYearHandle}
        startDate={statData.firstTransactionDate}
      />
    </DiagramBlock>
  );
}

export default DiagramTab;
