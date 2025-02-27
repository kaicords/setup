import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import MatchmakingScreen from "../screens/MatchmakingScreen";
import UserInfoScreen from "../screens/UserInfoScreen";
import ContactsScreen from "../screens/ContactsScreen";
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Info" component={UserInfoScreen} />
        <Stack.Screen name="Match" component={MatchmakingScreen} />
        <Stack.Screen name="Contacts" component={ContactsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
