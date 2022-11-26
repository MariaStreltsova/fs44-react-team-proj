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
  @media (min-width: 768px) {
    display: flex;
    gap: 32px;
  }

  @media (min-width: 1280px) {
    /* padding-top: 32px;
    padding-left: 84px; */
  }
`;
