import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.button};
  &:hover,
  &:focus {
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
  }
`;

export const Box = styled.header`
  display: flex;

  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  /* padding-right: 20px; */

  position: fixed;
  z-index: 2;

  width: 100%;
  background-color: #fff;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;
//color: ${p => p.theme.colors.accent};
export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
