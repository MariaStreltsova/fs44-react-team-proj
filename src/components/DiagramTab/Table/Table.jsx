import React from 'react';
import {
  ColorDiv,
  THead,
  ChartTable,
  TableSection,
  FirstTd,
  TableRow,
  SecondTd,
  CategoryName,
  HeadText,
} from './Table.styled';

function Table({ totalIncome, totalExpense, expenses, isLoading }) {
  return (
    <TableSection>
      <THead>
        <HeadText>Category</HeadText>
        <HeadText>Sum</HeadText>
      </THead>
      {expenses.map(element => (
        <ul key={element.category}>
          <li>
            <div>
              <span style={{ background: element.color }}></span>
              <span>{element.category}</span>
            </div>
            <span>{element.summary}</span>
          </li>
          <li>
            <span>Expenses:</span>
            <span>{totalExpense}</span>
          </li>
          <li>
            <span>Income:</span>
            <span>{totalIncome}</span>
          </li>
        </ul>
      ))}
    </TableSection>
  );
}

export default Table;
