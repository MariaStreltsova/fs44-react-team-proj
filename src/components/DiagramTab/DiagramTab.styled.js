import theme from '../../theme';
import styled from 'styled-components';

export const H2Stat = styled.h2`
  padding-left: 20px;
  font-family: ${theme.fonts.title};
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.l};
  line-height: ${theme.lineHeights.normal};
  color: ${theme.colors.mainTxtColor};

  @media (min-width: 768px) {
    padding-left: 32px;
  }

  @media (min-width: 1280px) {
    padding-top: 32px;
    padding-left: 84px;
  }
`;

export const HeadTable = styled.table`
  table-layout: fixed;
  height: 50px;
  width: 100%;
  background: rgb(255, 255, 255, 0.2);

  @media (min-width: 1280px) {
    height: 60px;
  }
`;

export const DataTable = styled.table`
  table-layout: fixed;
  height: 125px;
  width: 100%;

  @media (min-width: 768px) {
    height: 132px;
  }
`;

export const HeadCell = styled.td`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.bold};
`;

export const BodyCell = styled.td`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.normal};
`;
