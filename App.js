import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
let x =1
  //only use console logs during development not production
  console.log("app executed")


  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>uSell</Text>
      <Text>Michael Satterfield</Text>
      <StatusBar style="auto" />
    </View>
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
