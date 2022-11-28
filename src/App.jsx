import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import PublicRoute from 'hocs/Route/PublicRoute';
import PrivateRoute from 'hocs/Route/PrivateRoute';
import NonAuthLayout from 'layout/NonAuthLayout/NonAuthLayout';
import AuthLayout from 'layout/AuthLayout/AuthLayout';
import useAuth from 'hooks/useAuht';
// import { PeoleSvg } from 'images/icons/PeopleSvg';
import DashBoard from 'pages/DashBoard/DashBoard';
import Statistics from 'pages/Statistics/Statistics';
// import SizeScreenRoute from 'hocs/Route/SizeScreenRoute';
import CurrencyPage from 'pages/CurrencyPage/CurrencyPage';
import CircularUnderLoad from 'components/Loader/Loader';
const PageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound'));
const Login = lazy(() => import('./pages/Login/Login'));
const Registration = lazy(() => import('./pages/Registration/Registration'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <CircularUnderLoad />
  ) : (
    <Suspense fallback={<CircularUnderLoad />}>
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
              redirectTo="/home"
            />
          }
        />

        <Route
          path="/signup"
          element={
            <PublicRoute
              component={
                <NonAuthLayout>
                  <Registration />
                </NonAuthLayout>
              }
              restricted
              redirectTo="/home"
            />
          }
        />

        <Route
          path="/home"
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

        <Route
          path="/statistics"
          element={
            <PrivateRoute
              component={
                <AuthLayout>
                  <Statistics />
                </AuthLayout>
              }
              redirectTo="/login"
            />
          }
        />

        <Route
          path="/currency"
          element={
            <PrivateRoute
              component={
                <AuthLayout>
                  <CurrencyPage />
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
