import { useTranslation } from 'react-i18next';

import {
  NavItem,
  Svg,
  NavigationContainer,
  TextNav,
  NavItemCurrency,
  NavigationLink,
} from './Navigation.styled';
import Sprite from '../../images/icons/symbol-defs.svg';

export const Navigation = () => {
  const { t } = useTranslation();
  return (
    <NavigationContainer>
      <NavItem>
        <NavigationLink to="/home">
          {/* dashboard/home */}
          <Svg>
            <use href={`${Sprite}#icon-home`}></use>
          </Svg>
          <TextNav>{t('title.navigation.Home')}</TextNav>
        </NavigationLink>
      </NavItem>
      <NavItem>
        <NavigationLink to="/statistics">
          <Svg>
            <use href={`${Sprite}#icon-stat`}></use>
          </Svg>
          <TextNav>{t('title.navigation.Statistics')}</TextNav>
        </NavigationLink>
      </NavItem>

      <NavItemCurrency>
        <NavigationLink to="/home/currency">
          {/* dashboard/diagram */}

          <Svg>
            <use href={`${Sprite}#icon-dollor`}></use>
          </Svg>
          <TextNav>Currency</TextNav>
        </NavigationLink>
      </NavItemCurrency>
    </NavigationContainer>
  );
};
