import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";

import Home from "./screens/Home";
import Bill from "./screens/Bill";

class RouterComponent extends Component {
  state = {};
  render() {
    return (
      <Router navigationBarStyle={{ backgroundColor: "#7ec0ee" }}>
        <Scene key="root">
          <Scene
            key="home"
            component={Home}
            title={"BILL MANAGER"}
            titleStyle={{ color: "white" }}
          />
          <Scene
            key="bill"
            component={Bill}
            initial
            title={"CREATE BILL"}
            titleStyle={{ color: "white" }}
          />
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
