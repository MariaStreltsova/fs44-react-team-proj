import theme from '../../../theme';
import styled from 'styled-components';

export const Section = styled.div`
  width: 280px;
  background: white;
`;
export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  height: 58px;
  border-radius: 30px;
  background: ${theme.colors.lightBackgroundColor};
  overflow: hidden;
  align-items: center;
`;
export const HeadText = styled.span`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.bold};
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.normal};
`;

export const DataRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
`;

export const ColorDiv = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 2px;
  margin-right: 16px;
`;
export const ExpBlock = styled.div`
  display: flex;
  align-items: center;
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.normal};
`;
export const Line = styled.div`
  height: 1px;
  width: 100%;
  align-self: baseline;
  margin: 20px 0 0 0;
  background-color: #dcdcdf;
`;
export const TotalLine = styled(DataRow)`
  display: flex;
  height: 30px;
  justify-content: space-between;
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.bold};
`;
export const TotalInc = styled.span`
  color: ${theme.colors.incomeColor};
`;

export const TotalExp = styled.span`
  color: ${theme.colors.expenseColor};
`;
