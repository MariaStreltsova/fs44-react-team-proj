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
    // opacity: 0;
    // pointer-events: none;
    // transition: 0.5s;
    //     &.active {
    //     opacity: 1;
    //     pointer-events: all;
    // }
`;

export const ModalContent = styled.div`
    padding-top: 40px;
    padding-left: 75px;
    padding-right: 75px;
    padding-bottom: 60px;
    border-radius: 12px;
    background-color: white;
    height: 800px;
    width: 800px;
    transform: scale(0.5);
    transition: 0.4s all;
    &.active {
        transform: scale(1);
    }
`;

export const ButtonClose = styled.button`
    display: flex;
    margin-left: auto;
    margin-right: 0;
    margin-bottom: 120px;
    border-radius: 12px;
    background-color: ${theme.colors.lightTxtColor};
    height: 100px;
    width: 100px;
    font-family: ${theme.fonts.title};
    font-weight: ${theme.fontWeights.normal};
    font-size: ${theme.fontSizes.l};
    line-height: ${theme.lineHeights.normal};
    color: ${theme.colors.mainTxtColor};
    transform: scale(0.5);
    transition: 0.4s all;
    &.active {
        transform: scale(1);
    }
`;

export const ButtonYes = styled.button`
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 20px;
    background-color: ${theme.colors.incomeColor};
    color: ${theme.colors.lightTxtColor};
    width: 300px;
    height: 70px;
    font-size: 28px;
    line-height: 1.5;
    text-align: center;
    align-self: center;
    cursor: pointer;
    &:hover,
    &:focus {
        background-color:${theme.colors.accentColor};
    }
`;

export const ButtonNo = styled.button`
    border-radius: 20px;
    background-color: ${theme.colors.incomeColor};
    color: ${theme.colors.lightTxtColor};
    width: 300px;
    height: 70px;
    font-size: 28px;
    line-height: 1.5;
    text-align: center;
    align-self: center;
    cursor: pointer;
    &:hover,
    &:focus {
        background-color:${theme.colors.accentColor};
    }
`;

export const Svg = styled.svg`
    
    transition: 0.4s all;
`;

export const P = styled.p`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 40px;
  font-family: ${theme.fonts.title};
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.l};
  line-height: ${theme.lineHeights.normal};
  color: ${theme.colors.mainTxtColor};
`;