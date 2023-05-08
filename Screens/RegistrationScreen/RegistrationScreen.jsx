import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import AddButton from "../../components/Buttons/AddButton/AddButton";

export function RegistrationScreen() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.formContainer}>
          <View style={styles.avatarContainer}>
            <Image
              source={require("../../assets/avatar.png")}
              style={styles.avatar}
            />

            <TouchableOpacity>
              <AddButton style={[styles.addButtonSVG]} />
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Реєстрація</Text>
          <TextInput style={styles.input} placeholder="Логін" />
          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
          />
          {/* <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          > */}
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              placeholder="Пароль"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.showPasswordButton}
            >
              <Text style={styles.showPasswordText}>
                {showPassword ? "Сховати" : "Показати"}
              </Text>
            </TouchableOpacity>
          </View>
          {/* </KeyboardAvoidingView> */}

          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Зареєструватись</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginLink}>
            <Text style={styles.loginLinkText}>Вже є аккаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    position: "relative",
  },
  backgroundImage: {
    flex: 1,
    position: "absolute",

    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  formContainer: {
    position: "relative",
    flex: 1,
    width: "100%",
    maxHeight: 549,
    // height: "68%",

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#FFFFFF",
  },
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
  addButtonSVG: {
    position: "absolute",
    bottom: 50,
    right: -77,
    width: 25,
    height: 25,
     borderRadius: 50,
  },
  title: {
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    color: "#212121",
    marginBottom: 32,
  },
  input: {
    backgroundColor: "#fff",

    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 15,
    marginBottom: 10,
    width: "100%",
    color: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  passwordContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    color: "#BDBDBD",
  },
  showPasswordButton: {
    position: "absolute",
    right: 16,
    top: 18,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  showPasswordText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
  },
  registerButton: {
    backgroundColor: "#FF6C00",
    borderRadius: 10,
    padding: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  registerButtonText: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  loginLink: {
    marginTop: 16,
  },
  loginLinkText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
});
