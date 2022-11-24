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
        <NavLink to="/dashboard">
          {/* dashboard/home */}
          <Svg>
            <use href={`${Sprite}#icon-home`}></use>
          </Svg>
          <TextNav>Home</TextNav>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/dashboard/diagram">
          <Svg>
            <use href={`${Sprite}#icon-stat`}></use>
          </Svg>
          <TextNav>Statistics</TextNav>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/dashboard/currency">
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
