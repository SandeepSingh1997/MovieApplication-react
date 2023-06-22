import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import _ from "lodash";

import { get as getMovie } from "../../apis/movieApi";

const myConfig = {
  images: {
    base_url: "http://image.tmdb.org/t/p/",
    poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
  },
};

export default function MoviePage() {
  const params = useParams();
  const { movieId } = params;

  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    getMovie(movieId)
      .then((res) => {
        console.log("from movie page: ", res);
        setMovieData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      {!_.isEmpty(movieData) ? (
        <div>
          <h2>{movieData.original_title}</h2>
          <figure>
            <img
              src={`${myConfig.images.base_url}${myConfig.images.poster_sizes[5]}/${movieData.backdrop_path}`}
              alt="movie-poster"
            />
          </figure>
          <p>{movieData.overview}</p>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </main>
  );
}
