import React from 'react'
import { Image, View, TouchableOpacity, Text } from 'react-native'
import { LoginLink } from './components/login-link/login-link'
import LoginSocial from './components/login-social/login-social'
import Or from './components/or/or'

type AuthScreenLayoutProps = {
  title: string
  subtitle: string
  description?: string
  onBackPress: () => void
  children: React.ReactNode
}

export const AuthScreenLayout: React.FC<AuthScreenLayoutProps> = ({
  title,
  subtitle,
  onBackPress,
  children,
  description,
}) => {
  return (
    <View className='relative w-full bg-text-highlight'>
      <Image
        source={require('assets/images/header-img.png') as number}
        className='h-103.5 w-full'
        style={{ transform: [{ rotate: '-20deg' }] }}
      />
      <View className='top-12.5 absolute w-full'>
        <View className='mb-12 pl-5'>
          <TouchableOpacity onPress={onBackPress}>
            <Image
              source={require('assets/images/chevron-left.png') as number}
              className='mb-8 h-6 w-6'
            />
          </TouchableOpacity>
          <Text className='mb-12.5 font-open-sans-bold text-2xl font-bold text-white'>
            {title}
          </Text>
        </View>

        <View className='w-full rounded-t-xl bg-white px-5 pt-8'>
          <Text className='mb-1 text-5.5 font-bold text-text-highlight'>
            {subtitle}
          </Text>
          <Text className='mb-12.5 text-3.25 font-normal'>{description}</Text>
          {children}
          <Or />
          <LoginSocial />
          <LoginLink />
        </View>
      </View>
    </View>
  )
}
