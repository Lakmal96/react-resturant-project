import React, { Component } from "react";
import Toolbar from "./components/ToolBar";
import Menu from "./containers/Menu";

class App extends Component {
  render() {
    return (
      <div className="layout">
        <header>
          <Toolbar />
        </header>
        <main>
          <Menu />
        </main>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
