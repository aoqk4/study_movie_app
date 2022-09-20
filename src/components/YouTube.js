import "./YouTube.css";
function YouTube() {
  return (
    <>
      <div className="yt__nav">
        <span> YouTube </span>
        <div className="yt__icon">
          <span>
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
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </span>{" "}
          <span className="yt__search">
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>{" "}
          <span>
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
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="yt__genre">
        <span className="gen__search">탐색</span>
        <div className="yt__right__genre">
          <span className="gen__right">전체</span>
          <span className="gen__right">새로운 맞춤 동영상</span>
          <span className="gen__right">실시간</span>
          <span className="gen__right">음악</span>
        </div>
      </div>
      <div className="yt__main">
        <img
          className="main__img"
          src="https://w.namu.la/s/2dd0a512313750bb16b4ba95888a362d3c9c6218ff643e06a83e425b51b48f669f0b10a1acfce919aa01a83ae56fbac50cc80f4d61f5093908d0b70297c8a17eb9c84c36018c2e3f6f9ac8ff38a8f38676ce8419e1bf01fd3d906388c0579f47d2ac6e6b275fec6643afde4ce0f5d8d3"
        ></img>
        <p className="main__info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            width={50}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <h2 className="main__textcon">a df</h2>
        </p>
      </div>
    </>
  );
}
export default YouTube;
