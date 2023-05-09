import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import LogOutButton from "../../components/Buttons/LogOutButton/LogOutButton";
import MenuButton from "../../components/Buttons/MenuButton/MenuButton";
import UserButton from "../../components/Buttons/UserButton/UserButton";
import AddPostButton from "../../components/Buttons/AddPostButton/AddPostButton";
import PostsFeed from "../../components/PostsFeed/PostsFeed";

const userData = {
  name: "Natali Romanova",
  email: "example@example.com",
  avatar: require("../../assets/avatarExample.png"),
};

function PostsScreen() {
  const { name, email, avatar } = userData;
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Публікації</Text>
        <TouchableOpacity>
          <LogOutButton style={styles.ExitButton} />
        </TouchableOpacity>
      </View>

      <View style={styles.contentWrapper}>
        <View style={styles.avatarContainer}>
          <Image source={avatar} style={styles.avatar} />

          <View style={styles.nameDataWrapper}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.emailText}>{email}</Text>
          </View>
        </View>
        <PostsFeed /> //**Компонент - Рендер постів */
      </View>

      <View style={styles.navigationWrapper}>
        <TouchableOpacity>
          <MenuButton style={[styles.homeButton]} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AddPostButton style={[styles.addPostButton]} />
        </TouchableOpacity>
        <TouchableOpacity>
          <UserButton style={[styles.profileButton]} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    backgroundColor: "#E5E5E5",
  },
  headerWrapper: {
    position: "relative",
    width: "100%",
    height: 44,

    alignItems: "center",
    justifyContent: "center",

    borderBottomWidth: 1,
    borderBottomColor: "#c2b3b3",
  },

  headerText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#212121",
  },
  ExitButton: {
    position: "absolute",
    left: 150,
    top: -20,
    width: 24,
    height: 24,
  },
  contentWrapper: {
    width: "100%",
    height: 641,
    gap: 32,
  },
  avatarContainer: {
    gap: 8,
    width: 171,
    height: 60,
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 52,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  nameDataWrapper: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  nameText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#212121CC",
  },
  emailText: {
    fontSize: 11,
    // fontWeight: "bold",
    color: "#000",
  },
  postsWrapper: {
    width: "100%",
    height: "100%",
  },

  navigationWrapper: {
    width: "100%",
    height: 83,
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: 8,

    borderTopWidth: 1,
    borderTopColor: "#c9bdbd",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 85,
  },
  homeButton: {},
  addPostButton: {},
  profileButton: {},
});
