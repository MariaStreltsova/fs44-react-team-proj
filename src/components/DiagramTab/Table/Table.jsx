import React, { useState } from 'react';
import periodCreating from 'util/periodCreating';
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
import numberToMoney from 'util/numberToMoney';

function Table({
  totalIncome,
  totalExpense,
  expenses,
  onMonthHandle,
  onYearHandle,
  startDate,
}) {
  let { period } = periodCreating(startDate);

  let years = period.map(item => item.year).reverse();
  const initialMonths = period
    .filter(item => item.year === years[0])[0]
    .months.reverse();
  const [months, setMonths] = useState(initialMonths);
  console.log(months);
  const onYearClick = e => {
    const newMonths = period.filter(item => item.year === +e.target.value)[0]
      .months;
    setMonths(newMonths);
    onYearHandle(e.target.value);
    onMonthHandle(newMonths[0]);
  };

  console.log(expenses);

  return (
    <Section>
      <SelectorsArea>
        <Selector
          options={months}
          id="month"
          onChange={e => onMonthHandle(e.target.value)}
        />
        <Selector options={years} id="year" onChange={onYearClick} />
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
              <span>{element.categoryName}</span>
            </ExpBlock>
            <span>{numberToMoney(element.totalSum)}</span>
          </DataRow>{' '}
          <Line></Line>
        </div>
      ))}
      <TotalLine>
        <span>Expenses:</span>
        <TotalExp>{numberToMoney(totalExpense)}</TotalExp>
      </TotalLine>
      <TotalLine>
        <span>Income:</span>
        <TotalInc>{numberToMoney(totalIncome)}</TotalInc>
      </TotalLine>
    </Section>
  );
}

export default Table;
