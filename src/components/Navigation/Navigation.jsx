import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
  NavItem,
  Svg,
  NavigationContainer,
  TextNav,
  NavItemCurrency,
  NavItemStatistics,
} from './Navigation.styled';
import Sprite from '../../images/icons/symbol-defs.svg';

export const Navigation = () => {
  const { t } = useTranslation();
  let activeStyle = {
    fontWeight: '700',
    fill: '#4A56E2',
    filter: 'drop-shadow(0px 3px 10px rgba(74, 86, 226, 10)',
  };

  // let activeClassName = 'drop-shadow(0px 3px 10px rgba(74, 86, 226, 10)';

  return (
    <NavigationContainer>
      <NavItem>
        <NavLink
          to="/home"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <Svg>
            <use href={`${Sprite}#icon-home`}></use>
          </Svg>
          <TextNav>{t('title.navigation.Home')}</TextNav>
        </NavLink>
      </NavItem>
      <NavItemStatistics>
        <NavLink
          to="/statistics"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <Svg>
            <use href={`${Sprite}#icon-stat`}></use>
          </Svg>
          <TextNav>{t('title.navigation.Statistics')}</TextNav>
        </NavLink>
      </NavItemStatistics>

      <NavItemCurrency>
        <NavLink
          to="/currency"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          {/* dashboard/diagram */}

          <Svg>
            <use href={`${Sprite}#icon-dollor`}></use>
          </Svg>
          <TextNav>Currency</TextNav>
        </NavLink>
      </NavItemCurrency>
    </NavigationContainer>
  );
};
