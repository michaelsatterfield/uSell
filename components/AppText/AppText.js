import React from "react";
import { Text } from "react-native";

import styles from './styles';



//Global use Text..Can be used for Headers or Whatever
//destructed
function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}



//stylesheet



export default AppText;
