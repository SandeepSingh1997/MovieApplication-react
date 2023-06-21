function Movie({ movieData, posterConfig }) {
  const title = movieData.title;
  const overview = movieData.overview;
  const thumbnailSrc = `${posterConfig.baseUrl}/${posterConfig.sizes[0]}/${movieData.poster_path}`;
  const rating = movieData.vote_average;

  return (
    <article style={{ margin: "5px", border: "1px solid black" }}>
      <figure>
        <img src={thumbnailSrc} alt="thumbnail" />
      </figure>
      <p>{title}</p>
      <p>{overview}</p>
      <h5>{rating}</h5>
    </article>
  );
}

export default Movie;
