import styled from 'styled-components';

export const Flags = styled.div`
  z-index: 10;

  &:hover,
  &:focus {
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
  }
  @media screen and (max-width: 767px) {
    right: 0;
    top: 0;
  }
`;
