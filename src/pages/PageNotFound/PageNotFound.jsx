import { useTranslation } from 'react-i18next';
import {
  Aside,
  Button,
  Container,
  Em,
  Img,
  Main,
  P,
  Title,
  Wrapper,
  WrapperAll,
} from './PageNotFound.styled';

const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <>
      <WrapperAll>
        <Container>
          <Wrapper>
            <Aside>
              <Img
                src="http://images.vfl.ru/ii/1589131264/dcaf8742/30474344.png"
                alt="404 Image"
              />
            </Aside>

            <Main>
              <Title>{t('title.404.notFound')}</Title>
              <P>
                <Em>{t('title.404.notExist')}</Em>
              </P>
              <Button to="/">{t('button.goHome')}</Button>
            </Main>
          </Wrapper>
        </Container>
      </WrapperAll>
    </>
  );
};

export default PageNotFound;
