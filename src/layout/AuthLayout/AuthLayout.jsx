import Header from 'components/header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { RootWrapper } from './AuthLayout.styles';
import { Navigation } from '../../components/Navigation/Navigation';

const AuthLayout = () => {
  return (
    <RootWrapper>
      <Header />
      <Suspense fallback={null}>
        <Navigation />
        <Outlet />
      </Suspense>
    </RootWrapper>
  );
};

export default AuthLayout;
