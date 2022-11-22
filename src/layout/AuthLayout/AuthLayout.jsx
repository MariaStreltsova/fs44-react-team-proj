import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { RootWrapper } from './AuthLayout.styles';

const AuthLayout = () => {
  return (
    <RootWrapper>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </RootWrapper>
  );
};

export default AuthLayout;
