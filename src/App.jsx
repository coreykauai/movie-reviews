import { useState } from "react";
import { movies } from "./data";
import MovieCollection from "./components/MovieCollection";
import MainMovie from "./components/MainMovie";
import Title from "./title/Title";
import "./App.css";
import "./title/title.css";

function App() {
  const [spotlight, setSpotlight] = useState(null);

  return (
    <div className="container">
      <Title onTitleClick={setSpotlight} />

      <MainMovie movies={movies} spotlight={spotlight} />

      <MovieCollection onMovieClick={setSpotlight} />
    </div>
  );
}

export default App;
