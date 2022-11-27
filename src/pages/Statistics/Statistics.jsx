import { StatisticsWrapper } from './Statistics.styled';
// import useSizeScreen from 'hooks/useSizeScreen';
import DiagramTab from 'components/DiagramTab/DiagramTab';

export default function Statistics() {
  //   const sizeScreen = useSizeScreen();
  return (
    <>
      <StatisticsWrapper>
        <DiagramTab />
      </StatisticsWrapper>
    </>
  );
}
