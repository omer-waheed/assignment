import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";

import Home from "./screens/Home";
import Bill from "./screens/Bill";
import ViewBill from "./screens/ViewBill";

class RouterComponent extends Component {
  state = {};
  render() {
    return (
      <Router navigationBarStyle={{ backgroundColor: "#7ec0ee" }}>
        <Scene key="root">
          <Scene
            key="home"
            initial
            component={Home}
            title={"BILL MANAGER"}
            titleStyle={{ color: "white" }}
          />
          <Scene
            key="bill"
            component={Bill}
            title={"CREATE BILL"}
            titleStyle={{ color: "white" }}
          />
          <Scene
            key="viewBill"
            component={ViewBill}
            title={"BILL MANAGER"}
            titleStyle={{ color: "white" }}
          />
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
