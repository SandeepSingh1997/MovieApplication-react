import { useContext, useEffect, useRef, useState } from "react";
import { SearchContext } from "./SearchProvider";
import { v4 as uuid4 } from "uuid";

import Movie from "./Movie";

import { getPopular as getPopularMovies } from "../../apis/movieApi";
import { get as getConfig } from "../../apis/config";

const myConfig = {
  images: {
    base_url: "http://image.tmdb.org/t/p/",
    poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
  },
};

export default function Main() {
  const searchText = useContext(SearchContext);

  const [movies, setMovies] = useState([]);
  const [config, setConfig] = useState(myConfig);
  const [newPageNum, setNewPageNum] = useState(1);

  const movieContainerRef = useRef(null);

  useEffect(() => {
    setConfig(myConfig);
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      //intersection observer
      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          // console.log(entries);
          const lastMovie = entries[0];
          if (lastMovie.isIntersecting) {
            try {
              getPopularMovies(newPageNum).then((res) => {
                const newMovies = res.movies.map((movie) => {
                  return { uid: uuid4(), ...movie };
                });
                setMovies([...movies, ...newMovies]);
                setNewPageNum(newPageNum + 1);

                intersectionObserver.unobserve(lastMovie.target);
                intersectionObserver.disconnect();
              });
            } catch (err) {
              console.log(err);
            }
          }
        },
        {
          threshold: 0.5,
        }
      );
      const lastMovie =
        movieContainerRef.current.querySelector("article:last-child");
      // console.log(lastMovie);
      // console.log(movieContainerRef.current);

      intersectionObserver.observe(lastMovie);
    }
  }, [movies]);

  useEffect(() => {
    try {
      getPopularMovies(newPageNum).then((res) => {
        const popularMovies = res.movies.map((movie) => {
          return { uid: uuid4(), ...movie };
        });
        setMovies(popularMovies);
        setNewPageNum(newPageNum + 1);
      });
    } catch (err) {
      console.log(err);
      setMovies([]);
    }
  }, [searchText]);

  return <main ref={movieContainerRef}>{renderMovies(movies, config)}</main>;
}

function renderMovies(movies, config) {
  if (!movies || movies.length === 0 || config === null) {
    return "No movies found...";
  } else {
    const posterData = {
      baseUrl: config.images.base_url,
      sizes: config.images.poster_sizes,
    };

    return movies.map((movie) => (
      <Movie key={movie.uid} movieData={movie} posterData={posterData} />
    ));
  }
}
