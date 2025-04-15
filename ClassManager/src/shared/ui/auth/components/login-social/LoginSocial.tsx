import React from 'react'
import { View } from 'react-native'
import { SocialButton } from 'src/shared/ui/social-button/social-button'
import { styles } from './styles'

const socialButtons = [
  {
    icon: require('assets/images/google-icon.png'),
    onPress: () => console.log('login by google'),
  },
  {
    icon: require('assets/images/fb-icon.png'),
    onPress: () => console.log('login by fb'),
  },
  {
    icon: require('assets/images/apple-icon.png'),
    onPress: () => console.log('login by apple'),
  },
]

const LoginSocial: React.FC = () => (
  <View style={styles.wrapper}>
    {socialButtons.map((btn, index) => (
      <SocialButton key={index} onPress={btn.onPress} icon={btn.icon} />
    ))}
  </View>
)

export default LoginSocial
