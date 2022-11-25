import { useSelector } from 'react-redux';
import {
  TransactionsWrap,
  TransactionCardList,
  TransactionCardWrap,
  TransactionCardItem,
  ColoredSum,
  CardsContainer,
} from './HomeTable.styled';
import walletSelectors from '../../redux/wallet/wallet-selectors';

const HomeTableMobile = () => {
  const transactions = useSelector(walletSelectors.getTransactions);

  return (
    <CardsContainer>
      <TransactionsWrap>
        {transactions.map(
          ({
            id,
            date,
            direction,
            category,
            comments,
            amount,
            balanceAfter,
          }) => (
            <TransactionCardWrap key={id}>
              <TransactionCardList type={direction}>
                <TransactionCardItem>
                  <span>Date</span>
                  <span>{date}</span>
                </TransactionCardItem>
                <TransactionCardItem>
                  <span>Type</span>
                  <span> {direction === 'expense' ? '+' : '-'}</span>
                </TransactionCardItem>
                <TransactionCardItem>
                  <span>Category</span>
                  <span>{category}</span>
                </TransactionCardItem>
                <TransactionCardItem>
                  <span>Comment</span>
                  <span>{comments}</span>
                </TransactionCardItem>
                <TransactionCardItem>
                  <span>Sum</span>
                  <ColoredSum type={direction}>{amount.toFixed(2)}</ColoredSum>
                </TransactionCardItem>
                <TransactionCardItem>
                  <span>Balance</span>
                  <span>{balanceAfter}</span>
                </TransactionCardItem>
              </TransactionCardList>
            </TransactionCardWrap>
          )
        )}
      </TransactionsWrap>
    </CardsContainer>
  );
};

export default HomeTableMobile;
