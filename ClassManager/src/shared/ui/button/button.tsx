import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

interface ButtonProps {
  title: string
  onPress: () => void
  disabled?: boolean
  className?: string
  textStyle?: string
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled = false,
  className,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`items-center rounded-lg bg-background-button px-6 py-3 ${disabled && 'bg-background-disabled'} ${className}`}
    >
      <Text className={`text-base font-medium text-white ${textStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
