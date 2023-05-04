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


export default function PosstsScreen() { 

    return (
        <View style={styles.container}>
        <ImageBackground
            source={require("../../assets/background.png")}
            style={styles.backgroundImage}
        >
            <View style={styles.formContainer}>
            <Text style={styles.title}>Пости</Text>
            <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.registerButtonText}>Створити пост</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginLink}>
                <Text style={styles.loginLinkText}>
                Немає акаунта? Зареєструватись
                </Text>
            </TouchableOpacity>
            </View>
        </ImageBackground>
        </View>
    );
    }