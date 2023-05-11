import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
// buttons and icons
import LogOutButton from "../../components/Buttons/LogOutButton/LogOutButton";
import MenuButton from "../../components/Buttons/MenuButton/MenuButton";
import UserButton from "../../components/Buttons/UserButton/UserButton";
import AddPostButton from "../../components/Buttons/AddPostButton/AddPostButton";
import PostsFeed from "../../components/PostsFeed/PostsFeed";
import PostsScreen from "../PostsScreen/PostsScreen";
import TrashButton from "../../components/Buttons/TrashButton/TrashButton";

import ProfileScreen from "../ProfileScreen/ProfileScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";

const MainTab = createBottomTabNavigator();

export default function HomeScreen({ navigation, route }) {
//  const { name } = route;
//  console.log("HomeScreen", name);
  return (
    <MainTab.Navigator>
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <MenuButton />,
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <MainTab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <AddPostButton />,
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <UserButton />,
          tabBarLabel: () => {
            return null;
          },
        }}
      />
    </MainTab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
