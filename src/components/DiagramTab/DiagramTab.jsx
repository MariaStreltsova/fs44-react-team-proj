import Table from './Table/Table';
import React, { useState, useEffect } from 'react';
import Chart from './Chart/Chart';
import { H2Stat } from './DiagramTab.styled';
import { getStatisticYear, getStatisticYearMonth } from 'api/wallet';
import theme from 'theme';

function DiagramTab() {
  const [statData, setStatData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [date, setDate] = useState({ year: null, month: 0 });

  // функция чтения данных о месяце и годе из локалсториджа при старте
  async function readLocalStorageDate() {
    const today = new Date();
    const localStorageDate = JSON.parse(
      localStorage.getItem('dateUserSelected')
    );
    console.log(localStorageDate);
    if (localStorageDate && localStorageDate.month && localStorageDate.year) {
      setDate(localStorageDate);
    } else {
      setDate({ month: today.getMonth(), year: today.getFullYear() });
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

    if (date.month !== 12) {
      data = getStatisticYearMonth(date.year, date.month);
    } else {
      data = getStatisticYear(date.year);
    }
    localStorage.setItem('dateUserSelected', JSON.stringify({ date }));
    setStatData(data);
    setIsLoading(false);
  }, [date]);

  // заглушка, пока нет ответа с сервера
  const data = {
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
  };
  const { totalIncome, totalExpense, expenses } = data;

  // создание массива сумм для чарта
  const expenseSummary = [];
  expenses.forEach((item, index) => (expenseSummary[index] = item.summary));

  // создание объекта название-расход-цвет для таблицы
  const tableData = expenses;
  tableData.forEach((item, index) => (item.color = theme.chartColors[index]));

  const onMonthHandle = e => {
    setDate({ month: e });
  };
  const onYearHandle = e => {
    setDate({ year: e });
  };

  return (
    <div>
      <H2Stat>Statistics</H2Stat>
      <Chart
        totalExpense={totalExpense}
        expenses={expenseSummary}
        backgroundColor={theme.chartColors}
        isLoading={isLoading}
      />
      <Table
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        expenses={tableData}
        isLoading={isLoading}
        onMonthHandle={onMonthHandle}
        onYearHandle={onYearHandle}
      />
    </div>
  );
}

export default DiagramTab;
