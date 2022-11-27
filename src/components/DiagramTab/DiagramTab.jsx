import Table from './Table/Table';
import React, { useState, useEffect } from 'react';
import Chart from './Chart/Chart';
import { TitleStat, DiagramBlock } from './DiagramTab.styled';
import { getStatisticYear, getStatisticYearMonth } from 'api/wallet';
import theme from 'theme';
import chartDataCreating from 'util/chartDataCreating';
import statTableDataCreating from 'util/statTableDataCreating';
import CurrencyLoader from 'UI/loaders/CurrencyLoader';
import periodCreating from 'util/periodCreating';

function DiagramTab() {
  const [statData, setStatData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);

  // заглушка, пока нет ответа с сервера
  let data1 = {
    totalIncome: 25000,
    totalExpense: 24000,
    expenses: [
      { category_id: 1, category: 'basic', summary: 8700 },
      { category_id: 1, category: 'products', summary: 3800.74 },
      { category_id: 1, category: 'car', summary: 1500 },
      { category_id: 1, category: 'selfCare', summary: 800 },
      { category_id: 1, category: 'child', summary: 2208.5 },
      { category_id: 1, category: 'household', summary: 300 },
      { category_id: 1, category: 'education', summary: 3400 },
      { category_id: 1, category: 'leisure', summary: 1230 },
      { category_id: 1, category: 'other', summary: 610 },
    ],
    startDate: 1589389537943,
  };

  periodCreating(data1.startDate);

  // функция чтения данных о месяце и годе из локалсториджа при старте
  async function readLocalStorageDate() {
    const today = new Date();
    const localStorageYear = JSON.parse(
      localStorage.getItem('yearUserSelected')
    );
    const localStorageMonth = JSON.parse(
      localStorage.getItem('monthUserSelected')
    );

    if (localStorageYear) {
      setYear(localStorageYear);
      if (localStorageMonth) {
        setMonth(localStorageMonth);
      }
    } else {
      setYear(today.getFullYear());
      setMonth(today.getMonth());
    }
  }

  // при старте запускаем чтение начальных данных о месяце-годе из сториджа
  useEffect(() => {
    readLocalStorageDate();
  }, []);

  // реакция на изменение года или месяца для запрос на получение данных
  useEffect(() => {
    setIsLoading(true);
    let data = null;

    if (month !== 'All year') {
      data = getStatisticYearMonth(year, month);
    } else {
      data = getStatisticYear(year);
    }
    localStorage.setItem('yearUserSelected', JSON.stringify(year));
    localStorage.setItem('monthUserSelected', JSON.stringify(month));
    setStatData(data1); //! убрать единицу, когда заработает сервер!!!!!!!!!!!!!!
    setIsLoading(false);
  }, [month, year]);

  const onMonthHandle = e => {
    setMonth(e);
  };
  const onYearHandle = e => {
    setYear(e);
  };

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
        startDate={statData.startDate}
      />
    </DiagramBlock>
  );
}

export default DiagramTab;
