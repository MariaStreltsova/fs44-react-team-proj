import { Dashboard } from './DashBoard.styled';
import AddTransactionBtn from 'components/AddTransactionModal/AddTransactionModal';

export default function DashBoard() {
  return (
    <>
      <Dashboard>
        <AddTransactionBtn />
      </Dashboard>
    </>
  );
}
