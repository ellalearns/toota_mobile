import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import images from "@/constants/images";
import MainButton from "@/components/MainButton";
import stylesMainButton from "@/styles/styles_MainButton";
import SignInOption from "@/components/signInOption";
import BackButton from "@/components/BackButton";

const WelcomeScreen = () => {

    const onCreatePress = () => { }

    return (
        <ImageBackground source={images.welcome} style={styles.mainBody} imageStyle={{
            transform: [{
                translateY: -70
            }]
        }}>

            {/* <View style={styles.transparentView}></View> */}

            <View style={styles.upperView}>
                <BackButton />
            </View>

            <View style={styles.lowerView}>

                <View>
                
                <MainButton text="Create an account" pressFun={onCreatePress} />
                
                <View style={styles.rowFlex}>
                    <Image source={images.line} />
                    <Text style={styles.alternateText}>  or continue using  </Text>
                    <Image source={images.line} />
                </View>

                <View style={styles.othersFlex}>
                    <SignInOption text="Google" icon={images.google} />
                    <SignInOption text="Apple" icon={images.apple} />
                </View>

                </View>

                <TouchableOpacity>
                    <Text style={[styles.continueText, styles.signInText]}>I already have an account</Text>
                </TouchableOpacity>


            </View>

        </ImageBackground>
    )

}

export default WelcomeScreen


const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: "center",
    },
    transparentView: {
        backgroundColor: "green",
        height: 200,
        width: 100,
    },
    upperView: {
        flex: 0.6,
    },
    lowerView: {
        flex: 0.4,
        backgroundColor: "white",
        height: "100%",
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    rowFlex: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    alternateText: {
        color: "#bab6b0"
    },
    othersFlex: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "85%",
        marginTop: 20,
        marginLeft: 2
    },
    continueText: {
        fontSize: 15,
        color: "#6b6357",
        textAlign: "center",
    },
    selectedContinueText: {
        color: "#fef5e8"
    },
    signInText: {
        color: "#f99e1a",
        textDecorationLine: "underline",
    }
})
