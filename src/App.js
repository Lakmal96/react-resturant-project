import React, { Component } from "react";
import Menu from "./containers/Menu";

class App extends Component {
  render() {
    return (
      <div className="layout">
        <header>Toolbar, SideDrawer, Backdrop</header>
        <main>
          <Menu />
        </main>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
