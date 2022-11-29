import styled from 'styled-components';
import authBackgroundImage from '../../images/authBg.jpg';

export const RootWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${authBackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const WrapperChildren = styled.div`
  width: 1280px;
  padding-left: 16px;
  padding-right: 16px;
  display: block;
  position: relative;
  @media screen and (max-width: 1279px) {
    padding-left: 32px;
    padding-right: 32px;
    max-width:768px
  }
  @media screen and (max-width: 767px) {
    padding-left: 20px;
    padding-right: 20px;
    max-width:380px;
  } ;
`;
export const WrapperChildrens = styled.div`
  display: block;
  position: absolute;
  top: 46px;
  right: 16px;
  @media screen and (max-width: 1279px) {
    position: static;
    margin-top: 20px;
  } ;
`;
