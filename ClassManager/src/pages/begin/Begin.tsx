import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { RegisterButton } from 'src/features/auth/ui/register-button/register-button'
import { SCREEN } from 'src/shared/constants/screen'
import { RootStackParamList } from 'src/shared/type/type'
import { LoginLink } from 'src/shared/ui/auth/components/login-link/login-link'
import { Logo } from 'src/shared/ui/logo/logo'
import { BEGIN_SCREEN } from './constant'

const Begin: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  const handleRedirectToCreateAccount = () => {
    navigation.navigate(SCREEN.CREATE_ACCOUNT)
  }

  return (
    <View className='mb-auto mt-auto flex items-center p-6'>
      <Logo />
      <Text className='mb-4 text-center font-open-sans text-base font-normal'>
        {BEGIN_SCREEN.TITLE}
      </Text>
      <RegisterButton onPress={handleRedirectToCreateAccount} />
      <LoginLink />
    </View>
  )
}

export default Begin
