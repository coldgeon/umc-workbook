import styled from 'styled-components';
import { movies } from './MovieList';
import { useEffect, useState } from 'react';

const MovieComponent = styled.div``;

const MovieWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  padding: 30px;
`;
const MovieTitle = styled.div`
  width: 240px;
  height: 70px;
  background-color: #373b6a;
  text-align: left;
`;
const MoviePoster = styled.div`
  background-image: url(${(props) => props.bgimg});
  background-size: contain;
  width: 240px;
  height: 360px;
`;

const MovieDetail = styled.div`
  font-size: 13px;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  opacity: 0;
  text-align: left;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 1;
    transition: 0.5s;
  }
`;

const TitleDiv = styled.div`
  width: 90%;
  font-size: 13px;
  padding: 13px 0px 5px 7px;
`;

const AverageSpan = styled.div`
  text-align: right;
  font-size: 13px;
  padding-right: 7px;
`;

function Movie() {
  const [movie, setMovie] = useState([]);

  // function movieTarget(target) {}

  useEffect(() => {
    setMovie(movies.results);
  }, []);
  console.log(movie);

  return (
    <>
      <MovieWrapper>
        {movie.map((mv) => (
          <MovieComponent key={mv.id}>
            <MoviePoster
              bgimg={'https://image.tmdb.org/t/p/original' + mv.poster_path}
            >
              <MovieDetail>
                {mv.title}
                {mv.overview}
              </MovieDetail>
            </MoviePoster>
            <MovieTitle>
              <TitleDiv>{mv.title}</TitleDiv>

              <AverageSpan>{mv.vote_average}</AverageSpan>
            </MovieTitle>
          </MovieComponent>
        ))}
      </MovieWrapper>
    </>
  );
}

export default Movie;
