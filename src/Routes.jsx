import { Routes, Route } from 'react-router-dom';
import Main from './components/MainPage';
import PopularMovies from './components/PopularPage';
import NowPlayingMovies from './components/NowPlayingPage';
import TopRatedMovies from './components/TopRatedPage';
import UpComingMovies from './components/UpComing';
import Detail from './components/MovieDetailPage';
import SignUp from './components/SignUp';
import LogIn from './components/LogInPage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signup/login" element={<LogIn />}></Route>
      <Route path="/popular" element={<PopularMovies />}></Route>
      <Route path="/now_playing" element={<NowPlayingMovies />}></Route>
      <Route path="/top_rated" element={<TopRatedMovies />}></Route>
      <Route path="/upcoming" element={<UpComingMovies />}></Route>
      <Route path="/movie/:id" element={<Detail />}></Route>
    </Routes>
  );
}

export default Router;
