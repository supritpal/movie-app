let API_KEY = "ba7b1ebf1d2402aaeb41e82736bef295";
let BASE_URL = "https://api.themoviedb.org/3";

export let getpopularmovies = async () => {
  let response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  let data = await response.json();
  return data.results;
};

export let searchmovies = async (query) => {
  let response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  let data = await response.json();
  return data.results;
};
