import React from "react";
import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    useWindowDimensions,
    Platform,
} from "react-native";
import images from "@/constants/images";
import MainButton from "@/components/MainButton";
import SignInOption from "@/components/signInOption";
import BackButton from "@/components/BackButton";
import { useRouter } from "expo-router";
import LinkText from "@/components/LinkText";

const DriverWelcomeScreen = () => {
    const router = useRouter();
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;
    const isTablet = width >= 768;

    const onCreatePress = () => {
        router.push("/(onboarding)/intro");
    };

    return (
        <ImageBackground
            source={images.DriverWelcomeScreen}
            style={styles.mainBody}
            resizeMode="cover"
        >
            <View style={[styles.upperView, { flexDirection: isLandscape ? "row" : "column" }]}>
                <View style={styles.backView}>
                    <BackButton onPress={() => router.back()} />
                </View>
                <View style={[styles.textView, { width: isTablet ? "60%" : "85%" }]}>
                    <Text style={[styles.headerText, { fontSize: isTablet ? 64 : 50, lineHeight: isTablet ? 90 : 70 }]}>
                        WELCOME
                    </Text>
                    <Text style={[styles.paraText, { fontSize: isTablet ? 18 : 16 }]}>
                        Get ready to take on trips, meet new riders, and start earning with Toota.
                    </Text>
                </View>
            </View>

            <View style={styles.lowerView}>
                <View style={{ width: "100%", alignItems: "center" }}>
                    <MainButton text="Create an account" pressFun={onCreatePress} isEmpty />
                    <View style={styles.rowFlex}>
                        <Image source={images.line} />
                        <Text style={styles.alternateText}>  or continue using  </Text>
                        <Image source={images.line} />
                    </View>
                    <View style={[styles.othersFlex, { width: isTablet ? "70%" : "85%" }]}>
                        <SignInOption text="Google" icon={images.google} />
                        <SignInOption text="Apple" icon={images.apple} />
                    </View>
                </View>

                <TouchableOpacity>
                    <LinkText
                        text="I already have an account"
                        action={() =>
                            router.push({ pathname: "/(auth)/auth", params: { action: "login" } })
                        }
                    />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default DriverWelcomeScreen;

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    upperView: {
        flex: 0.6,
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingHorizontal: 20,
        paddingTop: Platform.OS === "ios" ? 50 : 30,
    },
    lowerView: {
        flex: 0.4,
        backgroundColor: "white",
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
    rowFlex: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    },
    alternateText: {
        color: "#bab6b0",
    },
    othersFlex: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
    },
    headerText: {
        color: "#ffffff",
        fontWeight: "bold",
    },
    paraText: {
        color: "#ffffff",
        lineHeight: 24,
        marginTop: 10,
    },
    textView: {
        marginVertical: 20,
    },
    backView: {
        paddingBottom: 10,
    },
});