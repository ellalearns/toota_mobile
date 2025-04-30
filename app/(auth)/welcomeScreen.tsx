import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import images from "@/constants/images";
import MainButton from "@/components/MainButton";
import SignInOption from "@/components/signInOption";
import BackButton from "@/components/BackButton";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import LinkText from "@/components/LinkText";

export default function WelcomeScreen () {

    const router = useRouter()

    const onCreatePress = () => {
        router.push("/(onboarding)/intro")
    }

    return (
        <ImageBackground source={images.welcome} style={styles.mainBody} imageStyle={{
            transform: [{
                translateY: -70
            }]
        }}>


            <LinearGradient
                colors={["#f99e1a", "#935d0f"]}
                style={styles.transparentView}>

            </LinearGradient>

            <View style={styles.upperView}>
                <View style={styles.backView}>
                    <BackButton onPress={() => { router.back() }} />
                </View>
                <View style={styles.textView}>
                    <Text style={styles.headerText}>Welcome</Text>
                    <Text style={styles.paraText}>Experience hassle-free transportation with a variety of vehicles ready to meet your needs.</Text>
                </View>
            </View>

            <View style={styles.lowerView}>

                <View>

                    <MainButton text="Create an account" pressFun={onCreatePress} isEmpty />

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
                    {/* <Text style={[styles.continueText, styles.signInText]}>I already have an account</Text> */}
                    <LinkText text="I already have an account" action={() => router.push({pathname: "/(auth)/auth", params: {action: "login"}})} />
                </TouchableOpacity>


            </View>

        </ImageBackground>
    )

}

// export default WelcomeScreen


const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: "center",
    },
    transparentView: {
        height: 500,
        width: 500,
        position: "absolute",
        borderRadius: 230,
        transform: [{
            translateX: -180
        }, {
            translateY: 80
        }],
        opacity: 0.3
    },
    upperView: {
        flex: 0.6,
        justifyContent: "space-between"
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
    },
    headerText: {
        color: "#ffffff",
        fontSize: 45,
        lineHeight: 90
    },
    paraText: {
        color: "#ffffff",
        fontSize: 16.5,
        lineHeight: 25,
    },
    textView: {
        width: "50%",
        margin: 20,
        marginBottom: 55
    },
    backView: {
        paddingTop: 24,
        paddingLeft: 20
    }
})
