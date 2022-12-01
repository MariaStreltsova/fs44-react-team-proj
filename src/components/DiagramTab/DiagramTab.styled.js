import theme from '../../theme';
import styled from 'styled-components';
import Chart from './Chart/Chart';

export const StatisticsBox = styled.div`
width: 100vw;
heigth: 100vh;
padding: 0 20px 48px 20px;

@media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 0 0 24px 0;
  }
`

export const TitleStat = styled.h2`
  padding-left: 20px;
  padding-bottom: 8px;
  font-family: ${theme.fonts.title};
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.l};
  line-height: ${theme.lineHeights.normal};
  color: ${theme.colors.mainTxtColor};
  align-self: center;

  @media (min-width: 768px) {
    padding-left: 0px;
    padding-bottom: 20px;
  }

  @media (min-width: 1280px) {
    padding-left: 15px;
    font-size:30px;
  }
`;

export const DiagramBlock = styled.div`
  position: relative;
  
  @media (min-width: 768px) {
    width: 704px;
    justify-content: space-between;
    display: flex;
    gap: 32px;
  }

  @media (min-width: 1280px) {
    width: 715px;
  }
`;

export const MyChart = styled(Chart)`
width: 280px;
height: 280px;
@media (min-width: 768px){
width: 336x;
height: 336px;
}

@media (min-width: 1280px) {
    width: 288px;
    height: 288px;
  }
`