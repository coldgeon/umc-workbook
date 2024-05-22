const API_KEY = '5714ccc2ec156aadbd8397b903f030fc';
const BASE_URL = 'https://api.themoviedb.org/3';

export function fetchMovies(sub_title) {
  const URL = `${BASE_URL}/movie${sub_title}?api_key=${API_KEY}`;
  return fetch(URL).then((response) => response.json());
}

export function searchMovies(mv_title) {
  const searchURL = `${BASE_URL}/search/movie?&query=${mv_title}&region=KR&language=en-US&api_key=${API_KEY}`;
  return fetch(searchURL).then((response) => response.json());
}

export function fetchCredits(id) {
  const CreditURL = `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`;
  return fetch(CreditURL).then((response) => response.json());
}
