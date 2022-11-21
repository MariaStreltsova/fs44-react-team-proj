import styled from 'styled-components';

export const DivLoader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 30px;
`;

export const ImgLoader = styled.img`
  width: 60px;
  height: 60px;
  animation: rotate 1.1s infinite cubic-bezier(0.8, 0.15, 1, 1);

  @keyframes rotate {
    from {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(180deg) scale(0.7);
    }
    to {
      transform: rotate(360deg) scale(1);
    }
  }
`;
