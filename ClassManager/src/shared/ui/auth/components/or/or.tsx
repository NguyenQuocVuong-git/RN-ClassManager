import React from 'react'
import { CREATE_ACCOUNT_SCREEN } from '@pages/create-account/constants'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { styles } from './styles'

const Or: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{CREATE_ACCOUNT_SCREEN.OR}</Text>
      <View style={styles.line} />
    </View>
  )
}

export default Or
