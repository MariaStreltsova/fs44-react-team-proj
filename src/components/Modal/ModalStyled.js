import styled from 'styled-components';

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
    transition: 0.5s;
        &:active {
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
    transform: scale(0.5);
    transition: 0.4s all;
    &:active {
        transform: scale(1);
    }
`;

export const Button = styled.button`
    padding: 20px;
    border-radius: 12px;
    background-color: white;
    height: 400px;
    width: 400px; 
    transform: scale(0.5);
    transition: 0.4s all;
    &:active {
        transform: scale(1);
    }
`;

export const Svg = styled.svg`
    padding: 20px;
    border-radius: 12px;
    background-color: white;
    height: 400px;
    width: 400px; 
    transform: scale(0.5);
    transition: 0.4s all;
    &:active {
        transform: scale(1);
    }
`;