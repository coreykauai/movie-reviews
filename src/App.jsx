import { useState } from "react";
import { movies } from "./data";
import { fakemovies } from "./fakeData";
import MovieCollection from "./components/MovieCollection";
import MainMovie from "./components/MainMovie";
import Title from "./title/Title";
import "./App.css";
import "./title/title.css";
import { willsmovies } from "./willdata";

function App() {
  const [spotlight, setSpotlight] = useState(null);

  return (
    <div className="container">
      <Title onTitleClick={setSpotlight} />

      <MainMovie spotlight={spotlight} />

      <MovieCollection
        movies={movies}
        onMovieClick={setSpotlight}
        genere="Coming Soon "
      />

      <MovieCollection
        movies={fakemovies}
        onMovieClick={setSpotlight}
        genere="Top 3 "
      />

      <MovieCollection
        movies={willsmovies}
        onMovieClick={setSpotlight}
        genere="Will Ferrell"
      />
    </div>
  );
}

export default App;
