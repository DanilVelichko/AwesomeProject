import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import React, { useState } from 'react';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import { RegistrationScreen } from './Screens/RegistrationScreen/RegistrationScreen';
import PostsScreen from './Screens/PostsScreen/PostsScreen';


export default function App() {
  // const [courses, setCourses] = useState(COURSES);
    const [fontsLoaded] = useFonts({
      "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
      "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    });
  
  if (!fontsLoaded) {
    return null;
  }

return (
  <View style={styles.container}>
       {/* <RegistrationScreen /> */}
       
    {/* <LoginScreen /> */}
    <PostsScreen />
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    marginTop: 30,
  },

});
