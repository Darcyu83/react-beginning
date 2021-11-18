import css from "../App.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, mediumCoverImage, title, summary, genres }) {
  return (
    <div>
      <div key={id} className={css.box}>
        <img src={mediumCoverImage} alt="poster"></img>
        <hr />
        <h2 className={css.title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <div className={css.contents}>
          <p className={css.smmry}>{summary}</p>
          <ul>
            {genres.map((g, index) => (
              <li key={index}>{g}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  mediumCoverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
