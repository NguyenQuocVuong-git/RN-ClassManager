import { StyleSheet } from "react-native";
import { colors } from "src/shared/config/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.textHighlight,
    width: "100%",
    position: "relative",
  },
  headerImage: {
    width: "100%",
    height: 414,
    transform: [{ rotate: "-20deg" }],
  },
});
