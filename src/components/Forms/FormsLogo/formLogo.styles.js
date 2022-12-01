import styled from 'styled-components';

export const Title = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const TitleText = styled.h1`
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
`;

export const Logo = styled.div`
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
 
`;

export const MyLogo = styled.img`
width: 30px;
height: 30px;
animation: rotateLogo 2s linear infinite;

@media screen and (min-width: 768px){
  width: 40px;
  height: 40px;
}

 @keyframes rotateLogo {
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(360deg);
    }
  }
`
