import React from "react";
import {
    StyleSheet,
    Text,
    View,

} from "react-native";

import Card from "./components/Card";

export default function App() {

  const handlePress = () => console.log("Text Clicked");



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



