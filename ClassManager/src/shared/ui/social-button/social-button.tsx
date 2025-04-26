import React from 'react'
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'

interface SocialButtonProps {
  icon: ImageSourcePropType
  onPress: () => void
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  icon,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text className='h-12 w-12 rounded-150'>
        <Image source={icon} />
      </Text>
    </TouchableOpacity>
  )
}
