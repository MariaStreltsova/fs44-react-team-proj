import theme from '../../theme';
import styled from 'styled-components';

export const TitleStat = styled.h2`
  padding-left: 20px;
  padding-bottom: 8px;
  font-family: ${theme.fonts.title};
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.l};
  line-height: ${theme.lineHeights.normal};
  color: ${theme.colors.mainTxtColor};

  @media (min-width: 768px) {
    padding-left: 0px;
    padding-bottom: 20px;
  }

  @media (min-width: 1280px) {
    padding-left: 15px;
  }
`;

export const DiagramBlock = styled.div`
  position: relative;
  height: 340px;
  @media (min-width: 768px) {
    width: 704px;
    height: 360px;
    justify-content: space-between;
    display: flex;
    gap: 32px;
  }

  @media (min-width: 1280px) {
    width: 715px;
    height: 350px;
  }
`;
