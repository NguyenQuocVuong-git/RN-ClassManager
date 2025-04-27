import React from 'react'
import { Image } from 'react-native'

export const Logo = () => {
  return (
    <Image
      source={require('assets/images/logo-no-bg.png') as number}
      className='h-100 w-100 mb-0 mt-44'
    />
  )
}
