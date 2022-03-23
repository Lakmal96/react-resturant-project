import React, { Component } from "react";
import Layout from "./components/Layout";
import "./App.css";
import Menu from "./containers/Menu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Menu />
        </Layout>
      </div>
    );
  }
}

export default App;
