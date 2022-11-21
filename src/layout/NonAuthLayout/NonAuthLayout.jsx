import { Box } from 'Box';
import { Suspense } from 'react';
import { PurpurBulbSvg } from 'images/icons/PurpurBulbSvg';
import { Outlet } from 'react-router-dom';

import {
  RootWrapper,
  FormContainer,
  ImageContainer,
  BulbImg,
  PeopleImg,
} from './NonAuthLayoutStyles';

const NonAuthLayout = ({ picture }) => {
  return (
    <RootWrapper>
      <Suspense fallback={null}>
        <Box w={'1920px'} height="100vh" display="flex">
          <ImageContainer>
            {picture && <PeopleImg>{picture()}</PeopleImg>}
            <BulbImg>{PurpurBulbSvg()}</BulbImg>
          </ImageContainer>
          <FormContainer>
            <Outlet />
          </FormContainer>
        </Box>
      </Suspense>
    </RootWrapper>
  );
};

export default NonAuthLayout;
