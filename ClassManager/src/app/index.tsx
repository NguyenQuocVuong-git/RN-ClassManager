import Begin from '@pages/begin/begin'
import CreateAccount from '@pages/create-account/CreateAccount'
import LoginAccount from '@pages/login-account/LoginAccount'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider as PaperProvider } from 'react-native-paper'
import { theme } from '../../theme.js'

const Stack = createStackNavigator()

export default function App() {
  return (
    <PaperProvider theme={theme}>
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
