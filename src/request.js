const API_KEY = "f6f0abb06c99ea98eeffe932aad44f64";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genre=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genre=35`,
  fetchHorroeMovies: `/discover/movie?api_key=${API_KEY}&with_genre=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genre=80`,
  fetchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with_genre=99`,
};

export default requests;
