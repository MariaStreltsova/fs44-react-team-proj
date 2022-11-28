import { Dashboard } from './DashBoard.styled';
import AddTransactionBtn from 'components/AddTransactionModal/AddTransactionModal';
import HomeTable from '../../components/HomeTable/HomeTable';
import HomeTableMobile from '../../components/HomeTable/HomeTableMobile';
import useSizeScreen from 'hooks/useSizeScreen';
// import { Navigation } from 'components/Navigation/Navigation';
// import Currency from 'components/Currency/Currency';
import Balance from 'components/Balance';

export default function DashBoard() {
  const sizeScreen = useSizeScreen();
  return (
    <>
      <Dashboard>
        {sizeScreen < 767 && <Balance />}
        {/* <Balance />
        <Currency />  */}
        {sizeScreen > 767 ? <HomeTable /> : <HomeTableMobile />}
        <AddTransactionBtn />
      </Dashboard>
    </>
  );
}
