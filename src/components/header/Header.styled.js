import styled from 'styled-components';

export const Box = styled.header`
  /* display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 16px; */
  position: fixed;
  z-index: 2;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  /* left: calc((100% - 1280px) / 2); */
  background-color: #fff;
`;
//color: ${p => p.theme.colors.accent};
export const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-left: 85px;
  padding-right: 85px;
`;
