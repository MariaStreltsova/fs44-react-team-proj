import { Box } from 'Box';
import { Suspense } from 'react';
import { PurpurBulbSvg } from 'images/icons/PurpurBulbSvg';
import AddTransactionBtn from '../../components/AddTransactionModal/AddTransactionModal';

import {
  RootWrapper,
  FormContainer,
  ImageContainer,
  BulbImg,
  PeopleImg,
} from './NonAuthLayoutStyles';

const NonAuthLayout = ({ component, picture }) => {
  return (
    <RootWrapper>
      <Suspense fallback={null}>
        <Box w={'1920px'} height="100vh" display="flex">
          <ImageContainer>
            <PeopleImg>{picture()}</PeopleImg>

            <BulbImg>{PurpurBulbSvg()}</BulbImg>
          </ImageContainer>
          <FormContainer>{component}</FormContainer>
          <AddTransactionBtn />
        </Box>
      </Suspense>
    </RootWrapper>
  );
};

export default NonAuthLayout;
