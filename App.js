import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";

class Screen1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen 1</Text>
      </View>
    );
  }
}

class Screen2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen 2</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  "Screen 1": Screen1,
  "Screen 2": Screen2
});

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
