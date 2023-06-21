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

export { getPopular };
