import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  background: linear-gradient(to right, white 50%, #383838 50%);
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  color: white;
`
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    max-width: 1000px;
    width: calc(100% - 4rem);
    margin: 0 auto;
    `
export const Aside = styled.aside`
    background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/right-edges.png");
    background-position: top right;
    background-repeat: no-repeat;
    background-size: 25px 100%;
    `
export const Img = styled.img`
    display: block;
    height: auto;
    width: 100%;
  `
export const Main = styled.main`
    text-align: center;
    `
export const Title = styled.h1`
    font-family: "Fontdiner Swanky", cursive;
    font-size: 4rem;
    color: #c5dc50;
    margin-bottom: 1rem;
`
export const P = styled.p`
    margin-bottom: 2.5rem;
`
export const Em = styled.em`
    font-style: italic;
    color: #c5dc50;
  `
export const Button = styled(NavLink)`
    text-decoration: none;
    font-family: "Fontdiner Swanky", cursive;
    font-size: 1rem;
    color: #383838;
    border: none;
    background-color: #f36a6f;
    padding: 1rem 2.5rem;
    transform: skew(-5deg);
    transition: all 0.1s ease;
    cursor: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/cursors-eye.png"),
      auto;
  
&:hover {
    background-color: #c5dc50;
    transform: scale(1.15);
  }
  `
export const WrapperAll = styled.div`
    box-sizing: 0;
    margin: 0;
    padding: 0;
    cursor: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/cursors-edge.png"),
      auto;`
