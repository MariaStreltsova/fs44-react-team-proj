import styled from 'styled-components';
import theme from '../../theme';

export const BalanceWrapper = styled.div`
margin-left:auto;
margin-right:auto;
  width: 280px;
  height: 80px;
  padding: 8px 32px 11px 32px;
  background-color: ${theme.colors.lightBackgroundColor};
  border-radius: 30px;
  margin-top: 15px;
  @media (min-width: 768px) {
    margin-left:0;
margin-right:0;
    width: 336px;
    padding: 8px 40px 11px 40px;
    margin-top: 28px;
  }
  @media (min-width: 1280px) {
    width: 395px;
  }
`;

export const BalanceTitle = styled.p`
  margin-bottom: 11.8px;
  font-style: normal;
  font-size: ${theme.fontSizes.xs};
  line-height: 18px;
  text-transform: uppercase;
  color: #a6a6a6;
  @media (min-width: 1280px) {
    margin-bottom: 12px;
  }
`;

export const BalanceValue = styled.p`
  font-family: ${theme.fonts.title};
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 1.5;
  display: flex;
  align-items: baseline;
  justify-content: start;
  color: ${theme.colors.mainTxtColor};
`;

export const BalanceSymbol = styled.span`
  font-weight: ${theme.fontWeights.normal};
  font-style: normal;
  margin-right: 10px;
`;
