import styled from 'styled-components';
import theme from '../../theme';

export const BalanceWrapper = styled.div`
  width: 280px;
  height: 80px;
  padding: 8px 32px;
  background-color: ${theme.colors.lightBackgroundColor};
  border-radius: 30px;
  @media (min-width: 768px) {
    width: 336px;
    padding: 8px 40px;
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
  font-size: 30px;
  line-height: 45px;
  display: flex;
  align-items: center;
  color: ${theme.colors.mainTxtColor};
`;

export const BalanceSymbol = styled.span`
  font-weight: ${theme.fontWeights.normal};
  font-style: normal;
  margin-right: 10px;
`;
