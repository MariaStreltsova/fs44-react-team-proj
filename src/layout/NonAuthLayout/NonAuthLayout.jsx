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
import LanguageFlags from 'locales/LanguageFlags';

const NonAuthLayout = ({ children }) => {
  const path = window.location.pathname.endsWith('/login');

  return (
    <>
      <RootWrapper style={{ position: 'relative' }}>
        <BoxContainer>
          <LanguageFlags position="absolute" top={40} right={40} />

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
