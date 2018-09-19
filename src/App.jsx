import React, { Component } from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Article from "./components/Article/Article";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Article />
      </div>
    );
  }
}

export default App;
