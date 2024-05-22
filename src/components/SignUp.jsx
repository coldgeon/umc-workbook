import { useState } from 'react';
import { Link } from 'react-router-dom';
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
const Input = styled.input.attrs({ required: true })`
  border-radius: 10px;
  width: 450px;
  height: 70%;
  padding: 5px;
`;
const MsgP = styled.p`
  padding-top: 10px;
  font-size: 12px;
  font-weight: bold;
  color: red;
`;
const InputBtn = styled.input`
  padding: 0px;
  background-color: yellow;
  border-radius: 20px;
  height: 100%;
  width: 100%;
  &:disabled {
    color: black;
    background-color: white;
  }
`;
const Label = styled.label``;
const LabelDiv = styled.div``;

function SignUp() {
  // 초기값 세팅 - 아이디, 닉네임, 비밀번호, 비밀번호확인, 이메일, 전화번호, 생년월일
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setEmail] = useState('');

  // 오류메세지 상태 저장

  const [nameMessage, setNameMessage] = useState('');
  const [ageMessage, setAgeMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');

  // 유효성 검사
  const [isname, setIsName] = useState(false);
  const [isage, setisAge] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isEmail, setIsEmail] = useState(false);

  //email msg
  const onChangeName = (e) => {
    const currentName = e.target.value;
    setName(currentName);

    if (currentName.length < 2) {
      setNameMessage('2글자 이상 입력해주세요');
      setIsName(false);
    } else {
      setIsName(true);
    }
  };
  const onChangeAge = (e) => {
    const currentAge = e.target.value;
    setAge(currentAge);
    if (Number(currentAge) > 18) {
      setisAge(true);
    } else if (!Number(currentAge)) {
      setAgeMessage('숫자로 입력해주세요.');
      setisAge(false);
    } else {
      setAgeMessage('너무 어려요.');
      setisAge(false);
    }
  };

  //pwd msg
  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,12}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        '숫자+영문자+특수문자 조합으로 4자리 이상 12자리 이하로 입력해주세요'
      );
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  };

  //pwd-check msg
  const onChangePasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage('비밀번호가 다릅니다.');
      setIsPasswordConfirm(false);
    } else {
      setIsPasswordConfirm(true);
    }
  };

  //email msg
  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage('이메일의 형식이 올바르지 않습니다');
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  };

  const submitHandler = (e) => {
    //1. 페이지 리로드 방지
    e.preventDefault();

    //2. state 결합하기: 제출된 폼의 내용을 모두 담은 객체 생성
    const expenseData = {
      uname: name,
      uage: age,
      uemail: email,
      upassword: password,
      upasswordConfirm: passwordConfirm,
    };
    //3. 양방형 바인딩: 입력 후 form에 적은 값 화면에서 없애기
    // setEnteredTitle("");
    // setEnteredAmount("");
    // setEnteredDate("");
    console.log(expenseData);
  };

  return (
    <>
      <PageWrapper>
        <H2>회원가입</H2>
        <LoginForm onSubmit={submitHandler}>
          <Column>
            <Input
              value={name}
              type="text"
              name="username"
              placeholder="이름을 입력하세요"
              onChange={onChangeName}
            ></Input>
            <MsgP hidden={isname}>{nameMessage}</MsgP>
          </Column>
          <Column>
            <Input
              value={email}
              type="email"
              name="email"
              placeholder="이메일을 입력해주세요"
              onChange={onChangeEmail}
            ></Input>
            <MsgP hidden={isEmail}>{emailMessage}</MsgP>
          </Column>
          <Column>
            <Input
              value={age}
              type="text"
              name="age"
              placeholder="나이를 입력해주세요"
              onChange={onChangeAge}
            ></Input>
            <MsgP hidden={isage}>{ageMessage}</MsgP>
          </Column>
          <Column>
            <Input
              value={password}
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              onChange={onChangePassword}
            ></Input>
            <MsgP hidden={isPassword}>{passwordMessage}</MsgP>
          </Column>
          <Column>
            <Input
              value={passwordConfirm}
              type="password"
              name="password-confirm"
              placeholder="비밀번호 확인"
              onChange={onChangePasswordConfirm}
            ></Input>
            <MsgP hidden={isPasswordConfirm}>{passwordConfirmMessage}</MsgP>
          </Column>
          {/* 유효성 검사를 다 통과해야지만 submit 버튼을 누를 수 있음! */}
          <Link to={'/signup/login'}>
            <InputBtn
              type="submit"
              disabled={
                isname == true &&
                isage == true &&
                isEmail == true &&
                isPassword == true &&
                isPasswordConfirm == true
                  ? false
                  : true
              }
            ></InputBtn>
          </Link>
        </LoginForm>
        <LabelDiv>
          <Label></Label>
          <Label></Label>
        </LabelDiv>
      </PageWrapper>
    </>
  );
}

export default SignUp;
