import { StyleSheet } from "react-native";
import { colors } from "src/shared/config/colors";

export const styles = StyleSheet.create({
  loginText: {
    fontSize: 13,
    color: colors.grayDark,
    margin: "auto",
    paddingBottom: 58
  },
  loginLink: {
    fontSize: 13,
    color: colors.textHighlight,
    textDecorationLine: "underline",
  },
});
