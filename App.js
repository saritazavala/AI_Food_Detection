import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Main from "./components/Main";
import Prediction from "./components/Prediction";
import Categories from "./components/Categories";
import Navigator from "./navigation/navigator";

export default function App() {
  return (
    // <View style={styles.container}>
    //   {/* <Main /> */}
    //   {/* <Prediction /> */}
    //   <Categories />
    //   <StatusBar style='auto' />
    // </View>

    <Navigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
