import styled from 'styled-components';
import theme from '../../theme';
import TableRow from '@mui/material/TableContainer';

export const TransactionsWrap = styled.ul`
  list-style: none;
  padding: 0;
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
  max-width: 300px;
  margin: 0 auto;
  margin-top: 32px;
`;

export const TablePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    margin-top: 40px;
  }
  @media (min-width: 1280px) {
    width: 715px;
    margin-top: 40px;
  }
`;
export const TitleTablePlaceholder = styled.h3`
  text-align: center;
  font-family: ${theme.fonts.title};
  font-style: normal;
  font-size: 24px;
`;
export const PlaceholderContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledContainer = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    // width: 704px;
    margin-top: 20px;
  }
  @media (min-width: 1280px) {
    // width: 715px;
    margin-top: 0;
  }

  & .MuiTableCell-root {
    font-family: 'Circe';
    font-weight: 400;
    font-size: 16px;
    text-align: center;
  }

  & .MuiTable-root {
    padding-left: 0;
  }
`;

export const MyTableRow = styled(TableRow)`
  display: flex;
  height: 50px;
  padding: 0;
`;
