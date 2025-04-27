import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { LOGIN_ACCOUNT_LABEL } from '@pages/login-account/constants'
import { LoginAccountProps } from '@pages/login-account/type'
import { View } from 'react-native'
import { Button } from 'src/shared/ui/button/button'
import { TextInputCustom } from 'src/shared/ui/text-input/text-input'

const LoginForm: React.FC = () => {
  const { control, handleSubmit } = useForm<LoginAccountProps>()
  return (
    <View className='mb-auto mt-12 flex items-center'>
      <Controller
        control={control}
        name='email'
        render={({ field: { onChange, value } }) => (
          <TextInputCustom
            label={LOGIN_ACCOUNT_LABEL.EMAIL}
            value={value}
            setValue={onChange}
            className='mb-4 w-full'
          />
        )}
      />

      <Controller
        control={control}
        name='password'
        render={({ field: { onChange, value } }) => (
          <TextInputCustom
            label={LOGIN_ACCOUNT_LABEL.PASSWORD}
            value={value}
            setValue={onChange}
            className='mb-6 w-full'
            isPassword
          />
        )}
      />

      <Button
        title={LOGIN_ACCOUNT_LABEL.BUTTON_LOGIN}
        onPress={handleSubmit((data) => console.log(data))}
        className='mt-12 w-full bg-text-highlight'
      />
    </View>
  )
}

export default LoginForm
