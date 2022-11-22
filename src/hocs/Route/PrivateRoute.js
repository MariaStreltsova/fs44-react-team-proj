import useAuth from '../../hooks/useAuht';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  console.log(shouldRedirect, 'shouldRedirect');
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
