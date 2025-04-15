import React from 'react'
import { Image } from 'react-native'
import { styles } from './styles'

export const Logo = () => {
  return (
    <Image
      source={require('assets/images/logo-no-bg.png')}
      style={styles.logo}
    />
  )
}
