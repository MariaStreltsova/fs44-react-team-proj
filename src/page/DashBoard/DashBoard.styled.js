import styled from "styled-components";

export const Dashboard = styled.div`
    padding - top: 60px;
    padding - left: 20px;
    padding - right: 20px;
    background - color: rgba(230, 230, 230, 0.474);
    min - width: 320px;
    height: 100 %;

@media screen and(min - width: 768px) {
        padding: 20px 40px 20px 40px;
        background - image: #e7eaf2;
        height: 100 %;
    }

@media screen and(min - width: 1280px) {
        padding: 40px 85px 0px 85px;
        position: relative;
        width: 1280px;
        display: flex;
        justify - content: space - between;
        align - items: center;
    }

@media(min - width: 768px) {
        background - position: left bottom, right top 80px;
        background - repeat: no - repeat;
        position: relative;
  
    &::before {
        content: '';
        display: block;
        width: 456px;
        height: 486px;
        position: absolute;
        top: 0;
        right: 0;
        background - image: url(../../assets / images / ellipse - pink.png);
        background - size: cover;
        filter: blur(50px);
    }
  
    &::after {
        content: '';
        display: block;
        width: 539px;
        height: 439px;
        position: absolute;
        left: 0;
        bottom: 0;
        background - image: url(../../assets / images / ellipse - violet.png);
        background - size: cover;
        filter: blur(50px);
    }
    @media(min - width: 1280px) {
    &::before {
        content: '';
        display: block;
        width: 640px;
        height: 486px;
        position: absolute;
        top: 0;
        right: 0;
        background - image: url(../../assets / images / ellipse - pink.png);
        background - size: cover;
        filter: blur(50px);
    }
    `


export const Wrapper = styled.div`
        width: 688px;
        height: calc(100 % - 80px);
        z - index: 2;
        position: relative;

            @media(min - width: 1280px) {
                width: 1110px;
                display: flex;
                flex - wrap: wrap;
                justify - content: space - between;
            }

            @media screen and(min - width: 768px) {
                display: flex;
                flex - wrap: wrap;
                justify - content: center;
            }

            @media screen and(min - width: 1280px) {
                display: flex;
                flex - wrap: nowrap;
                justify - content: flex - start;
                min - height: 100vh;
                flex - direction: row;
                justify - content: space - between;
            }`
