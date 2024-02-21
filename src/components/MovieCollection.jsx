import { movies } from "../data";

export default function MovieCollection({ movie, onMovieClick }) {
  return (
    <div className="moreLikeThis" id="wy">
      {movies.map((movie) => {
        return (
          <div
            key={movie.sumry}
            className="movie"
            onClick={() => {
              console.log("clicked");
              onMovieClick(movie);
            }}
          >
            <img src={movie.poster} className="posta" />
            <p className="title">{movie.title}</p>
          </div>
        );
      })}
    </div>
  );
}
