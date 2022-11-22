import styled from 'styled-components';
import theme from 'theme';

export const Text = styled.p`
  margin: 0 12px 0 0;
  color: ${p => p.theme.colors.secondaryTxtColor};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.normal};
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.normal};
  padding: ${p => p.theme.space[0]}px;
  color: ${p => p.theme.colors.secondaryTxtColor};
  background-color: ${p => p.theme.colors.lightBackgroundColor};
  border-left: 1px solid ${theme.colors.secondaryTxtColor};
  border-right: transparent;
  border-bottom: transparent;
  border-top: transparent;
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  margin-left: 12px;
`;