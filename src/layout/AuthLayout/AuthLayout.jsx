import Header from 'components/header/Header';
import { Suspense } from 'react';
import {
  RootWrapper,
  WrapperChildren,
  WrapperChildrens,
} from './AuthLayout.styles';
import { Navigation } from '../../components/Navigation/Navigation';
// import Balance from 'components/Balance';
import Currency from 'components/Currency/Currency';

const AuthLayout = ({ children }) => {
  return (
    <RootWrapper>
      <Header />
      <WrapperChildren>
        <Navigation />
        {/* <Balance /> */}
        <Currency />
        <WrapperChildrens>
          <Suspense fallback={null}>{children}</Suspense>
        </WrapperChildrens>
      </WrapperChildren>
    </RootWrapper>
  );
};

export default AuthLayout;
