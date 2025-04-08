import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import images from "@/constants/images";

const WelcomeScreen = () => {

    return (
        <ImageBackground source={images.welcome} style={styles.mainBody}>

        </ImageBackground>
    )

}

export default WelcomeScreen


const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
