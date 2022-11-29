import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.button};
  margin: o auto;
  &:hover,
  &:focus {
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
  }
`;

export const Box = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
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
  width: 1248px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1279px) {
    width: 704px;
  }
`;

export const LogoMedia = styled.div`
  width: 120px;
  height: 30px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 181px;
    height: 40px;
  }
`;
