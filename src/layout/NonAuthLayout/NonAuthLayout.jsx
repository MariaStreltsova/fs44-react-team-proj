import { Suspense } from 'react';
import { PurpurBulbSvg } from 'images/icons/PurpurBulbSvg';
import { MaleSvg } from 'images/icons/MaleSvg';
import { GirlSvg } from 'images/icons/GirlSvg';

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
    <RootWrapper>
      <Suspense fallback={null}>
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
          <FormContainer>
            {children}
          </FormContainer>
        </BoxContainer>
      </Suspense>
    </RootWrapper>
  );
};

export default NonAuthLayout;
