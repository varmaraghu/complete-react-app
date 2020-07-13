import React, { Component } from "react";

import Auxiliary from "../../hoc/Auxiliary";
import styles from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SiderDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    // this.setState({ showSideDrawer: !this.state.showSideDrawer });
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Auxiliary>
        <Toolbar displayDrawer={this.sideDrawerToggleHandler} />
        <SiderDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={styles.Content}>{this.props.children}</main>
      </Auxiliary>
    );
  }
}

export default Layout;
