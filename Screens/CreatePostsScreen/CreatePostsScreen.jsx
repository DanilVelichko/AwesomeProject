import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import TrashButton from "../../components/Buttons/TrashButton/TrashButton";


export default function CreatePostsScreen() {
    return (
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <TouchableOpacity>
            <BackButton style={styles.backButton} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Створити публікацію</Text>
            </View>
            
            <View style={styles.contentWrapper}>

            </View>

            <View style={styles.navigationWrapper}>
                <TouchableOpacity>
                    <TrashButton style={[styles.trashButton]} />    
                </TouchableOpacity>
            </View>
      </View>
    );
}
    
const styles = {
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
  backButton: {
    position: "absolute",
    right: 150,
    top: 0,
    width: 24,
    height: 24,
  },
  contentWrapper: {
    width: "100%",
    height: 641,
    gap: 32,
  },
  navigationWrapper: {
    width: "100%",
    height: 83,
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: 8,


  


  },
};
