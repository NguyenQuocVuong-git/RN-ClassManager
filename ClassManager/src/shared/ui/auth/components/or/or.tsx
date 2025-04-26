import React from 'react'
import { CREATE_ACCOUNT_SCREEN } from '@pages/create-account/constants'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

const Or: React.FC = () => {
  return (
    <View className='mb-6 mt-3 flex-row items-center'>
      <View className='h-1 flex-1 bg-background-muted' />
      <Text className='py-3 text-3.25 text-text-secondary'>
        {CREATE_ACCOUNT_SCREEN.OR}
      </Text>
      <View className='h-1 flex-1 bg-background-muted' />
    </View>
  )
}

export default Or
