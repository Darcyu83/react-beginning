import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Movie from "../components/Movie";
function Detail() {
  const { id } = useParams();
  const [movie, setMovieInfo] = useState({});
  console.log(id);
  useEffect(async () => {
    getMovie();
  });

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovieInfo(json.data.movie);
    console.log(json.data.movie);
  };

  return (
    <div>
      <h1>Movie Info</h1>
      <Movie
        id={movie.id}
        key={movie.id}
        mediumCoverImage={movie.medium_cover_image}
        title={movie.title}
        summary={movie.description_full}
        genres={movie.genres}
      />
    </div>
  );
}
export default Detail;
