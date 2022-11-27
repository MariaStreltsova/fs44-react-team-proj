import styled from 'styled-components';
import theme from '../../theme';

export const TransactionsWrap = styled.ul`
  list-style: none;
  padding: 0;
  height: 60vh;
  overflow: hidden;
  overflow-y: scroll;
`;
export const TransactionCardWrap = styled.li`
  margin-top: 10px;
`;
export const TransactionCardList = styled.ul`
  list-style: none;
  padding: 0 20px 0 20px;
  background-color: white;
  position: relative;
  font-family: ${theme.fonts.body};
  border-radius: 10px;
  margin-bottom: 10px;
  overflow: hidden;
  &:after {
    position: absolute;
    content: '';
    width: 5px;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${props =>
      props.type === 'expense'
        ? props.theme.colors.expenseColor
        : props.theme.colors.incomeColor};
  }
`;
export const TransactionCardItem = styled.li`
span:first-of-type {
      font-size: 18px;
    }
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    line-height: 1.25;
    padding: 10px 0 10px 0;
  }:not(:last-of-type) {
    border-bottom: 1px solid #dcdcdf;`;
export const ColoredSum = styled.span`
  color: ${props =>
    props.type === 'expense'
      ? props.theme.colors.expenseColor
      : props.theme.colors.incomeColor};
`;

export const CardsContainer = styled.div`
  max-width: 420px;
  margin: 0 auto;
`;
