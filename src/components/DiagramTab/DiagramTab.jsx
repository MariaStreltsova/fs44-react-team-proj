import Table from './Table/Table';
import React, { useState } from 'react';
import Chart from './Chart/Chart';
import { H2Stat } from './DiagramTab.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading, getStatData } from '../../redux/wallet/wallet-selectors';
import { getStatisticData } from 'api/wallet';

function DiagramTab() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const statData = useSelector(getStatData);

  if (statData === null) {
    const today = new
      let today = new Date(); // Mon Nov 23 2020 15:23:46 GMT+0300 (Москва, стандартное время)
let year = today.getFullYear(); // 2020
      // первый запрос на сервер
      dispatch(getStatisticData({ year: year, month: month }));
  }

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

  // создание массива цветов
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

  // создание объекта название-расход-цвет для таблицы
  const tableData = expenses;
  tableData.forEach((item, index) => (item.color = backgroundColor[index]));

  return (
    <div>
      <H2Stat>Statistics</H2Stat>
      <Chart
        totalExpense={totalExpense}
        expenses={expenseSummary}
        backgroundColor={backgroundColor}
        isLoading={isLoading}
      />
      <Table
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        expenses={tableData}
        isLoading={isLoading}
      />
    </div>
  );
}

export default DiagramTab;
