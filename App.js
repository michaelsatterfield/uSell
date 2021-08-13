
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TouchableHighlight, Button, Alert, Platform, StatusBar} from 'react-native';
import AnimatedButton from './components/AnimatedButton'


export default function App() {
const handlePress = () => console.log("Text Clicked");
  //only use console logs during development not production
  console.log("app executed")


  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Text numberOfLines={1} onPress={handlePress} style={styles.titleText}>uSell</Text>
      <Text>Michael Satterfield</Text>
      <TouchableHighlight onPress={()=> alert("Picture pressed")}>
        
      <Image
          // blurRadius={2}
          fadeDuration={1000}
          source={{
        width:200,
        height:300,
        borderRadius: 100,
          uri: "https://picsum.photos/200/300"
        }}/>
      {/*<Image source={require("./assets/favicon.png")}/>*/}
      </TouchableHighlight>
      <Button title={"Start"}
              onPress={()=> Alert.prompt("My Title", "My Message", text => console.log(text))}
              />
      <StatusBar style="auto" />
      <AnimatedButton/>
    </SafeAreaView>
  );
}
const containerStyle = {backgroundColor: "red"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f55252',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

  },
  titleText: {

    fontSize: 100,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#fff'
  }
});
