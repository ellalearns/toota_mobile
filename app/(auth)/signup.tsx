import PageIcon from "@/components/PageIcon";
import copy from "@/constants/texts";
import styles_SignUp from "@/styles/styles_SignUp";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles_SignUp.main}>
                <View style={styles_SignUp.headerContent}>
                <PageIcon />
                <Text style={styles_SignUp.signup1}>{copy.signup1}</Text>
                <Text style={styles_SignUp.signup2}>{copy.signup2}</Text>
                </View>


                <View></View>
                <View></View>

            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default SignUp
