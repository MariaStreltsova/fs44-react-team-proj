import { transactions } from './mock';
import {
  TransactionsWrap,
  TransactionCardList,
  TransactionCardWrap,
  TransactionCardItem,
  ColoredSum,
  CardsContainer,
} from './HomeTable.styled';

const HomeTableMobile = () => {
  return (
    <CardsContainer>
      <TransactionsWrap>
        {transactions.map(
          ({ id, date, type, category, comments, amount, balanceAfter }) => (
            <TransactionCardWrap key={id}>
              <TransactionCardList type={type}>
                <TransactionCardItem>
                  <span>Date</span>
                  <span>{date}</span>
                </TransactionCardItem>
                <TransactionCardItem>
                  <span>Type</span>
                  <span> {type === 'expense' ? '+' : '-'}</span>
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
                  <ColoredSum type={type}>{amount.toFixed(2)}</ColoredSum>
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
