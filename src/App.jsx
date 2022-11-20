import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import AuthLayout from 'layout/AuthLayout/AuthLayout';
import PublicRoute from 'hocs/Route/PublicRoute';
import PrivateRoute from 'hocs/Route/PrivateRoute';
import NonAuthLayout from 'layout/NonAuthLayout/NonAuthLayout';
import useAuth from 'hooks/useAuht';
import DashBoard from 'page/DashBoard/DashBoard';

const PageNotFound = lazy(() => import('./page/PageNotFound/PageNotFound'));

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
          path="/login"
          element={
            <PublicRoute
              restricted
              redirectedTo="/login"
              component={<NonAuthLayout component={<login />} />}
            />
          }
        />
        <Route
          path="/home"
          element={<PrivateRoute component={<AuthLayout />} />}
        />
        <Route
          path="/dashboard"
          element={<PrivateRoute component={<DashBoard />} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};
