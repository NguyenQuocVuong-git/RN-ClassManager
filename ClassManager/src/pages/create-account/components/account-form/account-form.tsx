import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { CreateAccountProps } from '@pages/create-account/type'
import { View } from 'react-native'
import { Button } from 'src/shared/ui/button/button'
import TextInputCustom from 'src/shared/ui/text-input/text-input'
import { CREATE_ACCOUNT_LABEL, CREATE_ACCOUNT_SCREEN } from '../../constants'

const AccountForm: React.FC = () => {
  const { control, handleSubmit } = useForm<CreateAccountProps>()

  return (
    <View className='mb-auto mt-auto flex items-center'>
      <Controller
        control={control}
        name='fullName'
        render={({ field: { onChange, value } }) => (
          <TextInputCustom
            label={CREATE_ACCOUNT_LABEL.NAME}
            value={value}
            setValue={onChange}
          />
        )}
      />

      <Controller
        control={control}
        name='email'
        render={({ field: { onChange, value } }) => (
          <TextInputCustom
            label={CREATE_ACCOUNT_LABEL.EMAIL}
            value={value}
            setValue={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name='password'
        render={({ field: { onChange, value } }) => (
          <TextInputCustom
            label={CREATE_ACCOUNT_LABEL.PASSWORD}
            value={value}
            setValue={onChange}
          />
        )}
      />
      <Button
        title={CREATE_ACCOUNT_SCREEN.BUTTON_CREATE}
        onPress={handleSubmit((data) => console.log(data))}
        className='mb-4 w-full text-text-highlight'
      />
    </View>
  )
}

export default AccountForm
