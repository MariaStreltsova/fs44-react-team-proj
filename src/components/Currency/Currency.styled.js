import theme from '../../theme';
import styled from 'styled-components';
import backPicture from './images/bg.png';

export const CurrencyBlock = styled.div`
  position: relative;
  width: 280px;
  height: 174px;
  border-radius: 30px;
  overflow: hidden;
  margin-top: 0px;
  margin-left: 0px;

  color: ${theme.colors.lightTxtColor};
  font-size: ${theme.fontSizes.s};
  text-align: center;
  font-weight: ${theme.fontWeights.normal};

  background: ${theme.colors.accentColor};
  background-image: url(${backPicture});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;

  @media (min-width: 768px) {
    /* position: relative; */ //! не трогать - сбиваетя лоадер
    /* top: 32px;
    right: 32px; */

    width: 336px;
    height: 182px;
  }

  @media (min-width: 1280px) {
    margin-top: 32px;
    /* position: static; */ //! не трогать - сбиваетя лоадер
    margin-left: 2px;
    width: 393px;
    height: 347px;
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

export const Wrapper = styled.div`
 position: relative;
 top: 0px;
    right: 0px;
  @media (min-width: 768px) {
    position: absolute; //! не трогать - сбиваетя лоадер
    top: 32px;
    right: 32px;

    @media (min-width: 1280px) {
      position: relative;
      top: 0px;
    right: 0px;}`