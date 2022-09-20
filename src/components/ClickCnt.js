import React from "react";
import { useState } from "react";

const divStyle = {
  padding: "5px",
  border: "1px solid red",
};

const btnStyle = {
  margin: "10px",
  boxShadowInset: "0px 39px 0px -24px #e67a73",
  backgroundColor: "#e4685d",
  borderRadius: "4px",
  border: "1px solid #ffffff",
  display: "inline-block",
  cursor: "pointer",
  color: "#ffffff",
  fontFamily: "Arial",
  fontSize: "15px",
  padding: "6px 15px",
  textDecoration: "none",
  textShadow: "0px 1px 0px #b23e35",
};

function ClickCnt(props) {
  const { title } = props;
  const [timeId, setId] = useState(0);
  const [cnt, setCnt] = useState(-1);

  function 증가함수() {
    if (0 === timeId) {
      setId(
        setInterval(() => {
          setCnt((prev) => {
            return prev + 1;
          });
        }, 1000)
      );
    }
  }
  function 감소함수() {
    clearInterval(timeId);
    setCnt(0);
    setId(0);
  }

  return (
    <div className="container" style={divStyle}>
      <div>
        <h2>
          {" "}
          {title ? title : "기본 카운터"} : {cnt}
        </h2>
        <hr></hr>
        <h2>타이머의 ID = {timeId}</h2>
      </div>
      <button onClick={증가함수} style={btnStyle}>
        {" "}
        시작{" "}
      </button>
      <button onClick={감소함수} style={btnStyle}>
        {" "}
        종료{" "}
      </button>
    </div>
  );
}

export default ClickCnt;
