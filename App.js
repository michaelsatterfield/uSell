import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image

} from "react-native";



import Card from "./components/Card";
import AnimatedButton from "./components/AnimatedButton";
// import {Image} from "react-native-web";

export default function App() {

  const handlePress = () => console.log("Text Clicked");



  return (
      <View
        style={{
          // backgroundColor: "#f8f4f4",
          // padding: 20,
          // paddingTop: 100
             alignItems: 'center',
              justifyContent: 'center',
            flex:1
        }}>


          <Image
          style={{


              height: 200,
              width: 300



          }}
          source={require('./app/assets/NewREAPLogo1-26-17.png')}
          />



      {/*<Card*/}
      {/*    image={require("./app/assets/jacket.jpg")}*/}
      {/*    subTitle="$100"*/}
      {/*    title="Red jacket for sale"*/}
      {/*/>*/}
      </View>

  );
}



