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
  const [date, setDate] = useState({ year: null, month: null });

  // при первом рендере заполняем дату текущим годом и месяцем
  useEffect(() => {
    const today = new Date();
    setDate({ year: today.getFullYear(), month: today.getMonth() });
  }, []);

  // при получении данных с сервера запускаем рендер данных
  useEffect(() => {
    if (statData && Object.keys(statData).length > 0) {
      setIsLoading(false);
    }
  }, [statData]);

  // при выборе месяца вносим в стейт номер месяца
  const onMonthHandle = e => {
    setDate({ ...date, month: monthsNames.indexOf(e) });
  };

  // при выборе года вносим его в стейт
  const onYearHandle = e => {
    setDate({ ...date, year: e });
  };

  // при изменении года-месяца делаем запрос на сервер, ответ вносим в стейт
  useEffect(() => {
    if (date.month !== null && date.year !== null) {
      getStatisticYearMonth(date.year, date.month).then(data =>
        setStatData(data.data)
      );
    }
  }, [date]);

  return (
    <DiagramBlock>
      {isLoading ? (
        <CurrencyLoader />
      ) : (
        <>
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
        </>
      )}
    </DiagramBlock>
  );
}

export default DiagramTab;
