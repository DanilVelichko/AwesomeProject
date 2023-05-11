import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import React from "react";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import PostsScreen from "./Screens/PostsScreen/PostsScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen/CreatePostsScreen";
import loadAppFonts from "./utils/services/loadAppFonts";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";

const Stack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export default function App() {


  const isAppReady = loadAppFonts();

  if (!isAppReady) {
    return null;
  }
  
  return (
    <>
       <NavigationContainer>
        {/* <View style={styles.container} > */}
        <StatusBar backgroundColor="#E5E5E5" barStyle="dark-content" />
        <Stack.Navigator initialRouteName="Registration">
          <Stack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ title: "Registration", headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: "Login", headerShown: false }}
          />
          <Stack.Screen
            name="CreatePosts"
            component={CreatePostsScreen}
            options={{ title: "CreatePostsScreen", headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Home", headerShown: false }}
          />
        </Stack.Navigator>
        {/* </View> */}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E5E5E5",
    // marginTop: 30,
  },
  text: {
    fontFamily: "Roboto-Regular",
  },
});
