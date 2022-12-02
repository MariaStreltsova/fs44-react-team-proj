import Header from 'components/header/Header';
import { Suspense } from 'react';
import {
  RootWrapper,
  WrapperChildren,
  WrapperChildrens,
  BalCurSide,
  NavBal,
} from './AuthLayout.styles';

import { Navigation } from '../../components/Navigation/Navigation';
import Balance from 'components/Balance';
import Currency from 'components/Currency/Currency';
import useSizeScreen from 'hooks/useSizeScreen';
import { Line } from '../AuthLayout/AuthLayout.styles';

const AuthLayout = ({ children }) => {
  const sizeScreen = useSizeScreen();
  return (
    <RootWrapper>
      <Header />
      <WrapperChildren>
        <BalCurSide>
          <NavBal>
            <Navigation />
            {sizeScreen > 767 && <Balance />}
          </NavBal>
          <div>{sizeScreen > 767 && <Currency />}</div>
        </BalCurSide>
        <Line></Line>
        <div>
          <WrapperChildrens style={{ paddingTop: '40px' }}>
            <Suspense fallback={null}>{children} </Suspense>
          </WrapperChildrens>
        </div>
      </WrapperChildren>
    </RootWrapper>
  );
};

export default AuthLayout;
