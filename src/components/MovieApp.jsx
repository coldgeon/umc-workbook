import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { fetchMovies } from '../../api';
import { useLocation } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

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
  background-color: rgba(0, 0, 0, 0.7);
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

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

function Movie() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    fetchMovies(location.pathname).then((json) => setMovie(json.results));
    setLoading(false);
  }, []);

  console.log(movie[0]);

  return (
    <>
      {loading ? (
        <LoaderWrapper>
          <MoonLoader color="#e74c3c" size={100} />
        </LoaderWrapper>
      ) : (
        <MovieWrapper>
          {movie.map((mv) => (
            <Link
              key={mv.id}
              to={`/movie/${mv.title}`}
              state={{
                id: `${mv.id}`,
                title: `${mv.title}`,
                overview: `${mv.overview}`,
                backdrop_path: `${mv.backdrop_path}`,
                vote_average: `${mv.vote_average}`,
                poster_path: `${mv.poster_path}`,
                release_date: `${mv.release_date}`,
              }}
            >
              <MovieComponent key={mv.id}>
                <MoviePoster
                  bgimg={`https://image.tmdb.org/t/p/original${mv.poster_path}`}
                >
                  <MovieDetail>
                    {mv.title}
                    {mv.overview}
                  </MovieDetail>
                </MoviePoster>
                <MovieTitle>
                  <TitleDiv>{mv.title}</TitleDiv>

                  <AverageSpan>🌟{mv.vote_average}</AverageSpan>
                </MovieTitle>
              </MovieComponent>
            </Link>
          ))}
        </MovieWrapper>
      )}
    </>
  );
}

export default Movie;
