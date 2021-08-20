import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import AnimatedButton from "./components/AnimatedButton";
//to get dimensions of screen in either portrait or landscape
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import WelcomeScreen from "./screens folder/WelcomeScreen";

import ViewImageScreen from "./screens folder/ViewImageScreen";

export default function App() {
  const { landscape } = useDeviceOrientation();

  const handlePress = () => console.log("Text Clicked");
  //only use console logs during development not production
  console.log("app executed");

  return <ViewImageScreen />;
}

// ********************************original_section******************************8***********

//     <SafeAreaView style={[styles.container, containerStyle]}>
//       <Text numberOfLines={1} onPress={handlePress} style={styles.titleText}>uSell</Text>
//       <Text>Michael Satterfield</Text>
//       <View style={{
//         backgroundColor: 'goldenrod',
//         width: '100%',
//         height: landscape ? '100%' : '30%'

//       }}></View>
//       {/* <TouchableHighlight onPress={()=> alert("Picture pressed")}>

//       <Image
//           // blurRadius={2}
//           fadeDuration={1000}
//           source={{
//         width:200,
//         height:300,
//         borderRadius: 100,
//           uri: "https://picsum.photos/200/300"
//         }}/>
//       <Image source={require("./assets/favicon.png")}/>
//       </TouchableHighlight> */}
//       <Button style={styles.container} title={"Start"}
//               onPress={()=> Alert.prompt("My Title", "My Message", text => console.log(text))}
//               />
//       <StatusBar style="auto" />
//       <AnimatedButton/>
//     </SafeAreaView>
//   );
// }
// const containerStyle = {backgroundColor: "red"}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f55252',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

//   },
//   titleText: {

//     fontSize: 100,
//     fontWeight: 'bold',
//     fontFamily: 'Roboto',
//     color: '#fff'
//   }
// })
