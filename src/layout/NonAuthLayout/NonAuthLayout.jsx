import { Box } from 'Box';
import { Suspense } from 'react';
import { PurpurBulbSvg } from 'images/icons/PurpurBulbSvg';

import {
  RootWrapper,
  FormContainer,
  ImageContainer,
  BulbImg,
  PeopleImg,
  TitleApp
} from './NonAuthLayoutStyles';

const NonAuthLayout = ({ component, picture }) => {
  return (
    <RootWrapper>
      <Suspense fallback={null}>
        <Box w={'1920px'} height="100vh" display="flex">
          <ImageContainer>
            <PeopleImg>{picture()}</PeopleImg>
            <TitleApp>Finance App</TitleApp>
            <BulbImg>{PurpurBulbSvg()}</BulbImg>
          </ImageContainer>
          <FormContainer>{component}</FormContainer>
        </Box>
      </Suspense>
    </RootWrapper>
  );
};

export default NonAuthLayout;
