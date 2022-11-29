import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { format } from 'fecha';
import {
  TransactionsWrap,
  TransactionCardList,
  TransactionCardWrap,
  TransactionCardItem,
  ColoredSum,
  CardsContainer,
  TablePlaceholder,
  TitleTablePlaceholder,
  PlaceholderContent,
} from './HomeTable.styled';
import operations from '../../redux/wallet/wallet-operations';
import walletSelectors from '../../redux/wallet/wallet-selectors';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import { useTranslation } from 'react-i18next';

const HomeTableMobile = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(walletSelectors.getTransactions);
  useEffect(() => {
    dispatch(operations.fetchTransactions());
  }, [dispatch]);
  const { t } = useTranslation();
  return (
    <CardsContainer>
      <TransactionsWrap>
        {transactions && transactions.length > 0 ? (
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
                    <span>{format(new Date(date), 'DD.MM.YY')}</span>
                  </TransactionCardItem>
                  <TransactionCardItem>
                    <span>Type</span>
                    <span> {direction === 'expense' ? '-' : '+'}</span>
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
          )
        ) : (
          <TablePlaceholder>
            <PlaceholderContent>
              <InsightsOutlinedIcon
                sx={{ fontSize: 36, marginBottom: '16px', color: '#4A56E2' }}
              />
              <TitleTablePlaceholder>
                {t('placeholderHomeTable.title')}
              </TitleTablePlaceholder>
            </PlaceholderContent>
          </TablePlaceholder>
        )}
      </TransactionsWrap>
    </CardsContainer>
  );
};

export default HomeTableMobile;
