import styled from 'styled-components';
import formBackground from '../../images/Rectangle.jpg';
// import imageBackground from '';

export const RootWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100vh;
  background-image: url(${formBackground});
  background-size: cover;
`;

export const ImageContainer = styled.div`
  width: 40%;
  display: flex;
  background-color: rgba(231, 234, 242, 1);
  position: relative;
`;
export const BulbImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const PeopleImg = styled.div`
  position: absolute;
  bottom: 150px;
  left: 50%;
  transform: translateX(-50%);
`;
export const TitleApp = styled.span`
  position: absolute;
  bottom: 70px;
  left: 200px;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;

  color: #000000;
`