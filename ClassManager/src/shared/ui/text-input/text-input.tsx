import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native-paper'
import { colors } from 'src/shared/config/colors'

interface TextInputProps {
  value: string
  label: string
  setValue: (value: string) => void
  isPassword?: boolean
  isShowPassword?: boolean
  className?: string
  error?: boolean
}

export const TextInputCustom: React.FC<TextInputProps> = ({
  value,
  label,
  setValue,
  isPassword = false,
  isShowPassword = false,
  className,
  error = false,
}) => {
  const [stateProps, setStateProps] = useState({
    colorBorderDefault: colors.border,
    showPass: isShowPassword,
  })

  const { colorBorderDefault, showPass } = stateProps

  const handleFocus = () =>
    setStateProps((prev) => ({
      ...prev,
      colorBorderDefault: error ? colors.danger : colors.textHighlight,
    }))

  const handleBlur = () =>
    setStateProps((prev) => ({ ...prev, colorBorderDefault: colors.border }))

  const handleShowPass = () =>
    setStateProps((prev) => ({ ...prev, showPass: !prev.showPass }))

  useEffect(() => {
    setStateProps((prev) => ({ ...prev, showPass: isShowPassword }))
  }, [isShowPassword])

  return (
    <View className={`mb-6.25 w-full ${className}`}>
      <TextInput
        label={label}
        value={value}
        secureTextEntry={isPassword && showPass}
        mode='outlined'
        theme={{ colors: { primary: colorBorderDefault }, roundness: 4 }}
        onChangeText={setValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        right={
          isPassword && <TextInput.Icon icon='eye' onPress={handleShowPass} />
        }
      />
    </View>
  )
}
