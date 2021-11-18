import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import Menu from "../components/Menu";
import css from "../App.module.css";
import { NavLink, Outlet } from "react-router-dom";

function Home() {
  const [isLoading, setLoadinState] = useState(true);
  const [movies, setList] = useState([]);
  const [movingPx, setMovingPx] = useState(0);
  const [maxMovingPx, setMaxPx] = useState(0);
  const [movieIndx, setMovieIndx] = useState(0);

  const IMG_WIDTH = 230;

  useEffect(() => {
    //Equivalent to componentDidMount
    getMovies();
  }, []);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();

    setList(json.data.movies);
    setLoadinState(false);
    setMaxPx(json.data.movies.length * -IMG_WIDTH);
  };

  useEffect(() => {
    console.log("isLoading changes", isLoading);
  }, []);

  const carousel = document.querySelector("#carousel");
  if (carousel) {
    carousel.style.transform = `translate3d(${movingPx}px, 0px, 0px)`;
  }

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className={css.container}>
            <div className={css.inner}>
              <div className={css.carousel} id="carousel">
                {movies.map((movie) => (
                  <Movie
                    id={movie.id}
                    key={movie.id}
                    mediumCoverImage={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                  />
                ))}
              </div>
            </div>
          </div>
          <button>left</button>
        </div>
      )}
    </div>
  );
}

export default Home;
