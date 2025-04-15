import { StyleSheet } from 'react-native'
import { colors } from 'src/shared/config/colors'

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  button: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: colors.textHighlight,
  },
})
