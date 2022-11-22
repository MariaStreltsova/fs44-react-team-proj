import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import PublicRoute from 'hocs/Route/PublicRoute';
import PrivateRoute from 'hocs/Route/PrivateRoute';
import NonAuthLayout from 'layout/NonAuthLayout/NonAuthLayout';
import useAuth from 'hooks/useAuht';
import DashBoard from 'pages/DashBoard/DashBoard';
import '../node_modules/flag-icons/css/flag-icons.min.css';

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
    <h1>Refreshing user...</h1>
  ) : (
    <Suspense fallback={<h1>Loading profile.</h1>}>
      <Routes>
        <Route
          path="/login"
          element={
            <NonAuthLayout>
              <PublicRoute
                component={<Login />}
                restricted
                redirectTo="/dashboard"
              />
            </NonAuthLayout>
          }
        />

        <Route
          path="/registration"
          element={
            <NonAuthLayout>
              <PublicRoute
                component={<Registration />}
                restricted
                redirectTo="/dashboard"
              />
            </NonAuthLayout>
          }
        />

        <Route
          path="dashboard"
          element={<PrivateRoute component={<DashBoard />} />}
        />

        <Route path="/" element={<Navigate to={'/login'} />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};
