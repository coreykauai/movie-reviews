export default function MovieCollection({ movies, onMovieClick, genere }) {
  return (
    <div className="moreLikeThis" id="wy">
      <h3 className="genere">{genere}</h3>

      {movies.map((movie) => {
        return (
          <div
            key={movie.sumry}
            className="movie"
            onClick={() => {
              onMovieClick(movie);
              window.scrollTo({ top: 250, behavior: "smooth" });
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
