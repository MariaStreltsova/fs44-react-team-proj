import { theme } from '../../theme';
import styled from 'styled-components';

export const Table = styled.table`
  width: 480px;
  margin: ${theme.space[5]}px auto;
  border-radius: ${theme.radii.normal};
  overflow: hidden;
  border: 1px solid ${theme.colors.tableRow};
  border-spacing: 1px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const HeadRow = styled.thead`
  background: ${theme.colors.tableHead};
  color: ${theme.colors.brightTextColor};
  font-size: ${theme.fontSizes.b};
  height: 40px;
`;
export const HeadCell = styled.th`
  width: 160px;
  text-transform: uppercase;
  font-weight: 600;
`;