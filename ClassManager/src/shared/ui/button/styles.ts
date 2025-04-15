import { StyleSheet } from 'react-native'
import { colors } from 'src/shared/config/colors'

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.backgroundButton,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  disabled: {
    backgroundColor: colors.backgroundDisabled,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
})
