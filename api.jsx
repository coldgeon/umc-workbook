const API_KEY = '5714ccc2ec156aadbd8397b903f030fc';

export function fetchMovies(sub_title) {
  const BASE_URL = `https://api.themoviedb.org/3/movie${sub_title}?api_key=${API_KEY}`;
  return fetch(BASE_URL).then((response) => response.json());
}
