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
              <Title>Не найдено!</Title>
              <P>
                <Em>Данной страницы не существует</Em>
              </P>
              <Button to="/">На главную!</Button>
            </Main>
          </Wrapper>
        </Container>
      </WrapperAll>
    </>
  );
};

export default PageNotFound;
