import { StyleSheet } from 'react-native'
import { colors } from 'src/shared/config/colors'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.textHighlight,
    width: '100%',
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: 414,
    transform: [{ rotate: '-20deg' }],
  },
  titleScreen: {
    position: 'absolute',
    top: 50,
    width: '100%',
  },
  titleBlock: {
    paddingLeft: 20,
  },
  chevronLeft: {
    width: 24,
    height: 24,
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    marginBottom: 50,
    fontWeight: '700',
    color: colors.white,
    fontFamily: 'OpenSans_700Bold',
  },
  formRegisterWrapper: {
    paddingTop: 32,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.textHighlight,
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    fontWeight: '400',
    marginBottom: 50,
    color: colors.textPrimary,
  },
})
