import React from "react";

// state는 동적 데이터를 다룰 때 사용하는 리액트 요소. let..

// function App() {
//   return <div>함수 컴포넌트</div>;
// }

// class App extends React.Component {
//   render() {
//     return <div>클래스 컴포넌트</div>;
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props); // 부모 생성자

    this.state = {
      cnt: 0,
    };
  }

  plus = () => {
    // console.log("증가");
    // this.setState({ cnt: this.state.cnt + 1 });
    this.setState((state) => {
      console.log(JSON.stringify(state));
      return { cnt: state.cnt + 1 };
    });
  };

  minus = () => {
    // console.log("감소");

    // 안1.
    // this.setState({ cnt: this.state.cnt - 1 });

    // 안2. 객체가 더욱더 복잡한 구조가 되었을 때
    this.setState((state) => {
      console.log(JSON.stringify(state));
      return { cnt: state.cnt - 1 };
    });
  };
  render() {
    return (
      <div>
        <h1>카운터 : {this.state.cnt}</h1>
        <button onClick={this.plus}>+1</button>{" "}
        <button onClick={this.minus}>-1</button>
      </div>
    );
  }
}

export default App;
