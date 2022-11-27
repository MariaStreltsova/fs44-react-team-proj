import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  &.active {
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;

export const NavigationContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 120px; 
  @media screen and (max-width: 1279px) {
  margin-left:3px;
  }
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
  @media screen and (max-width: 767px) {
    margin-top: 0px; 
    padding-top: 75px;
    margin-left: auto;
    margin-right: auto;
  }
`;

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
    /* fill: ${p => p.theme.colors.accentColor}; */
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
  }
  @media screen and (max-width: 767px) {
    margin-bottom:0;
  
  }
  &:not(:last-child){
    margin-right: 35px;
  }
`;

export const Svg = styled.svg`
  width: 38px;
  height: 38px;
  color: ${p => p.theme.colors.iconColor};
  fill: currentColor;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    fill: ${p => p.theme.colors.accentColor};
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
  }

  &[data-active] {
    color: red;
  }
  @media screen and (min-width: 768px) {
    margin-right: 23px;
    width: 18px;
    height: 18px;
  }
  @media screen and (max-width: 767px) {
    text-align: center
  }
`;
export const TextNav = styled.span`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

export const NavItemCurrency = styled.li`
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
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 767px) {
    margin-bottom:0;
    text-align: center
  }
`;
