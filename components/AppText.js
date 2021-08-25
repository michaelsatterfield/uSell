import React from "react";
import { Text } from "react-native";

function AppText({ children }) {
  return (
    <div>
      <Text>{children}</Text>
    </div>
  );
}

export default AppText;
