import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import PublicRoute from 'hocs/Route/PublicRoute';
import NonAuthLayout from 'layout/NonAuthLayout/NonAuthLayout';
import useAuth from 'hooks/useAuht';
import { PeoleSvg } from 'images/icons/PeopleSvg';

const PageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound'));
const Login = lazy(() => import('./pages/Login/Login'));

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
        <Route
          path="/"
          element={
            <PublicRoute
              restricted
              redirectedTo="/wallet"
              component={
                <NonAuthLayout component={<Login />} picture={PeoleSvg} />
              }
            />
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};
