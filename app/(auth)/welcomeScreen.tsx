import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import images from "@/constants/images";
import MainButton from "@/components/MainButton";
import stylesMainButton from "@/styles/styles_MainButton";

const WelcomeScreen = () => {

    const onCreatePress = () => { }

    return (
        <ImageBackground source={images.welcome} style={styles.mainBody} imageStyle={{
            transform: [{
                translateY: -70
            }]
        }}>

            {/* <View style={styles.transparentView}></View> */}

            <View style={styles.upperView}></View>

            <View style={styles.lowerView}>
                <MainButton text="Create an account" pressFun={onCreatePress} />
                
                <View style={styles.rowFlex}>
                    <Image source={images.line} />
                    <Text style={styles.alternateText}>or continue using</Text>
                    <Image source={images.line} />
                </View>


            </View>

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
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center"
    },
    rowFlex: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    alternateText: {
        color: "#bab6b0"
    }
})
