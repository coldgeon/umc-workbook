const API_KEY = '5714ccc2ec156aadbd8397b903f030fc';
const BASE_URL = `https://jsonviewer.stack.hu/#http://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

export function fetchMovies() {
  return fetch(BASE_URL.then((response) => response.json()));
}
