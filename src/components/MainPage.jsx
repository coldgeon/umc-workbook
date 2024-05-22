import { useState } from 'react';
import styled from 'styled-components';
import SearchMovieList from './SearchMovie';
import { searchMovies } from '../../api';

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 120vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 1);
`;

const LogoWrapper = styled.div`
  height: 40%;
  width: 100vw;
  background-color: rgba(47, 54, 64, 0.5);
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
  height: 40%;
  width: 100vw;
`;

const SerchMovieLable = styled.h2`
  font-size: 35px;
  padding-top: 20px;
`;

const SearchInputWrapper = styled.form`
  height: 100%;
  width: 30%;
`;

const SearchInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 100vw;
  padding-top: 10px;
  padding-left: 15px;
`;

const SearchMovie = styled.input`
  height: 35%;
  border: none;
  width: 80%;
  border-radius: 20px;
  padding-left: 15px;
`;
const SearchBtn = styled.input`
  border: none;
  border-radius: 100px;
  margin-left: 1%;
  height: 40%;
  background-color: yellow;
`;

const MovieWrapper = styled.div`
  overflow: scroll;
  height: 60%;
  width: 80vw;
  background-color: rgba(47, 54, 64, 0.5);
`;

/*
1. submit 시에 search가 안 먹는 거, title을 어떻게 넘겨주었는지 궁금
-에이피아이를 서브밋 핸들러에 먹이고, 무비를 그냥 컴포넌트로 서치 무비 리스트에 넘겨주자
*/
function Main() {
  const [title, setTitle] = useState('');
  const [movie, setMovie] = useState([]);
  const [onsubmit, setOnSubmit] = useState(false);

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const submitHandler = (e) => {
    //1. 페이지 리로드 방지
    e.preventDefault();
    searchMovies(title).then((json) => setMovie(json.results.slice(0, 15)));
    setOnSubmit(true);
  };
  // console.log(movie);

  return (
    <>
      <MainWrapper>
        <LogoWrapper>
          <Logo>Welcome (●'◡'●)</Logo>
        </LogoWrapper>
        <SearchWrapper>
          <SerchMovieLable>Find your Movie!</SerchMovieLable>
          <SearchInputDiv>
            <SearchInputWrapper onSubmit={submitHandler}>
              <SearchMovie
                type="text"
                name="title"
                onChange={titleHandler}
                value={title}
              />
              <SearchBtn type={'submit'} value={'🧐'} />
            </SearchInputWrapper>
          </SearchInputDiv>
        </SearchWrapper>

        {onsubmit ? (
          <MovieWrapper>
            <SearchMovieList movie_list={movie}></SearchMovieList>
          </MovieWrapper>
        ) : null}
      </MainWrapper>
    </>
  );
}

export default Main;
