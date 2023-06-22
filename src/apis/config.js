import axios from "axios";

const token = import.meta.env.VITE_MOVIEAPI_TOKEN;
const config = {
  headers: { Autherization: `Bearer ${token}` },
};

const myConfig = {
  images: {
    base_url: "http://image.tmdb.org/t/p/",
    poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
  },
};

async function get() {
  const configUrl = "https://api.themoviedb.org/3/configuration";
  try {
    const result = await axios.get(configUrl, {
      headers: {
        Autherization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });
  } catch (err) {
    return myConfig;
  }
}

export { get };
