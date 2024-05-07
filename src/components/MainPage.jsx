import { useState } from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const LogoWrapper = styled.div`
  height: 50vh;
  width: 100vw;
  background-color: rgba(47, 54, 64, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.h2`
  font-size: 35px;
`;
const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 50vh;
  width: 100vw;
`;

const SerchMovieLable = styled.h2`
  font-size: 35px;
  padding-top: 20px;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 25vh;
  width: 100vw;
`;

const SearchMovie = styled.input`
  height: 16%;
  border: none;
  width: 30vw;
  border-radius: 20px;
`;
const SearchBtn = styled.input`
  border: none;
  border-radius: 100px;
  margin-left: 1%;
  height: 18%;
  background-color: yellow;
`;

function Main() {
  console.log(find);

  return (
    <MainWrapper>
      <LogoWrapper>
        <Logo>Welcome (●'◡'●)</Logo>
      </LogoWrapper>
      <SearchWrapper>
        <SerchMovieLable>Find your Movie!</SerchMovieLable>
        <SearchInputWrapper>
          <SearchMovie />
          <SearchBtn type={'button'} value={'🧐'} />
        </SearchInputWrapper>
      </SearchWrapper>
    </MainWrapper>
  );
}

export default Main;
