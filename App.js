import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import React, { useState, useCallback } from 'react';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import  RegistrationScreen  from './Screens/RegistrationScreen/RegistrationScreen';
import PostsScreen from './Screens/PostsScreen/PostsScreen';
import CreatePostsScreen from './Screens/CreatePostsScreen/CreatePostsScreen';
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
     const [fontsLoaded] = useFonts({
       "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
       "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
     });
  
 const onLayoutRootView = useCallback(async () => {
   if (fontsLoaded) {
     await SplashScreen.hideAsync();
   }
 }, [fontsLoaded]);

 if (!fontsLoaded) {
   return null;
 }

return (
  <View style={styles.container} onLayout={onLayoutRootView}>
    {/* <RegistrationScreen /> */}

    {/* <LoginScreen /> */}

    {/* <CreatePostsScreen /> */}
    {/* <PostsScreen /> */}
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E5E5E5",
    marginTop: 30,
   
  },
});
