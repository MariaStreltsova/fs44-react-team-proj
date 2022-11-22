import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../node_modules/flag-icons/css/flag-icons.min.css';
import { authOperations } from 'redux/auth';
import PublicRoute from 'hocs/Route/PublicRoute';
import PrivateRoute from 'hocs/Route/PrivateRoute';
import NonAuthLayout from 'layout/NonAuthLayout/NonAuthLayout';
import useAuth from 'hooks/useAuht';
import { MaleSvg } from 'images/icons/MaleSvg';
import { GirlSvg } from 'images/icons/GirlSvg';
import DashBoard from 'pages/DashBoard/DashBoard';

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
        <Route path="/" element={<NonAuthLayout picture={MaleSvg} />}>
          <Route
            path="login"
            element={
              <PublicRoute
                component={<Login />}
                restricted
                redirectTo="/dashboard"
              />
            }
          />
        </Route>

        <Route path="/" element={<NonAuthLayout picture={GirlSvg} />}>
          <Route
            path="registration"
            element={
              <PublicRoute
                restricted
                redirectedTo="/dashboard"
                component={<Registration />}
              />
            }
          />
        </Route>

        <Route
          path="/dashboard"
          element={<PrivateRoute component={<DashBoard />} />}
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};
