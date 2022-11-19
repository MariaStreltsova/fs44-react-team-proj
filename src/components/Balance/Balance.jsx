// import { useSelector } from 'react-redux';
// import { authSelectors } from '../../redux/auth';

import {
  BalanceWrapper,
  BalanceTitle,
  BalanceValue,
  BalanceSymbol,
} from './Balance.styled';

const Balance = () => {
  // const { balance } = useSelector(authSelectors.getUser);

  return (
    <BalanceWrapper>
      <BalanceTitle>Your balance</BalanceTitle>
      <BalanceValue>
        <BalanceSymbol>&#8372;</BalanceSymbol>
        {/* {balance} */}
      </BalanceValue>
    </BalanceWrapper>
  );
};

export default Balance;
