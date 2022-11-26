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
display: block;
position: relative;
;
`
export const WrapperChildrens = styled.div`
display: block;
position: absolute;
top:136px;
left:555px;
;
`