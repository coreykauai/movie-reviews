import { useState } from "react";
import { movies } from "./data";
import "./App.css";

function App() {
  const [spotlight, setSpotlight] = useState(null);

  return (
    <div className="container">
      <div className="neato glowing-btn">
        <span
          className="glowing-txt"
          onClick={() => {
            if (spotlight !== null) {
              setSpotlight(null);
            }
          }}
        >
          M<span className="faulty-letter">O</span>VIE
          <span className="faulty-letter-two">S</span>
        </span>
      </div>

      {spotlight && (
        <div className="centerMovie">
          <div className="movieandtitle">
            <h1 className="spotLightTitle">{spotlight.title}</h1>
            <img className="spotlightPoster" src={spotlight.poster} alt="" />
          </div>
          <p className="description">{spotlight.sumry}</p>
        </div>
      )}

      <div className="moreLikeThis" id="wy">
        {movies.map((movie) => {
          return (
            <div
              key={movie.sumry}
              className="movie"
              onClick={() => {
                setSpotlight(movie);
              }}
            >
              <img src={movie.poster} className="posta" />
              <p className="title">{movie.title}</p>
            </div>
          );
        })}
        <span
          className="arrow"
          onClick={() => {
            if (!spotlight) {
              const movielist = document.getElementById("wy");
              movielist.scrollBy(200, 0);
            }

            movies.map((movie) => {
              setSpotlight(movie++);
            });
          }}
        >
          {" "}
          V{" "}
        </span>
      </div>
    </div>
  );
}

export default App;
