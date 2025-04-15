import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { LoginLink } from 'src/features/auth/ui/login-link/login-link'
import { RegisterButton } from 'src/features/auth/ui/register-button/register-button'
import { SCREEN } from 'src/shared/constants/screen'
import { RootStackParamList } from 'src/shared/type/type'
import { Logo } from 'src/shared/ui/logo/Logo'
import { BEGIN_SCREEN } from './constant'
import { styles } from './styles'

const Begin: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  const handleRedirectToCreateAccount = () => {
    navigation.navigate(SCREEN.CREATE_ACCOUNT)
  }

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.description}>{BEGIN_SCREEN.TITLE}</Text>
      <RegisterButton onPress={handleRedirectToCreateAccount} />
      <LoginLink />
    </View>
  )
}

export default Begin
