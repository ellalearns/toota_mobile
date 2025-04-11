import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import copy from "@/constants/texts";

const TootaIntro = () => {

    const headers = copy.onHeaders
    const text = copy.onText
    

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Text>Final Onboarding Screen</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default TootaIntro
