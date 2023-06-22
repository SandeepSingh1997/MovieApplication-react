import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import _ from "lodash";

import { get as getMovie } from "../../apis/movieApi";
import { get as getConfig } from "../../apis/config";

import Style from "./MoviePage.module.scss";

export default function MoviePage() {
  const params = useParams();

  const { movieId } = params;

  const [movieData, setMovieData] = useState({});
  const [config, setConfig] = useState({});

  useEffect(() => {
    getConfig().then((res) => {
      setConfig(res);
    });
  }, []);

  useEffect(() => {
    getMovie(movieId)
      .then((res) => {
        setMovieData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [movieId]);

  return (
    <main>
      {!_.isEmpty(movieData) && !_.isEmpty(config) ? (
        <div>
          <h2 className={Style.title}>{movieData.original_title}</h2>
          <figure>
            <img
              className={Style.poster}
              src={`${config.images.base_url}${config.images.poster_sizes[5]}/${movieData.backdrop_path}`}
              alt="movie-poster"
            />
          </figure>
          <p className={Style.overview}>{movieData.overview}</p>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </main>
  );
}
