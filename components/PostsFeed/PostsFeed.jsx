import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import MapPin from "../Icons/MapPin/MapPin";
import Comments from "../Icons/Comments/Comments";

const postsArray = [
  {
    title: "Поїздка на велосипеді",
    comments: "10",
    location: "Kyiv",
    foto: require("../../assets/fotoPostExample.jpg"),
    id: 1,
  },
  {
    title: "Поїздка на велосипеді 2",
    comments: "122",
    location: "Dnipro",
    foto: require("../../assets/fotoPostExample2.jpg"),
    id: 2,
  },
  {
    title: "Поїздка на велосипеді 3",
    comments: "1",
    location: "Kherson",
    foto: require("../../assets/fotoPostExample.jpg"),
    id: 3,
  },
];

export default function PostsFeed() {
  return (
    <ScrollView style={styles.postWrapper}>
      {postsArray.map((post) => {
        return (
          <View key={post.id} style={styles.postContainer}>
            <Image style={styles.foto} source={post.foto} />

            <View style={styles.postDataWrapper}>
              <Text style={styles.postTitleText}>{post.title}</Text>
              <View style={styles.dataBox}>
                <View style={styles.commentsBox}>
                  <Comments style={styles.postCommentsIcon} />
                  <Text style={styles.postCommentsText}>{post.comments}</Text>
                </View>
                <View style={styles.locationBox}>
                  <MapPin style={styles.postLocationIcon} />
                  <Text style={styles.postLocationText}>{post.location}</Text>
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = {
  postWrapper: {
    flex: 1,
    width: "100%",
    height: 549,
    flexDirection: "column",
       paddingHorizontal: 16,
  },
  postContainer: {
    width: "100%",
    height: 300,
    // backgroundColor: "#FFFFFF",
    marginBottom: 32,
  },
  postDataWrapper: {
    flex: 1,
    flexDirection: "column",
  },
  foto: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  postTitleText: {
    flex: 1,
    fontSize: 16,
    color: "#000000",
  },
  dataBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  postCommentsIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  postCommentsText: {
    fontSize: 16,
    color: "#BDBDBD",
    marginRight: 20,
  },
  commentsBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  locationBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  postLocationIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  postLocationText: {
    fontSize: 16,
    color: "#212121",
    textDecorationLine: "underline",
  },
};
