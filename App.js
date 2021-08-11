import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,Image } from 'react-native';
// import AnimatedButton from './components/AnimatedButton'


export default function App() {
const handlePress = () => console.log("Text Clicked");
  //only use console logs during development not production
  console.log("app executed")


  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress} style={styles.titleText}>uSell</Text>
      <Text>Michael Satterfield</Text>
      <Image
          blurRadius={2}
          fadeDuration={1000}
          source={{
        width:200,
        height:300,
        borderRadius: 100,
          uri: "https://picsum.photos/200/300"

        }}/>
      {/*<Image source={require("./assets/favicon.png")}/>*/}
      <StatusBar style="auto" />
      {/*<AnimatedButton/>*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f55252',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {

    fontSize: 100,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#fff'
  }
});
