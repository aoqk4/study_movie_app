import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import "./Movies.css";

function Movies(props) {
  const [loading, setLoading] = useState(true);

  const { apiPath } = props;

  const [movies, setMovies] = useState([]);

  const [flag, setFlag] = useState(false);

  // setTimeout(() => {
  //   setFlag(true);
  // }, 3000);

  async function getMovieApi() {
    console.log("!!");

    if (!apiPath) {
      return;
    }

    console.log("in if");

    let URL = `https://api.themoviedb.org/3/movie/${apiPath}?api_key=a16a0f3264d8802455a13881d70f4e10&language=ko&region=kr`;

    const result = await axios.get(URL);

    setMovies(result.data.results);
    setLoading(false);
  }

  useEffect(() => {
    getMovieApi();
  }, [apiPath]);

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

export default Movies;
