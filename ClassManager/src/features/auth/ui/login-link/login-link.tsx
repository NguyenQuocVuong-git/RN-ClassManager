import React from "react";
import { Text } from "react-native";
import { LOGIN_LINK } from "../../constants";
import { styles } from "./styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "src/shared/type/type";

export const LoginLink: React.FC = () => {

   const navigation = useNavigation<NavigationProp<RootStackParamList>>();

   const handleRedirectLoginPage = () => {
      navigation.navigate("LoginAccount");
   }
  
  return (
    <Text style={styles.loginText}>
      {LOGIN_LINK.CERATE_ACCOUNT} {"  "}
      <Text style={styles.loginLink} onPress={handleRedirectLoginPage}>
        {LOGIN_LINK.LOGIN}
      </Text>
    </Text>
  );
};
