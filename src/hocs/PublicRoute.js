// import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({
  restricted = false,
  redirectedTo = '/',
  component: Component,
}) {
  const isLoggedIn = false;
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectedTo} /> : Component;
}
