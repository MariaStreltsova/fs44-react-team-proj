// import { Box } from 'Box';
import { Suspense } from 'react';
import { PurpurBulbSvg } from 'images/icons/PurpurBulbSvg';
import AddTransactionBtn from '../../components/AddTransactionModal/AddTransactionModal';
import { Outlet } from 'react-router-dom';

import {
  RootWrapper,
  FormContainer,
  ImageContainer,
  BulbImg,
  PeopleImg,
  TitleApp,
  BoxContainer
} from './NonAuthLayoutStyles';

const NonAuthLayout = ({ picture }) => {
  return (
    <RootWrapper>
      <Suspense fallback={null}>
        <BoxContainer>
          <ImageContainer>
            {picture && <PeopleImg>{picture()}</PeopleImg>}
            <TitleApp>Finance App</TitleApp>
            <BulbImg>{PurpurBulbSvg()}</BulbImg>
          </ImageContainer>
          <FormContainer>
            <AddTransactionBtn />
            <Outlet />
          </FormContainer>
        </BoxContainer>
      </Suspense>
    </RootWrapper>
  );
};

export default NonAuthLayout;
