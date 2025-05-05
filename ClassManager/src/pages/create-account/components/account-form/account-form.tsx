import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { CreateAccountProps } from '@pages/create-account/type'
import { Text, View } from 'react-native'
import { register } from 'src/features/auth/api/register'
import { Button } from 'src/shared/ui/button/button'
import { TextInputCustom } from 'src/shared/ui/text-input/text-input'
import {
  CREATE_ACCOUNT_LABEL,
  CREATE_ACCOUNT_SCREEN,
  ERROR_MESSAGE,
} from '../../constants'

const AccountForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountProps>()

  const onSubmit = async (data: CreateAccountProps) => {
    console.log("🚀 ~ onSubmit ~ data:", data)
    // const res = await register(data)
    // console.log('res', res)
  }

  return (
    <View className='mb-auto mt-12'>
      <Controller
        control={control}
        name='fullName'
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInputCustom
            label={CREATE_ACCOUNT_LABEL.NAME}
            value={value}
            setValue={onChange}
            className='mb-6'
            error={errors.fullName ? true : false}
          />
        )}
      />
      {errors.fullName && (
        <Text className='-mt-2 mb-2 text-red-500'>*{ERROR_MESSAGE.NAME}</Text>
      )}

      <Controller
        control={control}
        name='email'
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInputCustom
            label={CREATE_ACCOUNT_LABEL.EMAIL}
            value={value}
            setValue={onChange}
            className='mb-6'
            error={errors.email ? true : false}
          />
        )}
      />
      {errors.email && (
        <Text className='-mt-2 mb-2 text-red-500'>*{ERROR_MESSAGE.EMAIL}</Text>
      )}
      <Controller
        control={control}
        name='password'
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInputCustom
            label={CREATE_ACCOUNT_LABEL.PASSWORD}
            value={value}
            setValue={onChange}
            isPassword
            className='mb-6'
            error={errors.email ? true : false}
          />
        )}
      />
      {errors.password && (
        <Text className='-mt-2 mb-2 text-red-500'>
          *{ERROR_MESSAGE.PASSWORD}
        </Text>
      )}
      <Button
        title={CREATE_ACCOUNT_SCREEN.BUTTON_CREATE}
        onPress={() => handleSubmit(onSubmit)()}
        className='mt-12 w-full bg-text-highlight'
      />
    </View>
  )
}

export default AccountForm
