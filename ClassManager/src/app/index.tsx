import Begin from '@pages/begin/begin'
import CreateAccount from '@pages/create-account/CreateAccount'
import LoginAccount from '@pages/login-account/LoginAccount'
import { createStackNavigator } from '@react-navigation/stack'
import { View } from 'react-native'
import { Provider as PaperProvider, Text } from 'react-native-paper'
import '../../global.css'
import { theme } from '../../theme.js'

const Stack = createStackNavigator()

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View className='flex-1 items-center justify-center bg-blue-500 p-4 text-white'>
        <Text className='text-2xl font-bold text-white'>Test TailwindCSS</Text>
      </View>

      <Stack.Navigator>
        <Stack.Screen
          name='Begin'
          component={Begin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='CreateAccount'
          component={CreateAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='LoginAccount'
          component={LoginAccount}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </PaperProvider>
  )
}
