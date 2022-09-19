import PropTypes from "prop-types";
import "./Movie.css";

function Movie(props) {
  const {
    id,
    title,
    poster_path,
    overview,
    vote_average,
    adult,
    original_language,
    release_date,
  } = props;

  return (
    <div className="movie__data">
      <div className="movie__poster">
        {" "}
        <img
          className="movie__img"
          width={100}
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        ></img>
        <div className="movie__adult movie__info">{!adult ? "19" : null}</div>
      </div>
      <h3 className="movie__title">{title}</h3>
      <div className="movie__overview">{overview.slice(0, 100)}...</div>
      <div className="movie__vote">
        {vote_average}{" "}
        {Array(Number(vote_average.toFixed(0)))
          .fill(0)
          .map((ele, idx) => (
            <span key={idx}>★</span>
          ))}
      </div>
      <div className="movie__lang">{original_language}</div>
      <div className="movie__date movie__info">{release_date}</div>
      <div className="movie__id movie__info">{id}</div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
  vote_average: PropTypes.number,
  adult: PropTypes.bool.isRequired,
  original_language: PropTypes.string,
  release_date: PropTypes.string,
};

export default Movie;
