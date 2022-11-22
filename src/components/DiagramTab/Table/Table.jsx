import React from 'react';
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
} from './Table.styled';

function Table({ totalIncome, totalExpense, expenses, isLoading }) {
  return (
    <Section>
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
