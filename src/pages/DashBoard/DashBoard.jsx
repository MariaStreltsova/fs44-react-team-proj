import { Dashboard } from './DashBoard.styled';
import AddTransactionBtn from 'components/AddTransactionModal/AddTransactionModal';
import HomeTable from '../../components/HomeTable/HomeTable';

export default function DashBoard() {
  return (
    <>
      <Dashboard>
        <p>я туут</p>
        <HomeTable />
        <AddTransactionBtn />
      </Dashboard>
    </>
  );
}
