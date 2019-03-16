import React, { Component } from "react";
import { View, Text, Item, Icon, Input, Picker, Button } from "native-base";
import { ScrollView } from "react-native";
import { Actions } from "react-native-router-flux";

import BillRow from "../common/BillRow";
class Bill extends Component {
  state = {
    name: "",
    site: "",
    device: "",
    rows: [],
    rowCount: 0,
    billRow: []
  };
  componentWillMount() {
    this.setState({
      billRow: [
        {
          budget: "",
          unit: "",
          month: "",
          key: this.state.rowCount
        }
      ]
    });
  }
  componentDidMount() {
    let values = this.state.billRow.map(el => {
      if (el.key == this.state.rowCount) return el;
    });
    console.log(values);

    this.setState({
      rows: [
        <BillRow
          key={this.state.rowCount}
          index={this.state.rowCount}
          delete={this.deleteRow}
          change={this.onChangeBillRow}
          values={values[0]}
        />
      ],
      rowCount: this.state.rowCount + 1
    });
  }
  onChangeBillRow = (value, name, key) => {
    console.log(value, name, key);
    let tmp = this.state.billRow.map(el => {
      if (el.key == key) {
        el[name] = value;
      }
      return el;
    });
    console.log(tmp);
    this.setState({ billRow: tmp });
  };
  deleteRow = index => {
    if (this.state.rows.length == 1) {
      console.log("cannot delete");
    } else {
      let tmp = this.state.rows.filter(el => {
        if (el.key == index) return false;
        return true;
      });
      let tmp2 = this.state.billRow.filter(el => {
        if (el.key == index) return false;
        return true;
      });
      this.setState({ rows: tmp, billRow: tmp2 });
    }
  };
  render() {
    return (
      <View style={styles.wrapper}>
        <View>
          <Item style={styles.allBg}>
            <Icon active name="clipboard" style={styles.allColor} />
            <Input
              placeholder="Bill Name"
              style={styles.allColor}
              onChangeText={text => this.setState({ name: text })}
              value={this.state.name}
            />
          </Item>
          <Item style={styles.allBg}>
            <Icon active name="help" style={styles.allColor} />
            <Picker
              mode="dropdown"
              Icon={<Icon name="arrow-dropdown-circle" />}
              style={{ width: undefined, ...styles.allColor }}
              selectedValue={this.state.site}
              onValueChange={value => this.setState({ site: value })}
            >
              <Picker.Item label="Select Site" value="" />
              {this.props.site.map(el => (
                <Picker.Item label={el.label} value={el.key} />
              ))}
            </Picker>
          </Item>
          <Item style={styles.allBg}>
            <Icon active name="wifi" style={styles.allColor} />
            <Picker
              mode="dropdown"
              Icon={<Icon name="arrow-dropdown-circle" />}
              style={{ width: undefined, ...styles.allColor }}
              selectedValue={this.state.device}
              onValueChange={value => this.setState({ device: value })}
            >
              <Picker.Item label="Select Device" value="" />
              {this.props.device.map(el => (
                <Picker.Item label={el.label} value={el.key} />
              ))}
            </Picker>
          </Item>

          <View style={{ flex: 1, flexDirection: "row", paddingTop: "5%" }}>
            <View style={{ flex: 0.1 }}>
              <Text />
            </View>
            <View style={{ flex: 0.35, alignItems: "center" }}>
              <Text style={styles.allColor}>Select Month</Text>
            </View>
            <View style={{ flex: 0.2, alignItems: "center" }}>
              <Text style={styles.allColor}>Unit Rate</Text>
            </View>
            <View style={{ flex: 0.25, alignItems: "center" }}>
              <Text style={styles.allColor}>Budget</Text>
            </View>
            <View style={{ flex: 0.1 }}>
              <Text />
            </View>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1 }}>
            {this.state.rows.map(el => el)}
          </ScrollView>
        </View>
        <View style={{ flex: 0.2 }}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 0.5 }}>
              <View style={{ alignSelf: "center", flex: 0.8 }}>
                <Button
                  iconLeft
                  transparent
                  light
                  onPress={() => {
                    let tmp2 = this.state.billRow;
                    tmp2.push({
                      budget: "",
                      unit: "",
                      month: "",
                      key: this.state.rowCount
                    });
                    this.setState({
                      billRow: tmp2
                    });
                    let values = this.state.billRow.filter(el => {
                      if (el.key == this.state.rowCount) return true;
                    });
                    let tmp = this.state.rows;
                    tmp.push(
                      <BillRow
                        key={this.state.rowCount}
                        index={this.state.rowCount}
                        delete={this.deleteRow}
                        change={this.onChangeBillRow}
                        values={values[0]}
                      />
                    );

                    this.setState({
                      rows: tmp,
                      rowCount: this.state.rowCount + 1
                    });
                    console.log(this.state);
                  }}
                >
                  <Icon name="add" style={styles.allColor} />
                  <Text style={styles.allColor}>Add More</Text>
                </Button>
              </View>
            </View>
            <View style={{ flex: 0.5 }}>
              <View
                style={{
                  flex: 0.8,
                  alignSelf: "center"
                }}
              >
                <Button
                  iconLeft
                  transparent
                  light
                  onPress={() => {
                    console.log(this.props);
                    this.props.save(this.state);
                    Actions.pop();
                  }}
                >
                  <Icon name="checkbox" active style={styles.allColor} />
                  <Text style={styles.allColor}>Save</Text>
                </Button>
              </View>
            </View>
          </View>
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

export default Bill;
