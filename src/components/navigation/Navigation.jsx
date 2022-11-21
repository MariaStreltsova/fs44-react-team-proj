import { Box } from '../../Box';
import { NavLink } from 'react-router-dom';
import { NavItem, Svg } from './Navigation.styled';
import Sprite from '../../images/icons/symbol-defs.svg';

export const Navigation = () => {
  return (
    <Box as="ul">
      <NavItem>
        <NavLink to="/">
          {/* dashboard/home */}
          <Svg>
            <use href={`${Sprite}#icon-home`}></use>
          </Svg>
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/">
          {/* dashboard/diagram */}
          <Svg>
            <use href={`${Sprite}#icon-stat`}></use>
          </Svg>
          Statistics
        </NavLink>
      </NavItem>
    </Box>
  );
};
