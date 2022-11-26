import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import {
  TransactionsWrap,
  TransactionCardList,
  TransactionCardWrap,
  TransactionCardItem,
  ColoredSum,
  CardsContainer,
} from './HomeTable.styled';
import operations from '../../redux/wallet/wallet-operations';
import walletSelectors from '../../redux/wallet/wallet-selectors';

const HomeTableMobile = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(walletSelectors.getTransactions);
  useEffect(() => {
    dispatch(operations.fetchTransactions());
  }, [dispatch]);
  return (
    <CardsContainer>
      <TransactionsWrap>
        {transactions &&
          transactions.map(
            ({
              _id,
              date,
              direction,
              category,
              comment,
              amount,
              balanceAfter,
            }) => (
              <TransactionCardWrap key={_id}>
                <TransactionCardList type={direction}>
                  <TransactionCardItem>
                    <span>Date</span>
                    <span>{format(new Date(date), 'dd.MM.yy')}</span>
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
                    <span>{comment}</span>
                  </TransactionCardItem>
                  <TransactionCardItem>
                    <span>Sum</span>
                    <ColoredSum type={direction}>
                      {amount.toFixed(2)}
                    </ColoredSum>
                  </TransactionCardItem>
                  <TransactionCardItem>
                    <span>Balance</span>
                    <span>{balanceAfter.toFixed(2)}</span>
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
