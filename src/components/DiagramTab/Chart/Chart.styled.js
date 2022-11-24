import theme from '../../../theme';
import styled from 'styled-components';

export const ChartLayout = styled.h2`
  position: relative;
  width: 280px;
  height: 280px;

  @media (min-width: 768px) {
    width: 336px;
    height: 336px;
  }

  @media (min-width: 1280px) {
    width: 288px;
    height: 288px;
  }
`;
export const ChartText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 160px;
  height: 24px;

  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.m};
  text-align: center;
  line-height: ${theme.lineHeights.normal};
  color: ${theme.colors.mainTxtColor};
`;
