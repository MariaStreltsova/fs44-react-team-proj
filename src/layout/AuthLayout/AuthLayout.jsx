import Header from 'components/header/Header';
import { Suspense } from 'react';
import {
  RootWrapper,
  WrapperChildren,
  WrapperChildrens,
} from './AuthLayout.styles';

import { Navigation } from '../../components/Navigation/Navigation';
import Balance from 'components/Balance';
import Currency from 'components/Currency/Currency';
import useSizeScreen from 'hooks/useSizeScreen';

const AuthLayout = ({ children }) => {
  const sizeScreen = useSizeScreen();
  return (
    <RootWrapper>
      <Header />
      <WrapperChildren>
        <Navigation />
        {sizeScreen > 767 && <Balance />}
        {sizeScreen > 767 && <Currency />}
        <WrapperChildrens>
          <Suspense fallback={null}>{children}</Suspense>
        </WrapperChildrens>
      </WrapperChildren>
    </RootWrapper>
  );
};

export default AuthLayout;
