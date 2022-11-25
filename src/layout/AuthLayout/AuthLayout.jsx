import Header from 'components/header/Header';
import { Suspense } from 'react';
import { RootWrapper } from './AuthLayout.styles';
import { Navigation } from '../../components/Navigation/Navigation';
import Balance from 'components/Balance';
import Currency from 'components/Currency/Currency';

const AuthLayout = ({ children }) => {
  return (
    <RootWrapper>
      <Header />
      <Navigation />
      <Balance />
      <Currency />
      <Suspense fallback={null}>{children}</Suspense>
    </RootWrapper>
  );
};

export default AuthLayout;
