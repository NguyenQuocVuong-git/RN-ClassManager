import React from 'react'
import { BUTTON_REGISTER } from 'src/shared/constants/constants'
import { Button } from 'src/shared/ui/button/button'

interface RegisterButtonProps {
  onPress: () => void
}

export const RegisterButton: React.FC<RegisterButtonProps> = ({ onPress }) => {
  return (
    <Button
      title={BUTTON_REGISTER.TITLE_BUTTON}
      onPress={onPress}
      className='mb-6 w-percent90 rounded bg-text-highlight'
      textStyle='text-base'
    />
  )
}
