import React from "react";
import {
    StyleSheet,
    Text,
    View,

} from "react-native";
//to get dimensions of screen in either portrait or landscape
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import { MaterialCommunityIcons } from "@expo/vector-icons";


import Card from "./components/Card";
import AnimatedButton from "./components/AnimatedButton";

export default function App() {

  const handlePress = () => console.log("Text Clicked");
  // //only use console logs during development not production


  return (

      <View
        style={{
          backgroundColor: "#f8f4f4",
          padding: 20,
          paddingTop: 100
        }}>
      <Card
          image={require("./app/assets/jacket.jpg")}
          subTitle="$100"
          title="Red jacket for sale"
      />
      </View>

  );
}



