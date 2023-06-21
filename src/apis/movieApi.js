import axios from "axios";

const baseUrl = import.meta.env.VITE_MOVIEAPI_BASE_URL;
const token = import.meta.env.VITE_MOVIEAPI_TOKEN;
const apiVersion = import.meta.env.VITE_MOVIEAPI_VERSION;

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

async function getPopular(pageNum) {
  const popularMoviesUrl = `${baseUrl}/${apiVersion}/movie/popular?page=${pageNum}`;
  try {
    const result = await axios.get(popularMoviesUrl, config);

    if (result.status === 200) {
      return { page: result.data.page, movies: result.data.results };
    } else {
      throw `${result.status}`;
    }
  } catch (err) {
    console.log(err);
    return { page: 0, movies: [] };
  }
}

async function getSuggestions(query) {
  const searchUrl = `${baseUrl}/${apiVersion}/search/movie?query=${query}&page=1`;
  try {
    const result = await axios.get(searchUrl, config);
    // console.log(result, result.results);
    return result.data.results;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export { getPopular, getSuggestions };
