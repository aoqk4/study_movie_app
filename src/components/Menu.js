import { Link } from "react-router-dom";
import { useState } from "react";
import "./Menu.css";

function Menu() {
  const [darkMode, setDarkMode] = useState(false);

  function toggle() {
    setDarkMode(!darkMode);
    if (!darkMode) {
      console.log("on");
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
      console.log("off");
    }
  }

  return (
    <nav>
      <ul>
        <li className="li__home">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              width={15}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            홈으로
          </Link>
        </li>
        <li>
          <Link to="/popular">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              width={15}
            >
              <path
                strokeLinecap="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            인기영화
          </Link>
        </li>
        <li>
          <Link to="/now_playing">🟡상영중</Link>
        </li>
        <li>
          <Link to="/upcoming">🔴개봉 예정</Link>
        </li>
        <li>
          <Link to="/YouTube">유튜브</Link>
        </li>
        <li className="li__about">
          <Link to="about">About..</Link>
        </li>
        <li>
          <Link to="/tailwind">Tailwind</Link>
        </li>
        <li>
          <div className="text-white dark:text-black">
            <input
              id="toggle_dark"
              type={"checkbox"}
              checked={darkMode}
              onChange={toggle}
            ></input>
            <label htmlFor="toggle_dark">다크모드</label>
          </div>
        </li>
        <li>
          <Link to="/timer">timer</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
