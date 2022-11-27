import styled from 'styled-components';
import authBackgroundImage from '../../images/authBg.jpg';

export const RootWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${authBackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const WrapperChildren = styled.div`
padding-left:16px;
padding-right:16px;
display: block;
position: relative;
@media screen and (max-width: 1279px) {
  padding-left:32px;
  padding-right:32px;
  }
  @media screen and (max-width: 767px) {
  padding-left:20px;
  padding-right:20px;
  }
;
`
export const WrapperChildrens = styled.div`
display: block;
position: absolute;
top:126px;
right:16px;
@media screen and (max-width: 1279px) {
  position: static;
  margin-top:20px
  }
;
`