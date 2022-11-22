import styled from 'styled-components';

export const NavItem = styled.li`
  font-family: ${p => p.theme.fonts.title};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.normal};
  color: ${p => p.theme.colors.mainTxtColor};
  margin-bottom: calc(${p => p.theme.space[1]}px * 5);
  transition: font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;

export const Svg = styled.svg`
  margin-right: 23px;
  width: 18px;
  height: 18px;
  color: ${p => p.theme.colors.iconColor};
  fill: currentColor;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    fill: ${p => p.theme.colors.accentColor};
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
  }
`;
