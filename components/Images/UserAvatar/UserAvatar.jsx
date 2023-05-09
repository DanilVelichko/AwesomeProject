import React from "react";
import { View, Text, Image, ScrollView } from "react-native";


export default function UserAvatar({}) {
    const avatar = require("../../../assets/avatar.png");
  return (
    <View style={styles.avatarContainer}>
      <Image source={avatar} style={styles.avatar} />
    </View>
  );
}

const styles = {
    avatarContainer: {
    position: "absolute",
    top: -60,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 20,
  },
  avatar: {
    width: 132,
    height: 120,
    marginBottom: 32,
    },
    };
    