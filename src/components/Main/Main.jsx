import { useContext, useEffect, useState } from "react";
import { SearchContext } from "./SearchProvider";

import Movie from "./Movie";

import { getPopular as getPopularMovies } from "../../apis/movieApi";
import { get as getConfig } from "../../apis/config";

export default function Main() {
  const searchText = useContext(SearchContext);

  const [movies, setMovies] = useState([]);
  const [config, setConfig] = useState(null);

  useEffect(() => {
    setConfig({
      images: {
        base_url: "http://image.tmdb.org/t/p/",
        poster_sizes: [
          "w92",
          "w154",
          "w185",
          "w342",
          "w500",
          "w780",
          "original",
        ],
      },
    });
  }, []);

  useEffect(() => {
    try {
      getPopularMovies().then((res) => {
        setMovies(res.movies);
      });
    } catch (err) {
      console.log(err);
      setMovies([]);
    }
  }, [searchText]);

  return <main>{renderMovies(movies, config)}</main>;
}

function renderMovies(movies, config) {
  if (!movies || movies.length === 0 || config === null) {
    return "No movies found...";
  } else {
    const posterConfig = {
      baseUrl: config.images.base_url,
      sizes: config.images.poster_sizes,
    };

    return movies.map((movie) => (
      <Movie movieData={movie} posterConfig={posterConfig} />
    ));
  }
}
