import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-paper'
import { colors } from 'src/shared/config/colors'

interface TextInputProps {
  value: string
  label: string
  setValue: (value: string) => void
  isPassword?: boolean
  isShowPassword?: boolean
}

const TextInputCustom: React.FC<TextInputProps> = ({
  value,
  label,
  setValue,
  isPassword = false,
  isShowPassword = false,
}) => {
  const [stateProps, setStateProps] = useState({
    colorBorderDefault: colors.border,
    showPass: isShowPassword,
  })

  const { colorBorderDefault, showPass } = stateProps

  const handleFocus = () =>
    setStateProps({ ...stateProps, colorBorderDefault: colors.textHighlight })

  const handleBlur = () =>
    setStateProps({ ...stateProps, colorBorderDefault: colors.border })

  const handleShowPass = () =>
    setStateProps((prev) => ({ ...prev, showPass: !prev.showPass }))

  useEffect(() => {
    setStateProps((prev) => ({ ...prev, showPass: isShowPassword }))
  }, [isShowPassword])

  return (
    <TextInput
      className='mb-6.25 w-full bg-white text-xs font-normal text-text-highlight'
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
  )
}
export default TextInputCustom
