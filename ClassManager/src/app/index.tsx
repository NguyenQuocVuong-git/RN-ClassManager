import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "../../theme.js";
import Begin from "@pages/Begin";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Begin"
            component={Begin}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
    </PaperProvider>
  );
}
