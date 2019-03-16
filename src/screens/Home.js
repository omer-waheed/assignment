import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Content, Button, Text } from "native-base";
import { Actions } from "react-native-router-flux";

class Home extends Component {
  state = {
    bills: [],
    site: [
      { label: "My Room1", key: "1" },
      { label: "My Room2", key: "2" },
      { label: "My Room3", key: "3" },
      { label: "My Room4", key: "4" }
    ],
    device: [
      { label: "Room1 AC", key: "1" },
      { label: "Room2 AC", key: "2" },
      { label: "Room3 AC", key: "3" },
      { label: "Room4 AC", key: "4" }
    ],
    month: [
      { label: "JAN", key: "1" },
      { label: "FEB", key: "2" },
      { label: "MAR", key: "3" },
      { label: "APR", key: "4" },
      { label: "MAY", key: "5" },
      { label: "JUN", key: "6" },
      { label: "JUL", key: "7" },
      { label: "AUG", key: "8" },
      { label: "SEP", key: "9" },
      { label: "OCT", key: "10" },
      { label: "NOV", key: "11" },
      { label: "DEC", key: "12" }
    ]
  };
  saveBill = bill => {
    let tmp = this.state.bills;
    tmp.push(bill);
    this.setState({ bills: tmp });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require("../../assets/home-image.png")}
          />
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              onPress={() => {
                console.log(this.state);
                Actions.viewBill({ ...this.state });
              }}
            >
              <Text>GO TO LISTING</Text>
            </Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              onPress={() => {
                console.log(this.state);
                Actions.bill({
                  save: this.saveBill,
                  site: this.state.site,
                  device: this.state.device
                });
              }}
            >
              <Text>CREATE</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: "55%",
    height: "80%",
    paddingTop: "5%"
  },
  mainView: {
    padding: "10%"
  },
  imageView: {
    alignItems: "center",
    paddingTop: "5%"
  },
  button: {
    backgroundColor: "#7ec0ee",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    flex: 0.8,
    padding: "5%"
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
});

export default Home;
