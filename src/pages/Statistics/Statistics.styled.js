import styled from 'styled-components';

export const StatisticsWrapper = styled.div`
@media (max-width: 767px) {
  justify-content: center;
  display: flex;
  margin-top: 40px;
  overflow-y: scroll;
  }
@media screen and (min-width: 768px){
display: block;
margin-top: 20px;
}
@media screen and (min-width: 1280px){
display: flex;
margin-top:0;
}
`;

