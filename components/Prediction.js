import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
// import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import * as tf from "@tensorflow/tfjs";
import { bundleResourceIO, decodeJpeg } from "@tensorflow/tfjs-react-native";
import { Base64Binary } from "../utils/utils";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePick from "expo-image-picker";
import * as jpeg from "jpeg-js";
import * as mobilenet from "@tensorflow-models/mobilenet";
import { fetch } from "@tensorflow/tfjs-react-native";
import ImagePicker from "./ImageSelector";
import { cropPicture } from "./image-helper";

const BITMAP_DIMENSION = 224;
const TENSORFLOW_CHANNEL = 3;
const Prediction = (props) => {
  const [isTfReady, setTfReady] = useState(false); // gets and sets the Tensorflow.js module loading status
  const [model, setModel] = useState(null); // gets and sets the locally saved Tensorflow.js model
  const [image, setImage] = useState(null); // gets and sets the image selected from the user
  const [predictions, setPredictions] = useState(false); // gets and sets the predicted value from the model
  const [error, setError] = useState(false); // gets and sets any errors
  // const imageRef = useRef();
  useEffect(() => {
    (async () => {
      await tf.ready(); // wait for Tensorflow.js to get ready

      setTfReady(true); // set the state
      // // bundle the model files and load the model:
      const model = require("../assets/model.json");

      const weights = require("../assets/weights.bin");

      const loadedModel = await tf.loadGraphModel(
        bundleResourceIO(model, weights)
      );

      setModel(loadedModel); // load the model to the state
      // getPermissionAsync(); // get the permission for camera roll access for iOS users
    })();
  }, []);

  async function handlerSelectImage(source) {
    try {
      // const croppedData = await cropPicture(source, 300);
      const decodedImage = await convertBase64ToTensor(source.base64);
      const prediction = await startPrediction(model, decodedImage);
      console.log(JSON.stringify(prediction));
      setImage(source.base64);
    } catch (error) {
      setError(error);
    }
  }

  const convertBase64ToTensor = async (base64) => {
    try {
      const imgBuffer = tf.util.encodeString(base64, "base64").buffer;
      const newData = new Uint8Array(imgBuffer);
      const imageTensor = decodeJpeg(newData);
      return imageTensor;
    } catch (error) {
      console.log("Could not convert base64 string to tesor", error);
    }
  };

  const startPrediction = async (model, tensor) => {
    try {
      // predict against the model
      console.log(tensor);
      const output = await model.predict(tensor);
      // return typed array
      return output.dataSync();
    } catch (error) {
      console.log("Error predicting from tesor image", error);
    }
  };

  return (
    <View style={styles.mainContainer}>
      {model && (
        <View>
          <ImagePicker
            image={image}
            setImage={setImage}
            handlerSelectImage={handlerSelectImage}
          />
          <View style={styles.container}>
            <Button
              title='Categories'
              color={"orange"}
              onPress={() =>
                props.navigation.navigate({ routeName: "Categories" })
              }
            />
          </View>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 100,
    alignItems: "center",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Prediction;
