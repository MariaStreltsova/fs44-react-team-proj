import styled from 'styled-components';
import authBackgroundImage from '../../images/authBg.jpg';

export const RootWrapper = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${authBackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  overflow: none;
  scrollbar: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
  display: none;
}
`;

export const WrapperChildren = styled.div`
 padding: 0 20px;
  display: block;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: none;
  scrollbar: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
  display: none;
}


  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1280px) {
    padding-left: 20px;
    padding-right: 20px;
  } ;
`;
export const WrapperChildrens = styled.div`
  display: block;
  position: absolute;
  top: 46px;
  right: 50px;
  @media screen and (max-width: 1280px) {
    position: static;
    margin-top: 20px;
  } ;
`;
