import React, { Component } from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Article from "./components/Article/Article";
import CircleFrame from "./components/ImageFrame/CircleFrame";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CircleFrame imagePath={"./images/favicon.ico"} altName={"kento75"} flameSize={12} />
        <Article />
      </div>
    );
  }
}

export default App;
