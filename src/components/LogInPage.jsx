import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  gap: 30px;
`;
const H2 = styled.h2`
  font-size: 35px;
  font-weight: bold;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 70%;
`;
const Column = styled.div`
  height: 10%;
`;
const Input = styled.input`
  border-radius: 10px;
  width: 450px;
  height: 70%;
  padding: 5px;
`;
function LogIn() {
  return (
    <>
      <PageWrapper>
        <H2>로그인 페이지</H2>
        <LoginForm>
          <Column>
            <Input
              tuype="text"
              name="email"
              placeholder="이메일을 입력하세요"
            ></Input>
          </Column>
          <Column>
            <Input
              type="password"
              name="password"
              placeholder="이메일을 입력하세요"
            ></Input>
          </Column>
        </LoginForm>
      </PageWrapper>
    </>
  );
}

export default LogIn;
