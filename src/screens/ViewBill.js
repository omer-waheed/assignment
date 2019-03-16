import React, { Component } from "react";

import { Card, CardItem, Text, Left, Body, View } from "native-base";
import { ScrollView } from "react-native";
class ViewBill extends Component {
  state = { dataArray: [] };
  getMonth = index => {
    let tmp = this.props.month.filter(mon => {
      if (mon.key == index) return true;
    });
    return tmp[0].label;
  };

  componentWillMount() {
    console.log(this.props);
    let dataArray = this.props.bills.map(el => {
      return (
        <View style={{ flex: 0.5 }}>
          <Card style={{ backgroundColor: "#0372bf", borderRadius: 10 }}>
            <CardItem style={{ backgroundColor: "#0372bf" }}>
              <Left>
                <Body>
                  <Text style={{ color: "white" }}>{el.name}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody style={{ backgroundColor: "#7ec0ee" }}>
              <View style={{ flex: 1, flexDirection: "row", padding: "10%" }}>
                <View style={{ flex: 0.5 }}>
                  <Text style={{ textAlign: "center", color: "#0372bf" }}>
                    Month
                  </Text>
                </View>
                <View style={{ flex: 0.5 }}>
                  <Text style={{ textAlign: "center", color: "#0372bf" }}>
                    Budget
                  </Text>
                </View>
              </View>
            </CardItem>
            <CardItem cardBody style={{ backgroundColor: "#7ec0ee" }}>
              {el.billRow.map(value => {
                return (
                  <View
                    style={{ flex: 1, flexDirection: "row", padding: "10%" }}
                  >
                    <View style={{ flex: 0.5 }}>
                      <Text style={{ textAlign: "center", color: "#0372bf" }}>
                        {this.getMonth(value.month)}
                      </Text>
                    </View>
                    <View style={{ flex: 0.5 }}>
                      <Text style={{ textAlign: "center", color: "#0372bf" }}>
                        {value.budget}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </CardItem>
            <CardItem style={{ backgroundColor: "#0372bf" }}>
              <View style={{ flex: 1, flexDirection: "row", padding: "10%" }}>
                <View style={{ flex: 0.5 }}>
                  <Text style={{ textAlign: "center", color: "white" }}>
                    Device:
                  </Text>
                </View>
                <View style={{ flex: 0.5 }}>
                  <Text style={{ textAlign: "center", color: "white" }}>
                    {this.device(el.site)}
                  </Text>
                </View>
              </View>
            </CardItem>
            <CardItem style={{ backgroundColor: "#0372bf" }}>
              <View style={{ flex: 1, flexDirection: "row", padding: "10%" }}>
                <View style={{ flex: 0.5 }}>
                  <Text style={{ textAlign: "center", color: "white" }}>
                    Site:
                  </Text>
                </View>
                <View style={{ flex: 0.5 }}>
                  <Text style={{ textAlign: "center", color: "white" }}>
                    {this.site(el.site)}
                  </Text>
                </View>
              </View>
            </CardItem>
          </Card>
        </View>
      );
    });
    let data = dataArray.reduce(function(result, value, index, array) {
      if (index % 2 === 0) result.push(array.slice(index, index + 2));
      return result;
    }, []);
    let array = data.map(el => {
      return (
        <View style={{ flex: 1, padding: "5%", flexDirection: "row" }}>
          {el.map(value => value)}
        </View>
      );
    });
    this.setState({ dataArray: array });
    console.log(data);
  }

  site = index => {
    let site = this.props.site.filter(value => {
      if (value.key == index) return true;
    });
    return site[0].label;
  };
  device = index => {
    let device = this.props.device.filter(value => {
      if (value.key == index) return true;
    });
    return device[0].label;
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>{this.state.dataArray}</ScrollView>
      </View>
    );
  }
}

export default ViewBill;
