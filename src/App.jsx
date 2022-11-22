import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import PublicRoute from 'hocs/Route/PublicRoute';
import PrivateRoute from 'hocs/Route/PrivateRoute';
import NonAuthLayout from 'layout/NonAuthLayout/NonAuthLayout';
import AuthLayout from 'layout/AuthLayout/AuthLayout';
import useAuth from 'hooks/useAuht';
import '../node_modules/flag-icons/css/flag-icons.min.css';

const PageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound'));
const Login = lazy(() => import('./pages/Login/Login'));
const Registration = lazy(() => import('./pages/Registration/Registration'));
const DashBoard = lazy(() => import('./pages/DashBoard/DashBoard'));

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
              component={
                <NonAuthLayout>
                  <Login />
                </NonAuthLayout>
              }
              restricted
              redirectTo="/dashboard"
            />
          }
        />

        <Route
          path="/registration"
          element={
            <PublicRoute
              component={
                <NonAuthLayout>
                  <Registration />
                </NonAuthLayout>
              }
              restricted
              redirectTo="/dashboard"
            />
          }
        />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute
              component={
                <AuthLayout>
                  <DashBoard />
                </AuthLayout>
              }
              redirectTo="/login"
            />
          }
        />

        <Route path="/" element={<Navigate to={'/login'} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};
