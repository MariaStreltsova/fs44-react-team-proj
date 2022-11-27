import React, { useState } from 'react';
import {
  ColorDiv,
  Head,
  TotalLine,
  Section,
  TotalExp,
  DataRow,
  Line,
  ExpBlock,
  HeadText,
  TotalInc,
  SelectorsArea,
} from './Table.styled';
import Selector from './Selector/Selector';

function Table({
  totalIncome,
  totalExpense,
  expenses,
  isLoading,
  onMonthHandle,
  onYearHandle,
}) {
  const dataYear = {
    2019: [4, 5, 6, 7, 8, 9, 10, 11, 12].reverse(),
    2020: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reverse(),
    2021: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reverse(),
    2022: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].reverse(),
  };

  const [monthes, setMonthes] = useState(dataYear[2022]);
  const years = Object.keys(dataYear).reverse();

  return (
    <Section>
      <SelectorsArea>
        <Selector
          options={monthes}
          id="month"
          onChange={e => onMonthHandle(e.target.value)}
        />
        <Selector
          options={years}
          id="year"
          onChange={e => onYearHandle(e.target.value)}
        />
      </SelectorsArea>
      <Head>
        <HeadText>Category</HeadText>
        <HeadText>Sum</HeadText>
      </Head>
      {expenses.map(element => (
        <div key={element.category}>
          <DataRow>
            <ExpBlock>
              <ColorDiv style={{ background: element.color }}></ColorDiv>
              <span>{element.category}</span>
            </ExpBlock>
            <span>{element.summary}</span>
          </DataRow>{' '}
          <Line></Line>
        </div>
      ))}
      <TotalLine>
        <span>Expenses:</span>
        <TotalExp>{totalExpense}</TotalExp>
      </TotalLine>
      <TotalLine>
        <span>Income:</span>
        <TotalInc>{totalIncome}</TotalInc>
      </TotalLine>
    </Section>
  );
}

export default Table;
