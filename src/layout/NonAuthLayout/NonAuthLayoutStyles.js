import styled from 'styled-components';
import formBackground from '../../images/Rectangle.jpg';
import tableBg from '../../images/Ellipse.svg';
import { Box } from 'Box';
// import imageBackground from '';

export const RootWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    width: 100vw;
    height: 100%;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    position: relative;
    background-color: rgba(231, 234, 242, 1);
    background-repeat: no-repeat;
    padding: 60px 114px;
    padding-left: 114px;
    &::before {
      content: '';
      position: absolute;
      background-image: url(${tableBg});
      background-repeat: no-repeat;
      background-size: cover;
      min-width: 500px;
      height: 524px;
      top: 0;
      right: 0;
    }
  }
  @media screen and (max-width: 767px) {
    background-image: none;
    background-color: #fff;
  }
`;

export const BoxContainer = styled(Box)`
  @media screen and (min-width: 1280px) {
    height: 100%;
    display: flex;
    width: 100%;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1280px) {
    width: 60%;
    height: 100vh;
    background-image: url(${formBackground});
    background-size: cover;
  }
  @media screen and (max-width: 1279px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 120px;
    padding: 40px 65px 60px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 0;
    padding: 150px 65px 60px;
  }
`;

export const ImageContainer = styled.div`
  @media screen and (min-width: 1280px) {
    width: 40%;
    display: flex;
    background-color: rgba(231, 234, 242, 1);
    position: relative;
  }
  @media screen and (max-width: 1279px) {
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const BulbImg = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: end;
  }
  @media screen and (max-width: 1279px) {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 0;
  }
`;

export const PeopleImg = styled.div`
  @media screen and (min-width: 1280px) {
    width: 436px;
    height: 420px;
    position: absolute;
    bottom: 150px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media screen and (max-width: 1279px) {
    position: absolute;
    width: 250px;
    height: 260.26px;
    margin-right: 265px;
  }
`;
export const TitleApp = styled.span`
  @media screen and (min-width: 1280px) {
    position: absolute;
    bottom: 70px;
    left: 200px;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
    color: #000000;
  }
  @media screen and (max-width: 1279px) {
    position: initial;
    z-index: 8;
    display: block;
    margin-top: 107px;
    margin-left: 280px;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
  }
`;
// export const RootWrapper = styled.div`
//   width: 100vw;
//   height: 100vh;
// `;

// export const FormContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 60%;
//   height: 100vh;
//   background-image: url(${formBackground});
//   background-size: cover;
// `;

// export const ImageContainer = styled.div`
//   width: 40%;
//   display: flex;
//   background-color: rgba(231, 234, 242, 1);
//   position: relative;
// `;
// export const BulbImg = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: end;
// `;

// export const PeopleImg = styled.div`
//   position: absolute;
//   bottom: 150px;
//   left: 50%;
//   transform: translateX(-50%);
// `;
// export const TitleApp = styled.span`
//   position: absolute;
//   bottom: 70px;
//   left: 200px;
//   font-weight: 400;
//   font-size: 30px;
//   line-height: 45px;

//   color: #000000;
// `
