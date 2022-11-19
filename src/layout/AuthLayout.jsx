import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <>
            <Header />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </>
    );
};

export default AuthLayout;