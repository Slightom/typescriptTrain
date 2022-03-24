import styled from "@emotion/styled";

const Container = styled("div")`
  display: flex;
`;

const MyImage = styled("img")`
  &:hover {
    opacity: 0.5;
  }
`;

const TestUseRef = () => {
  return (
    <Container>
      <MyImage
        src="https://www.goal.pl/wp-content/uploads/2022/01/bielik-krystian-960x640.jpg"
        alt="img"
      />
      <MyImage
        src="https://weszlo.com/wp-content/uploads/2020/07/Szymon-%C5%BBurkowski.jpg"
        alt="img"
      />
    </Container>
  );
};

export default TestUseRef;
