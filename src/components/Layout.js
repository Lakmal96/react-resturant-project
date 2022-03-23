import React from "react";

const Layout = (props) => {
  return (
    <div className="layout">
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main>{props.children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
