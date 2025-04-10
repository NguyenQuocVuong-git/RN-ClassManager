import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Text } from "react-native-paper";
import { CREATE_ACCOUNT_SCREEN } from "@pages/create-account/constants";
// import { CREATE_ACCOUNT_SCREEN } from "../../../../../pages/create-account/constants";

const Or: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{CREATE_ACCOUNT_SCREEN.OR}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default Or;