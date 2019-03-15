import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Content, Button, Text } from "native-base";
import { Actions } from "react-native-router-flux";

class Home extends Component {
  state = {};

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
            <Button style={styles.button}>
              <Text>GO TO LISTING</Text>
            </Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              onPress={() => {
                Actions.bill();
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
