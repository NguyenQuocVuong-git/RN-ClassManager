import { StyleSheet } from "react-native";
import { colors } from "src/shared/config/colors";

export const styles = StyleSheet.create({
    loginText: {
      fontSize: 13,
      color: colors.grayDark,
      marginTop: 24,
    },
    loginLink: {
      fontSize: 13,
      color: colors.textHighlight,
      textDecorationLine: "underline",
    },
  });
  