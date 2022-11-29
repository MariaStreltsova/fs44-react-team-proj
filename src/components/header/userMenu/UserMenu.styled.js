import styled from 'styled-components';

export const Text = styled.span`
  margin: 0 7px 0 0;
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.secondaryTxtColor};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.normal};

  @media screen and (min-width: 768px) {
    margin: 0 12px 0 0;
  }
`;

// export const Button = styled.button`
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   font-weight: ${p => p.theme.fontWeights.normal};
//   font-size: ${p => p.theme.fontSizes.m};
//   line-height: ${p => p.theme.lineHeights.normal};
//   padding: ${p => p.theme.space[0]}px;
//   color: ${p => p.theme.colors.secondaryTxtColor};
//   background-color: ${p => p.theme.colors.lightBackgroundColor};
//   border-left: 1px solid ${theme.colors.secondaryTxtColor};
//   border-right: transparent;
//   border-bottom: transparent;
//   border-top: transparent;
// `;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;

  color: inherit;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  background-color: ${p => p.theme.colors.lightBackgroundColor};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.button};
  @media screen and (min-width: 768px) {
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    }
  }
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 8px;
`;

export const Decor = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    margin: auto;
    display: block;
    width: 1px;
    height: 30px;
    margin: 0px 15px;
    background-color: ${p => p.theme.colors.secondaryTxtColor};
  }
`;
export const Exit = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.normal};
  }
`;
