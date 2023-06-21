function Movie({ movieData, posterData }) {
  const title = movieData.title;
  const overview = movieData.overview;
  const thumbnailSrc = `${posterData.baseUrl}/${posterData.sizes[1]}/${movieData.poster_path}`;
  const rating = movieData.vote_average;

  return (
    <article style={{ margin: "5px", border: "1px solid black" }}>
      <figure>
        <img src={thumbnailSrc} alt="thumbnail" />
      </figure>
      <h3>{title}</h3>
      <p>{overview}</p>
      <h5>Rating: {rating}</h5>
    </article>
  );
}

export default Movie;
