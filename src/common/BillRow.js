import React, { Component } from "react";
import { View, Item, Icon, Input, Picker } from "native-base";

class BillRow extends Component {
  state = {
    budget: "",
    unit: "",
    month: ""
  };
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row", paddingTop: "10%" }}>
        <View style={{ flex: 0.1 }}>
          <Icon active name="clipboard" style={styles.allColor} />
        </View>
        <View style={{ flex: 0.35 }}>
          <Item style={styles.allBg}>
            <Picker
              mode="dropdown"
              Icon={<Icon name="arrow-dropdown-circle" />}
              style={styles.allColor}
              selectedValue={this.props.values.month}
              onValueChange={value =>
                this.props.change(value, "month", this.props.values.key)
              }
            >
              <Picker.Item label="Select Month" value="" />
              <Picker.Item label="JAN" value="1" />
              <Picker.Item label="FEB" value="2" />
              <Picker.Item label="MAR" value="3" />
              <Picker.Item label="APR" value="4" />
              <Picker.Item label="MAY" value="5" />
              <Picker.Item label="JUN" value="6" />
              <Picker.Item label="JUL" value="7" />
              <Picker.Item label="AUG" value="8" />
              <Picker.Item label="SEP" value="9" />
              <Picker.Item label="OCT" value="10" />
              <Picker.Item label="NOV" value="11" />
              <Picker.Item label="DEC" value="12" />
            </Picker>
          </Item>
        </View>
        <View style={{ flex: 0.2, alignItems: "center" }}>
          <Item style={styles.allBg}>
            <Input
              placeholder="Unit"
              style={styles.allColor}
              keyboardType="numeric"
              onChangeText={text =>
                this.props.change(text, "unit", this.props.values.key)
              }
              value={this.props.values.unit}
            />
          </Item>
        </View>
        <View style={{ flex: 0.25, alignItems: "center" }}>
          <Item style={styles.allBg}>
            <Input
              placeholder="Budget"
              style={styles.allColor}
              keyboardType="numeric"
              onChangeText={text =>
                this.props.change(text, "budget", this.props.values.key)
              }
              value={this.props.values.budget}
            />
          </Item>
        </View>
        <View style={{ flex: 0.1 }}>
          <Icon
            active
            name="trash"
            style={{ color: "#7ec0ee" }}
            onPress={() => {
              this.props.delete(this.props.index);
            }}
          />
        </View>
      </View>
    );
  }
}
const styles = {
  wrapper: {
    flex: 1,
    padding: "5%"
  },
  allColor: {
    color: "#7ec0ee"
  },
  allBg: {
    borderBottomColor: "#7ec0ee"
  }
};
export default BillRow;
