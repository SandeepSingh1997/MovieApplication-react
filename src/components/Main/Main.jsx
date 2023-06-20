import { useContext, useEffect, useState } from "react";
import { SearchContext } from "./SearchProvider";

import Movie from "./Movie";
import { getPopular as getPopularMovies } from "../../apis/movieApi";

export default function Main() {
  const searchText = useContext(SearchContext);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then((res) => {
        setMovies(res.movies);
      })
      .catch((err) => {
        setMovies([]);
      });
  }, [searchText]);

  return <main>{renderMovies(movies)}</main>;
}

function renderMovies(movies) {
  if (!movies || movies.length === 0) {
    return "No movies found...";
  } else {
    return movies.map((movie) => <Movie movieData={movie} />);
  }
}
