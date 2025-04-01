import React from "react";
import { Text } from "react-native";
import { LOGIN_LINK } from "../../constants";
import { styles } from "./styles";

interface LoginLinkProps {
  onPress: () => void;
}

export const LoginLink: React.FC<LoginLinkProps> = ({ onPress }) => {
  return (
    <Text style={styles.loginText}>
      {LOGIN_LINK.CERATE_ACCOUNT} {"  "}
      <Text style={styles.loginLink} onPress={onPress}>
        {LOGIN_LINK.LOGIN}
      </Text>
    </Text>
  );
};
