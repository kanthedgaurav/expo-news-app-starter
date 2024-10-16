import { Image,StyleSheet,Text,TouchableOpacity,View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {}

const Header = (props: Props) => {
    return (
        <View style={styles.container}>
    <View style={styles.userInfo}>
    <Image source={{uri:'https://xsgames.co/randomusers/avatar.php?g=male'}} style={styles.userImg} 
    />
    <View>
    <Text style={styles.welcomeText}>Welcome!</Text>
    <Text style={styles.userName}>John Doe</Text>
    </View>
    </View>
    <TouchableOpacity onPress={() => {}}>
    <Ionicons name="notifications-outline" size={24} color="black" />
     </TouchableOpacity>
    </View>
    )
    }   

export default Header

const styles = StyleSheet.create({
    container : {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    userImg:
    {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap:10
    },
    welcomeText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'gray',
    },
    userName : {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    }

})