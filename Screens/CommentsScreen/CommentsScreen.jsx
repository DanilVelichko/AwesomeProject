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
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import SendComment from "../../components/Buttons/SendComment/SendComment";
import { ScrollView } from "react-native";

const commentsArray = [
  {
    id: 1,
    autorTitle: "Автор 1",
    autorAvatar: require("../../assets/avatarUserDefault.png"),
    commentText:
      "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
    commentDate: "01.01.2021 12:00",
  },
  {
    id: 2,
    autorTitle: "userOwner",
    autorAvatar: require("../../assets/avatarUserComment.png"),
    commentText:
      "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
    commentDate: "02.01.2021 12:00",
  },
  {
    id: 3,
    autorTitle: "Автор 3",
    autorAvatar: require("../../assets/avatarUserDefault.png"),
    commentText: "Thank you! That was very helpful!",
    commentDate: "03.01.2021 12:00",
  },
];

const imageProps = {
  source: require("../../assets/fotoPostExample2.jpg"),
};

export default function CommentsScreen() {
  const [commentText, setCommentText] = useState("");

  const handleComments = (comment) => {
    console.log("Натиснуто відправити комент:", comment);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity
          onPress={() => {
            console.log("На left arrow клікнуто");
          }}
        >
          <BackButton style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Коментарі</Text>
      </View>

      <View style={styles.contentWrapper}>
        <Image style={styles.imagePost} {...imageProps} />

        <View style={styles.commentsWrapper}>
          {commentsArray.map(
            ({ id, autorAvatar, commentText, commentDate, autorTitle }) => (
              
              <View key={id} style={styles.commentBox}>
                {autorTitle === "userOwner" && (
                  <View style={styles.commentAuthorWrapper}>
                    <Text style={styles.commentText}>{commentText}</Text>
                    <Text style={styles.commentDateOwner}>{commentDate}</Text>
                  </View>
                )}
                <Image
                  style={styles.commentAuthorAvatar}
                  source={autorAvatar}
                />
                {autorTitle !== "userOwner" && (
                  <View style={styles.commentAuthorWrapper}>
                    <Text style={styles.commentText}>{commentText}</Text>
                    <Text style={styles.commentDate}>{commentDate}</Text>
                  </View>
                )}
              </View>
            )
          )}
        </View>
      </View>
      <KeyboardAvoidingView>
        <View style={styles.commentAddWrapper}>
          <View style={styles.commentAddBox}>
            <TextInput
              style={styles.commentInput}
              placeholder="Коментувати..."
              value={commentText}
              onChangeText={setCommentText}
            />
            <TouchableOpacity
              style={styles.commentSendButton}
              onPress={() => handleComments(commentText)}
              
            >
              <SendComment />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
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
  imagePost: {
    marginBottom: 32,
  },
  contentWrapper: {
    flex: 1,
    width: "100%",
    height: 641,
    paddingHorizontal: 16,
    paddingTop: 32,
  },

  commentsWrapper: {
    gap: 24,
  },
  commentBox: {
    flexDirection: "row",
    gap: 16,
  },

  commentAuthorWrapper: {
    position: "relative",
    width: 299,
    borderRadius: 6,
    borderTopLeftRadius: 0,
    backgroundColor: "#00000008",
    padding: 16,
    paddingBottom: 8,
  },
  commentText: {
    fontFamily: "Roboto",
    marginBottom: 8,
    fontSize: 13,
    color: "#212121",
  },
  commentDate: {
    // position: "absolute",
    fontFamily: "Roboto",
    fontSize: 10,
    paddingBottom: 6,
    textAlign: "right",

    color: "#BDBDBD",
  },
  commentDateOwner: {
    // position: "absolute",
    fontFamily: "Roboto",
    fontSize: 10,
    paddingBottom: 6,
    textAlign: "left",

    color: "#BDBDBD",
  },
  commentAddWrapper: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  //* Add comment
  commentAddBox: {
    position: "relative",

    width: 343,
    height: 50,

    // alignItems: "center",
    // justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 100,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
  },
  commentInput: {
    height: "100%",
    position: "absolute",
    left: 16,
    top: 0,
    width: 343,
    height: 50,
    fontSize: 15,
    fontFamily: "Roboto",
    color: "#212121",
  },
  commentSendButton: {
    position: "absolute",
    right: 8,
    top: 8,
  },
});
