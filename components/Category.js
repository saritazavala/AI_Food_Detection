import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Category = ({ title, uri }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 140,
    height: 140,
    marginLeft: 20,
    marginRight: 30,
    borderRadius: 100,
  },

  textContainer: { alignItems: "center", marginTop: 4 },

  container: { marginBottom: 20 },
});
export default Category;
