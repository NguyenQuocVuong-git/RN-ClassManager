import React from 'react'
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import { styles } from './styles'

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
      <Text style={styles.socialButton}>
        <Image source={icon} />
      </Text>
    </TouchableOpacity>
  )
}
