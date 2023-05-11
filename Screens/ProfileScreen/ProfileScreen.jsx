import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import LogOutButton from "../../components/Buttons/LogOutButton/LogOutButton";
import MenuButton from "../../components/Buttons/MenuButton/MenuButton";
import UserButton from "../../components/Buttons/UserButton/UserButton";
import AddPostButton from "../../components/Buttons/AddPostButton/AddPostButton";
import PostsFeed from "../../components/PostsFeed/PostsFeed";

export default function ProfileScreen({ navigation }) {
    

    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Text style={styles.headerText}>Профіль</Text>
                <TouchableOpacity>  
                    <LogOutButton style={styles.ExitButton} />  
                </TouchableOpacity> 
            </View> 

            <View style={styles.contentWrapper}>
        
                <View style={styles.avatarContainer}>
                    <Image source={require("../../assets/avatarExample.png")} style={styles.avatar} />
                    <View style={styles.nameDataWrapper}>   
                        <Text style={styles.nameText}>Natali Romanova</Text>    
                        <Text style={styles.emailText}> example@email.com</Text>
                    </View>
                </View>
                <PostsFeed />   
            </View> 
{/*         
            <View style={styles.navigationWrapper}>
                <TouchableOpacity>  
                    <MenuButton style={[styles.homeButton]} />  
                </TouchableOpacity> 
                <TouchableOpacity   
                    onPress={() => navigation.navigate('CreatePosts')}> 
                    <AddPostButton style={[styles.addPostButton]} />    
                </TouchableOpacity> 
        
                <TouchableOpacity>  
                    <UserButton style={[styles.profileButton]} />   
                </TouchableOpacity>  
            </View> */}
        </View> 
    );  

}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1,
        backgroundColor: "#fff",
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
        right: 10,
        top: 10,
    },
    contentWrapper: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#E5E5E5",
    },
    avatarContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#fff",
        padding: 10,
        marginBottom: 10,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    nameDataWrapper: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        marginLeft: 10,
    },
    nameText: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#212121",
    },
    emailText: {
        fontSize: 14,
        fontWeight: "normal",
        color: "#212121",
    },
    navigationWrapper: {
        position: "relative",
        width: "100%",
        height: 44,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderTopWidth: 1,
        borderTopColor: "#c2b3b3",
    },
    homeButton: {
        width: 30,
        height: 30,
    },
    addPostButton: {
        width: 30,


        height: 30,
    },
    profileButton: {
        width: 30,
        height: 30,
    },
});
