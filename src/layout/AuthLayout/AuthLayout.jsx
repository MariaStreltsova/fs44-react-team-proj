import { Box } from 'Box';
import Header from 'components/header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../../GlobalStyle';

const AuthLayout = () => {
  return (
    <Box>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <GlobalStyle />
    </Box>
  );
};

export default AuthLayout;
