import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, movie }) {
  return (
    <div key={movie.id}>
      <h2>
        <Link to={`/movie/${id}`}>{movie.title}</Link>
        {/* <a href="/movie">{movie.title}</a> // 이 코드는 페이지를 새로고침하면서 연결된 url로 넘어갑니다. */}
      </h2>

      <img src={movie.medium_cover_image} />
      <p>
        {movie.summary.length > 235
          ? `${movie.summary.slice(0, 235)}...`
          : movie.summary}
      </p>
      <ul>
        {movie.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  movie: {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  },
};
export default Movie;
