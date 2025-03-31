import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RegisterButton } from "src/features/auth/ui/register-button/register-button";
import { LoginLink } from "src/features/auth/ui/login-link/login-link";
import { Logo } from "src/shared/ui/logo/Logo";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

type RootStackParamList = {
  CreateAccount: undefined; // Nếu màn hình không có tham số, dùng `undefined`
};

const Begin: React.FC = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleRedirectToCreateAccount = () => {
    navigation.navigate("CreateAccount");
  }

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.description}>Tiếng Anh giao tiếp tại Huế</Text>
      <RegisterButton onPress={handleRedirectToCreateAccount} /> 
      <LoginLink onPress={() => {}} />
    </View>
  );
};


export default Begin;
