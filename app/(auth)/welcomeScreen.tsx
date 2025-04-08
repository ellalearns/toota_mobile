import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import images from "@/constants/images";

const WelcomeScreen = () => {

    return (
        <ImageBackground source={images.welcome} style={styles.mainBody} imageStyle={{
            transform: [{
                translateY: -70
            }]
        }}>

            {/* <View style={styles.transparentView}></View> */}

            <View style={styles.upperView}></View>

            <View style={styles.lowerView}></View>


        </ImageBackground>
    )

}

export default WelcomeScreen


const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    transparentView: {
        backgroundColor: "green",
        height: 200,
        width: 100,
    },
    upperView: {
        flex: 0.6
    },
    lowerView: {
        flex: 0.4,
        backgroundColor: "white",
        height: "100%",
        width: "100%"
    }
})
