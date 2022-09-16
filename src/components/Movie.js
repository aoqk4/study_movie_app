import React from "react";
import PropTypes, { string } from "prop-types"; // ES6

function Movie(props) {
  let { mName, act, gen, tim, price } = props;

  console.log(typeof price);

  return (
    <>
      <hr />
      <div>영화이름 : {mName}</div>
      <div>주연배우 : {act}</div>
      <div>영화장르 : {gen}</div>
      <div>
        상영시간 :{" "}
        {tim
          ? tim
              .filter((ele) => {
                return typeof ele === "string" ? true : false;
              })
              .join(" ")
          : null}
      </div>
      <div>티켓가격 : {price ? price + 500 : null}</div>
    </>
  );
}

Movie.propTypes = {
  mName: PropTypes.string.isRequired,
  act: PropTypes.string.isRequired,
  gen: PropTypes.string.isRequired,
  tim: PropTypes.array,

  price: PropTypes.number,
};

export default Movie;
