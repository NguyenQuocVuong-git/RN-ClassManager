import { StyleSheet } from "react-native";
import { colors } from "src/shared/config/colors";

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 24,
      marginTop: 12,
    },
    line: {
      flex: 1, 
      height: 1,
      backgroundColor: colors.backgroundMuted,
    },
    text: {
      color: colors.textSecondary,
      fontSize: 13,
      paddingHorizontal: 12, 
    },
  });