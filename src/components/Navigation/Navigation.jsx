import { NavLink } from 'react-router-dom';
import {
  NavItem,
  Svg,
  NavigationContainer,
  TextNav,
} from './Navigation.styled';
import Sprite from '../../images/icons/symbol-defs.svg';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <NavItem>
        <NavLink to="/home">
          {/* dashboard/home */}
          <Svg>
            <use href={`${Sprite}#icon-home`}></use>
          </Svg>
          <TextNav>Home</TextNav>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/home/statistics">
          <Svg>
            <use href={`${Sprite}#icon-stat`}></use>
          </Svg>
          <TextNav>Statistics</TextNav>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/home/currency">
          {/* dashboard/diagram */}

          <Svg>
            <use href={`${Sprite}#icon-dollor`}></use>
          </Svg>
          <TextNav>Currency</TextNav>
        </NavLink>
      </NavItem>
    </NavigationContainer>
  );
};
