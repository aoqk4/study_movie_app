import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Movies from "./components/Movies";
import Menu from "./components/Menu";
import ClickCnt from "./components/ClickCnt";
import YouTube from "./components/YouTube";
import Tailwind from "./components/Tailwind";
import Timer from "./components/Timer";

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
    <HashRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/popular" element={<Movies apiPath="popular" />} />
        <Route path="/now_playing" element={<Movies apiPath="now_playing" />} />
        <Route path="/upcoming" element={<Movies apiPath="upcoming" />} />
        <Route path="/ClickCnt" element={<ClickCnt />} />
        <Route path="/YouTube" element={<YouTube />} />
        <Route path="/tailwind" element={<Tailwind />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </HashRouter>
  );
  // return (
  //   <>

  //   </>
  // );
}

export default App;
