import { Box } from 'Box';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../../GlobalStyle';

const AuthLayout = () => {
  return (
    <Box>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <GlobalStyle />
    </Box>
  );
};

export default AuthLayout;
