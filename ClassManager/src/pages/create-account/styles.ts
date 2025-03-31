import { StyleSheet } from "react-native";
import { colors } from "src/shared/config/colors";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.textHighlight,
      width: "100%",
      position: "relative",
    },
    description: {
      fontSize: 16,
      fontWeight: "400",
      marginBottom: 20,
      fontFamily: "OpenSans_400Regular",
    },
    titleScreen: {
      position: "absolute",
      top: 50,
      width: "100%",
    },
    titleBlock: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 24,
      marginBottom: 50,
      fontWeight: "700",
      color: colors.white,
      fontFamily: "OpenSans_700Bold",
    },
    headerImage: {
      width: "100%",
      height: 414,
      transform: [{ rotate: "-20deg" }],
    },
    chevronLeft: {
      width: 24,
      height: 24,
      marginBottom: 32,
    },
    formRegisterWrapper: {
      paddingTop: 32,
      paddingHorizontal: 20,
      backgroundColor: colors.white,
      width: "100%",
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
    },
    hello: {
      fontSize: 22,
      fontWeight: "700",
      color: colors.textHighlight,
      marginBottom: 4,
    },
    subHello: {
      fontSize: 13,
      fontWeight: "400",
      marginBottom: 50,
      color: colors.textPrimary,
    },
  });
  