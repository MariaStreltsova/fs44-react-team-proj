import { PurpurBulbSvg } from 'images/icons/PurpurBulbSvg';
import { MaleSvg } from 'images/icons/MaleSvg';
import { GirlSvg } from 'images/icons/GirlSvg';
import { ToastContainer } from 'react-toastify';

import {
  RootWrapper,
  FormContainer,
  ImageContainer,
  BulbImg,
  PeopleImg,
  TitleApp,
  BoxContainer,
} from './NonAuthLayoutStyles';

const NonAuthLayout = ({ children }) => {
  const path = window.location.pathname.endsWith('/login');

  return (
    <>
      <RootWrapper>
        <BoxContainer>
          <ImageContainer>
            {path ? (
              <PeopleImg>{MaleSvg()}</PeopleImg>
            ) : (
              <PeopleImg>{GirlSvg()}</PeopleImg>
            )}
            <TitleApp>Finance App</TitleApp>
            <BulbImg>{PurpurBulbSvg()}</BulbImg>
          </ImageContainer>
          <FormContainer>{children}</FormContainer>
        </BoxContainer>
      </RootWrapper>
      <ToastContainer
        autoClose={2000}
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default NonAuthLayout;
