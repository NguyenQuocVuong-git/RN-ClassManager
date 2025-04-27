import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { SCREEN } from 'src/shared/constants/screen'
import { RootStackParamList } from 'src/shared/type/type'
import { AuthScreenLayout } from 'src/shared/ui/auth/auth-screen-layout'
import LoginForm from './components/login-form/login-form'
import { LOGIN_ACCOUNT_SCREEN } from './constants'

const LoginAccount: React.FC = () => {
  const navigate = useNavigation<StackNavigationProp<RootStackParamList>>()

  const handleBackToBeginScreen = () => {
    navigate.navigate(SCREEN.BEGIN)
  }

  return (
    <AuthScreenLayout
      title={LOGIN_ACCOUNT_SCREEN.LOGIN}
      subtitle={LOGIN_ACCOUNT_SCREEN.TITLE}
      description={LOGIN_ACCOUNT_SCREEN.SUB_TITLE}
      onBackPress={() => handleBackToBeginScreen()}
    >
      <LoginForm />
    </AuthScreenLayout>
  )
}

export default LoginAccount
