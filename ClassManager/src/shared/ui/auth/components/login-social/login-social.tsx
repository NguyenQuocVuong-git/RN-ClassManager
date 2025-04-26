import React from 'react'
import { View } from 'react-native'
import { SocialButton } from 'src/shared/ui/social-button/social-button'

const LoginSocial: React.FC = () => (
  <View className='mb-6 flex-row justify-center gap-4'>
    <SocialButton
      key='google'
      onPress={() => console.log('login by google')}
      icon={require('assets/images/google-icon.png') as number}
    />
    <SocialButton
      key='facebook'
      onPress={() => console.log('login by fb')}
      icon={require('assets/images/fb-icon.png') as number}
    />
    <SocialButton
      key='apple'
      onPress={() => console.log('login by apple')}
      icon={require('assets/images/apple-icon.png') as number}
    />
  </View>
)

export default LoginSocial
