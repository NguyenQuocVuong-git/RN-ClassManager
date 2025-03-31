import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Text } from "react-native-paper";

const Or: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>Hoặc</Text>
      <View style={styles.line} />
    </View>
  );
};

export default Or;