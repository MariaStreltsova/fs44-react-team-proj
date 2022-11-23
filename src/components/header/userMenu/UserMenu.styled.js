import styled from 'styled-components';

export const Text = styled.span`
  margin: 0 12px 0 0;
  color: ${p => p.theme.colors.secondaryTxtColor};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.normal};
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
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 20px;
`;
