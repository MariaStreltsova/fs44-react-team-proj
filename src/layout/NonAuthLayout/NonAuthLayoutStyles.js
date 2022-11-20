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
  width: 50%;
  height: 100vh;
  background-image: url(${formBackground});
  background-size: cover;
`;

export const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  background-color: #e5e5e5;
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
