import styled from 'styled-components';

export const Title = styled.h1`
  display: flex;
  margin: 0 0 0 20px;
  align-items: center;
  color: ${p => p.theme.colors.mainTxtColor};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.normal};
`;