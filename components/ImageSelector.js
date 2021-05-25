import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ImageSelector = ({ image, handlerSelectImage }) => {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async (event) => {
    let result = null;
    if (event === "gallery") {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true,
      });
    } else {
      result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    }

    if (!result.cancelled) {
      handlerSelectImage(result);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {image && (
        <Image
          source={{ uri: "data:image/jpeg;base64," + image }}
          style={{ width: 200, height: 200 }}
        />
      )}
      {!image && (
        <Image
          source={{
            uri: "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png",
          }}
          style={{ width: 400, height: 200 }}
        />
      )}
      <View style={styles.buttonsContainer}>
        <View style={styles.buttons}>
          <Button
            title='Pick Image from files'
            onPress={() => pickImage("gallery")}
            style={{ marginBottom: 20 }}
          />
        </View>
        <View style={styles.buttons}>
          <Button
            title='Pick Image from camera'
            onPress={() => pickImage("camera")}
            color='#C00000'
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    width: 200,
    marginTop: 10,
  },
  buttonsContainer: { marginTop: 20 },
});
export default ImageSelector;
