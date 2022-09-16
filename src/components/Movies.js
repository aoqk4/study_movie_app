import { node } from "prop-types";
import React from "react";
import Movie from "./Movie";

const moiveInfo = [
  {
    id: 1,
    movieName: "탑건 - 메버릭",
    actor: "톰 크루즈",
    genre: "비행 시뮬레이션",
    time: ["10:10", 123114124, { time: "15:00" }],
    티켓가격: 18000,
  },
  {
    id: 2,
    movieName: "미션 임파서블",
    actor: "톰 크루즈",
    genre: "액션",
    티켓가격: 17000,
  },
  {
    id: 3,
    movieName: "수리남",
    actor: "황정민",
    genre: "범죄",
  },
];

function Movies() {
  return (
    <>
      <h1>이종석 - 영화앱</h1>
      {/* <Movie
        movieName="탑건 - 메버릭"
        actor="톰 크루즈"
        genre="비행 시뮬레이션"
        time={["10:10", "11:00"]}
      />
      <Movie
        movieName="미션 임파서블"
        actor="톰 크루즈"
        genre="액션"
        time={["10:10", "11:00"]}
      />
      <Movie movieName="수리남" actor="황정민" genre="범죄" /> */}
      {moiveInfo.map((movie) => {
        return (
          <Movie
            key={movie.id}
            mName={movie.movieName}
            act={movie.actor}
            gen={movie.genre}
            tim={movie.time}
            price={movie.티켓가격}
          />
        );
      })}

      <Movie
        // key={}
        mName={"어린신부"}
        act={"문근영"}
        gen={"드라마"}
        tim={[]}
        price={5000}
      />
      <Movie
        // key={}
        mName={"큰신부"}
        act={"문근영"}
        gen={"드라마"}
        tim={[]}
        price={5000}
      />
    </>
  );
}

export default Movies;
