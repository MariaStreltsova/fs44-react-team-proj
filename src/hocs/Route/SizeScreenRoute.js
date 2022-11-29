
import useSizeScreen from 'hooks/useSizeScreen';
import { Navigate } from 'react-router-dom';

export default function SizeScreenRoute({
    component: Component,
    redirectTo = '/currency',
}) {
    let shouldRedirect = false;
    const sizeScreen = useSizeScreen();
    if (sizeScreen < 767) {
        return shouldRedirect = true;
    };
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}