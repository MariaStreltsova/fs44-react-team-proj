import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { useAuth } from 'hooks/useAuht';
import Login from 'pages/Login/Login';
import PublicRoute from 'hocs/PublicRoute';
import NonAuthLayout from 'layout/NonAuthLayout/NonAuthLayout';
// import PublicRoute from 'hooks/Route/PublicRoute';
// import PrivateRoute from 'hooks/Route/PrivateRoute';

const Layout = lazy(() => import('./layout/Layout'));
const PageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h1>Refreshing user...</h1>
  ) : (
    <Suspense fallback={<h1>Loading profile.</h1>}>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="*" element={<PageNotFound />} />
        <Route
          path="/login"
          element={
            <PublicRoute
              restricted
              redirectedTo="/wallet"
              component={<NonAuthLayout component={<Login />} />}
            />
          }
        />
      </Routes>
    </Suspense>
  );
};
