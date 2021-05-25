import React from "react";
import { StyleSheet, View, Image, Button } from "react-native";
const Main = (props) => {
  return (
    <View style={(styles.container, styles.mainContainer)}>
      <Image source={require("../media/pasto_logo.png")} />
      <View style={[{ width: 200, marginTop: 40 }]}>
        <Button
          title='Enter'
          onPress={() => props.navigation.navigate({ routeName: "Prediction" })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Main;
