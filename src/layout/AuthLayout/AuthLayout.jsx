import Header from 'components/header/Header';
import { Suspense } from 'react';
import {
  RootWrapper,
  WrapperChildren,
  // WrapperChildrens,
} from './AuthLayout.styles';

const AuthLayout = ({ children }) => {
  return (
    <RootWrapper>
      <Header />
      <WrapperChildren>
        {/* <WrapperChildrens> */}
        <Suspense fallback={null}>{children}</Suspense>
        {/* </WrapperChildrens> */}
      </WrapperChildren>
    </RootWrapper>
  );
};

export default AuthLayout;
