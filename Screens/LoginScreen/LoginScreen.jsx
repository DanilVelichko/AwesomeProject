import React, { useState } from "react";
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

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    console.log("Login button clicked");

    if (email === "") {
      setEmailError("Введіть email");
      console.log(emailError);
    }
    if (password === "") {
      setPasswordError("Введіть пароль");
      console.log(passwordError);
    }

    if (email !== "" && password !== "") {
      console.log(`Email: ${email}`);
      console.log(`Password: ${password}`);
      console.log("Login successful");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/background.png")}
          style={styles.backgroundImage}
        >
          <View style={styles.formContainer}>
            <Text style={styles.title}>Увійти</Text>

            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
              value={email}
              onChangeText={setEmail}
            />

            <View style={styles.passwordContainer}>
              <TextInput
                style={[styles.input, styles.passwordInput]}
                placeholder="Пароль"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
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

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Увійти</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.registerLink}>
              <Text style={styles.registerLinkText}>
                Немає акаунта? Зареєструватись
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    position: "relative",
  },
  backgroundImage: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
    justifyContent: "flex-end",
    textAlign: "center",
  },
  formContainer: {
    position: "relative",
    width: "100%",
    maxHeight: 489,
    height: "100%",

    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    color: "#212121",
    marginTop: 32,
    marginBottom: 32,
  },
  input: {
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 15,
    marginBottom: 16,
    width: "100%",
    color: "#494444",
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
  loginButton: {
    backgroundColor: "#FF6C00",
    borderRadius: 10,
    padding: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  registerLink: {
    marginTop: 16,
  },
  registerLinkText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
});
