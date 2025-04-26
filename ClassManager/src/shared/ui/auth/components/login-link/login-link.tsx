import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Text } from 'react-native'
import { RootStackParamList } from 'src/shared/type/type'
import { LOGIN_LINK } from '../../../../constants/constants'

export const LoginLink: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  const handleRedirectLoginPage = () => {
    navigation.navigate('LoginAccount')
  }

  return (
    <Text className='pb-14.5 m-auto text-3.25 text-gray-dark'>
      {LOGIN_LINK.CERATE_ACCOUNT} {'  '}
      <Text
        className='text-3.25 text-text-highlight underline'
        onPress={handleRedirectLoginPage}
      >
        {LOGIN_LINK.LOGIN}
      </Text>
    </Text>
  )
}
