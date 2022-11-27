import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { useTranslation } from 'react-i18next';

import {
  BalanceWrapper,
  BalanceTitle,
  BalanceValue,
  BalanceSymbol,
} from './Balance.styled';

const Balance = () => {
  const balance = useSelector(authSelectors.getBalance);
  const { t } = useTranslation();
  return (
    <BalanceWrapper>
      <BalanceTitle>{t('balance.title')}</BalanceTitle>
      <BalanceValue>
        <BalanceSymbol>&#8372;</BalanceSymbol>
        {balance.toFixed(2)}
      </BalanceValue>
    </BalanceWrapper>
  );
};

export default Balance;
