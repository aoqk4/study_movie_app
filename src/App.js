import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Movie from "./components/Movie";
import "./App.css";

function App(props) {
  const [loading, setLoading] = useState(true);

  const [movies, setMovies] = useState([]);

  async function getMovieApi() {
    if (0 < movies.length) {
      return;
    }

    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=a16a0f3264d8802455a13881d70f4e10&language=ko&page=1`;

    const result = await axios.get(URL);

    setMovies(result.data.results);
    setLoading(false);
  }

  useEffect(() => {
    getMovieApi();
  }, []);

  return (
    <>
      {loading ? (
        <div>로딩중...</div>
      ) : (
        <div className="movieContainer">
          {movies.map((ele) => {
            return (
              <Movie
                key={ele.id}
                title={ele.title}
                poster_path={ele.poster_path}
                overview={ele.overview}
                vote_average={ele.vote_average}
                adult={ele.adult}
                original_language={ele.original_language}
                release_date={ele.release_date}
                id={ele.id}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default App;
