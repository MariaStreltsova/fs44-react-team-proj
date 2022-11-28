import styled from 'styled-components';
import theme from '../../theme';

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  z-index: 10;
  transition: opacity 0.15s ease;
  &.active {
    opacity: 1;
    pointer-events: all;
  }
`;

export const ModalContent = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  height: 400px;
  width: 400px;
  transform: scale(0.9);
  transition: transform 0.15s ease;
  .active & {
    transform: none;
  }
`;

export const ButtonClose = styled.button`
  display: flex;
  margin-left: auto;
  margin-right: 0;
  margin-bottom: 30px;
  border-radius: 12px;
  background-color: ${theme.colors.lightTxtColor};
  height: 50px;
  width: 50px;
  font-family: ${theme.fonts.title};
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.l};
  line-height: ${theme.lineHeights.normal};
  color: ${theme.colors.mainTxtColor};
  transform: scale(0.5);
  transition: 0.4s all;
  cursor: pointer;
  &:hover,
  &:focus {
    border-color: red;
  }
`;

export const ButtonYes = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
  background-color: ${theme.colors.incomeColor};
  color: ${theme.colors.lightTxtColor};
  width: 300px;
  height: 50px;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  align-self: center;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${theme.colors.accentColor};
  }
`;

export const ButtonNo = styled.button`
  border-radius: 20px;
  background-color: ${theme.colors.incomeColor};
  color: ${theme.colors.lightTxtColor};
  width: 300px;
  height: 50px;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  align-self: center;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${theme.colors.accentColor};
  }
`;

export const Svg = styled.svg`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background-color: white;
`;

export const P = styled.p`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: ${theme.fonts.title};
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.m};
  line-height: ${theme.lineHeights.normal};
  color: ${theme.colors.mainTxtColor};
`;
