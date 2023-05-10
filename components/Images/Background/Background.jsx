import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";

export default function BackgroundImage({ children }) {
  return (
    <ImageBackground
      source={require("../../../assets/background.png")}
      style={styles.backgroundImage}
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "flex-end",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -100,
  },
});
