import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Start from "../components/Main";
import Prediction from "../components/Prediction";
import Categories from "../components/Categories";

const Navigator = createStackNavigator({
  "Pasto! Italian Food": Start,
  Prediction: Prediction,
  Categories: Categories,
});

export default createAppContainer(Navigator);
