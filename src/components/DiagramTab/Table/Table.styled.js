import theme from '../../../theme';
import styled from 'styled-components';

export const TableSection = styled.div`
  width: 280px;
  background: #dcdcdf;
`;
export const THead = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  height: 58px;
  border-radius: 30px;
  background: ${theme.colors.lightBackgroundColor};
  overflow: hidden;
`;
export const HeadText = styled.span`
  display: block;
  outline: 1px solid tomato;
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.bold};
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.normal};
`;

export const TableRow = styled.tr`
  height: 50px;
`;
export const FirstTd = styled.td`
  display: flex;
  width: 200px;
  padding-left: 20px;
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.normal};
  vertical-align: baseline;
`;
export const ColorDiv = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 2px;
  margin-right: 16px;
`;
export const CategoryName = styled.span`
  display: block;
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.normal};
`;
export const SecondTd = styled.td`
  padding-right: 20px;
  text-align: end;
`;
