import { StatisticsWrapper } from './Statistics.styled';
// import useSizeScreen from 'hooks/useSizeScreen';
import DiagramTab from 'components/DiagramTab/DiagramTab';
import { Navigation } from 'components/Navigation/Navigation';
import Currency from 'components/Currency/Currency';

export default function Statistics() {
  //   const sizeScreen = useSizeScreen();
  return (
    <>
      <StatisticsWrapper>
        <Navigation />
        {/* <Balance /> */}
        <Currency />
        <DiagramTab />
      </StatisticsWrapper>
    </>
  );
}
