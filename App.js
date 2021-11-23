import React from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    Alert,
    Platform,
    StatusBar,
    Dimensions, TextComponent,
} from "react-native";
//to get dimensions of screen in either portrait or landscape
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import WelcomeScreen from "./screens folder/WelcomeScreen";
import Card from "./components/Card";

import AppButton from "./components/AppButton";

import ViewImageScreen from "./screens folder/ViewImageScreen";


import AnimatedButton from "./components/AnimatedButton";

export default function App() {
  // const { landscape } = useDeviceOrientation();
  //
  const handlePress = () => console.log("Text Clicked");
  // //only use console logs during development not production
  // console.log("app executed");

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



