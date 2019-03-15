import React, { Component } from "react";
import { View, Text, Button } from "native-base";
import GenerateForm from "react-native-form-builder";

import theme from "../../form-theme";
class Bill extends Component {
  state = {};
  login() {
    const formValues = this.formGenerator.getValues();
    console.log("FORM VALUES", formValues);
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View>
          <GenerateForm
            ref={c => {
              this.formGenerator = c;
            }}
            fields={fields}
            theme={theme}
          />
        </View>
        <View style={styles.submitButton}>
          <Button block onPress={() => this.login()}>
            <Text>Login</Text>
          </Button>
        </View>
      </View>
    );
  }
}
const styles = {
  wrapper: {
    flex: 1,
    marginTop: 150
  },
  submitButton: {
    paddingHorizontal: 10,
    paddingTop: 20
  }
};
const fields = [
  {
    type: "text",
    name: "name",
    required: true,
    icon: "clipboard",
    label: "Bill Name"
  },
  {
    type: "picker",
    name: "site",
    mode: "dropdown",
    icon: "clipboard",
    label: "Select Site",
    options: ["My Room", "My Father Room", "My Bathroom"]
  },
  {
    type: "picker",
    name: "device",
    mode: "dropdown",
    label: "Select Device",
    options: ["Bedroom Ac", "Bedroom Lights", "Bedroom Lamps", "Bathroom Lamps"]
  }
];
export default Bill;
