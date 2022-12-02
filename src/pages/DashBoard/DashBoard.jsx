import { Dashboard} from './DashBoard.styled';
import AddTransactionBtn from 'components/AddTransactionModal/AddTransactionModal';
import HomeTable from '../../components/HomeTable/HomeTable';
import HomeTableMobile from '../../components/HomeTable/HomeTableMobile';
import useSizeScreen from 'hooks/useSizeScreen';
import Balance from 'components/Balance';
// import { NewsContextProvider } from "../../components/NewsBlock/NewsBlock";

export default function DashBoard() {
  const sizeScreen = useSizeScreen();
  return (
    <>
      <Dashboard>
        {sizeScreen < 767 && <Balance />}
        {sizeScreen > 767 ? <HomeTable /> : <HomeTableMobile />}
        {/* <NewsContextProvider /> */}
        <AddTransactionBtn />
      </Dashboard>
    </>
  );
}
