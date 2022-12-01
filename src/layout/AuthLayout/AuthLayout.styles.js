import styled from 'styled-components';
import authBackgroundImage from '../../images/authBg.jpg';

export const RootWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${authBackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const WrapperChildren = styled.div`

  overflow-y: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
  display: none;
}

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    overflow-y: hidden;
    justify-content: space-between;
  } ;
`;
export const WrapperChildrens = styled.div`

  @media screen and (max-width: 1279px) {
  display: flex;
  justify-content: center;
  width: 100%;

  }
  @media screen and (min-width: 1280px){
    margin-top: 20px;
  }
`;
export const Line = styled.div`
@media screen and (min-width: 1280px){
height: 100vh;
background: #BDBDBD;
border: 1px solid #E7E5F2;
box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05), 1px 0px 0px rgba(255, 255, 255, 0.6);
}
`

export const BalCurSide = styled.div`
@media screen and (min-width: 768px) and (max-width: 1279px){
display: flex;
justify-content: space-between;
} 
`

export const NavBal = styled.div`
@media screen and (min-width: 1280px){
  margin-top: 40px;
}
`