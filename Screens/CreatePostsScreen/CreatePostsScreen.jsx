import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
} from "react-native";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import TrashButton from "../../components/Buttons/TrashButton/TrashButton";
import ContentBlock from "./../../components/Images/ContentBlock/ContentBlock";
import MapPin from "../../components/Icons/MapPin/MapPin";

export default function CreatePostsScreen() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [locationFocused, setLocationFocused] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isAllInputsFilled, setIsAllInputsFilled] = useState(false);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardOpen(true);
    });
    Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardOpen(false);
    });

    // cleanup function
    return () => {
      Keyboard.removeAllListeners("keyboardDidShow");
      Keyboard.removeAllListeners("keyboardDidHide");
    };
  }, []);

  useEffect(() => {
    if (title && location) {
      setIsAllInputsFilled(true);
    } else {
      setIsAllInputsFilled(false);
    }
  }, [title, location]);

  const handleCreatePostButton = () => {
    console.log("Create post button clicked");
    console.log(`Title: ${title}`);
    console.log(`Location: ${location}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity
          onPress={() => {
            console.log("На left arrow клікнуто");
          }}
        >
          <BackButton style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Створити публікацію</Text>
      </View>

      <View style={styles.contentWrapper}>
        <View style={styles.fotoBlock}>
          <TouchableOpacity
            onPress={() => {
              console.log("На фото клікнуто");
            }}
          >
            <ContentBlock />
          </TouchableOpacity>
        </View>
        <View style={styles.formBox}>
          <TouchableOpacity
            style={styles.loadLink}
            onPress={() => {
              console.log("Завантажте фото клікнуто");
            }}
          >
            <Text style={styles.loadLinkText}>Завантажте фото</Text>
          </TouchableOpacity>

          <KeyboardAvoidingView
            style={styles.keyboardAvoidingView}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.postDatadContainer}>
              <TextInput
                style={[styles.input, styles.titleInput]}
                placeholder={isFocused ? "" : "Назва..."}
                value={title}
                onChangeText={(text) => setTitle(text)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              {!locationFocused && <MapPin style={styles.mapPin} />}
              <TextInput
                style={[styles.input, styles.locationInput]}
                placeholder={locationFocused ? "" : "       Місцевість..."}
                value={location}
                onChangeText={(text) => setLocation(text)}
                onFocus={() => setLocationFocused(true)}
                onBlur={() => setLocationFocused(false)}
              />
            </View>
          </KeyboardAvoidingView>

          <TouchableOpacity
            style={[
              styles.createPostButton,
              { backgroundColor: isAllInputsFilled ? "#FF6C00" : "#F6F6F6" },
            ]}
            onPress={handleCreatePostButton}
          >
            <Text
              style={[
                styles.createPostButtonText,
                { color: isAllInputsFilled ? "#FFFFFF" : "#BDBDBD" },
              ]}
            >
              Опублікувати
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {!keyboardOpen && (
        <View style={styles.navigationWrapper}>
          <TouchableOpacity
            onPress={() => {
              console.log("Видалити клікнуто");
            }}
          >
            <TrashButton style={[styles.trashButton]} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    // backgroundColor: "#E5E5E5",
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
    fontFamily: "Roboto",
  },
  backButton: {
    position: "absolute",
    right: 150,
    top: 0,
    width: 24,
    height: 24,
  },
  contentWrapper: {
    flex: 1,
    width: "100%",
    height: 641,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  fotoBlock: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  formBox: {
    width: "100%",
  },
  loadLinkText: {
    fontSize: 16,
    color: "#BDBDBD",
    fontFamily: "Roboto",
    marginBottom: 40,
  },
  loginLink: {},
  postDatadContainer: {
    width: "100%",

    marginBottom: 32,
  },
  input: {
    width: "100%",
    height: 40,

    marginBottom: 8,
    fontSize: 16,
    fontFamily: "Roboto",
    borderBottomWidth: 1,
    borderBottomColor: "#d3c5c5",
  },
  mapPin: {
    position: "absolute",
    left: 0,
    top: 55,
  },
  createPostButton: {
    borderRadius: 100,
    padding: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  createPostButtonText: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },

  navigationWrapper: {
    width: "100%",
    height: 83,
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: 8,
  },
});
